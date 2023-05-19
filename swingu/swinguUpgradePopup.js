// -------------------------------------
// CONSTANTS
// -------------------------------------
const WAIT_INTERVAL_TIMEOUT = 100
const IMAGE_DIR_URL = 'https://conversionratestore.github.io/projects/swingu/img'

// Define CSS styles
const style = /*html*/`
    <style>
      .main-column {
        background: #fff;
      }

      .main-column section,
        .in-app-upgrade-state--show:before,
        .in-app-upgrade-ctas {
            display: none !important;
        }

        .page-template-page-sections .main-container .main-column {
            padding-bottom: 120px !important;
        }

        .header-type-in-app,
        .price-comparison-table,
        .video-hero__content,
        .in-app-upgrade-ctas__open-upgrade-tray {
            display: none !important;
        }

        .video-hero__player {
            padding: 24px 18px !important;
        }

        /* HEADER */

        .my_header {
            background-image: url(${IMAGE_DIR_URL}/golf_bg.svg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: 0px -25px;
            text-align: center;
            padding: 20px 20px 75px 20px;
        }

        .main-column section.choose_plan {
            background: #fff;
            display: block !important;
        }

        .choose_plan .close_x {
            text-align: left;
        }

        .choose_plan h2 {
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 30px;
            line-height: 38px;
            color: #FFFFFF;
            margin: 16px 0 24px;
        }

        .choose_label {
            font-family: 'Inter', 'Roboto', sans-serif;
            font-weight: 500;
            font-size: 16px;
            line-height: 19px;
            color: #FFFFFF;
        }

        .toggle_plan {
            display: flex;
            justify-content: space-between;
            position: relative;
            width: fit-content;
            background: #F5F8FA;
            border: 1px solid #D9E1E8;
            border-radius: 26px;
            padding: 4px;
            margin: 16px auto 27px;
        }

        .toggle_plan span {
            width: 111px;
            z-index: 1;
            transition: color .3s ease-in-out;
            text-align: center;
            padding: 5px 0;
            font-family: 'Inter', 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: #FFFFFF;
        }

        .toggle_plan span:first-child {
            color: #FFFFFF;
            margin-right: 12px;
        }

        .toggle_plan span:first-child+span {
            color: #2B2B2B;
        }

        .dark_bg {
            position: absolute;
            top: 4px;
            left: 4px;
            height: calc(100% - 8px);
            width: 111px;
            background-color: #253139;
            transition: transform .3s ease-in-out;
            border-radius: 30px;
        }

        .toggle_plan.monthly_active .dark_bg {
            transform: translateX(calc(100% + 12px));
        }

        .toggle_plan.monthly_active span:first-child {
            color: #2B2B2B;
        }

        .toggle_plan.monthly_active span:first-child+span {
            color: white;
        }

        /* PLANS CHECKBOX */
        .plans_checkbox_container .annual_checkbox_wrapper,
        .plans_checkbox_container.show_annual .monthly_checkbox_wrapper {
            display: none;
        }

        .plans_checkbox_container {
            padding: 0 20px;
            margin-top: -75px;
        }

        .plans_checkbox_container.show_annual .annual_checkbox_wrapper {
            display: flex;
            justify-content: space-between;
        }

        .annual_checkbox_wrapper {
            margin-bottom: 42px;
            position: relative;
        }

        .monthly_checkbox_wrapper {
            margin-bottom: 16px;
        }

        .annual_checkbox_wrapper.subs {
            pointer-events: none;
            margin-bottom: 16px;
        }

        .subs .pro_pack_bottom {
            display: none !important;
        }

        .annual_checkbox_wrapper .plan_checkbox {
            width: 50%;
            text-align: left;
        }

        .annual_checkbox_wrapper .plan_checkbox:first-child {
            margin-right: 10px;
        }

        .monthly_checkbox_wrapper .plan_checkbox {
            padding: 26px 16px;
        }

        .plan_checkbox {
            position: relative;
            background: #F5F8FA;
            border: 1px solid #D9E1E8;
            border-radius: 10px;
            padding: 16px;
            transition: all .3s ease-in-out;
            z-index: 1;
            align-self: flex-start;
        }

        .plan_checkbox.checkbox_active_plan {
            background: #253139;
            border-color: #FFC803;
            box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        }

        .plan_checkbox.checkbox_active_plan p {
            color: #FFFFFF;
        }

        .plan_checkbox p {
            color: #2B2B2B;
            margin: 0;
        }

        .check_circle {
            display: flex;
            position: absolute;
            top: 12px;
            right: 12px;
        }

        .check_circle img {
            width: 18px;
            height: 18px;
        }

        .monthly_checkbox_wrapper .check_circle {
            top: 22px;
        }

        .plan_checkbox:not(.checkbox_active_plan) .check_circle img:first-child {
            display: none;
        }

        .plan_checkbox.checkbox_active_plan .check_circle img:last-child {
            display: none;
        }

        .plan_checkbox p.free_trial {
            position: absolute;
            top: -11px;
            left: 12px;
            background: #FFC803;
            border-radius: 28px;
            padding: 4px 12px;
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            color: #000000;
        }

        .plan_checkbox .title {
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 24px;
            line-height: 29px;
        }

        .plan_checkbox p.price {
            margin: 6px 0;
            font-family: 'Inter', 'Roboto', sans-serif;
            font-size: 14px;
            line-height: 17px;
        }

        .plan_checkbox .month_price p.price {
            margin-bottom: 0 !important;
        }

        .plan_checkbox .month_price {
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
        }

        .plan_checkbox .month_price s {
            color: #596974;
        }

        .plan_checkbox.checkbox_active_plan .month_price s {
            color: #D9D9D9;
        }

        .plan_checkbox p.price_off {
            position: absolute;
            top: 44px;
            right: -1px;
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            color: #2B2B2B;
            padding: 5px;
            background: #FFC803;
            border-radius: 28px 0px 0px 28px;
        }

        .pro_pack_bottom {
            position: absolute;
            width: calc(50% - 6px);
            left: 0;
            bottom: -28px;
            padding-top: 16px;
            background: #F5F8FA;
            border: 1px solid #F5F8FA;
            border-radius: 0 0 10px 10px; 
            transform: translateY(0);
            transition: all .3s ease-in-out;  
            border: 1px solid #D9E1E8;
        } 

        .pro_pack_bottom p {
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            letter-spacing: -0.01em;
            color: #596974; 
            margin-bottom: 6px;
        }

        .pro_pack_bottom p span {
            font-weight: 600;
        }

        .checkbox_active_plan + .pro_pack_bottom {
            border-color: #FFC803;
        }

        .curr_plan {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 6px;
            background: #F5F8FA;
            border-top: 1px solid #D9E1E8;
            margin: 16px -16px -16px;
            border-radius: 0 0 9px 9px;
        }

        .curr_plan.hide_curr_label {
            display: none;
        }
        
        .monthly_checkbox_wrapper .curr_plan {
            margin-bottom: -26px;
        }

        .curr_plan p {            
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 12px;
            line-height: 14px;
            text-align: center;
            letter-spacing: -0.01em;
            color: #2B2B2B !important;
            margin-left: 4px;
        }

        .checkbox_active_plan .curr_plan {
            border-color: #FFC803;
        }

        /* List */

        .list {            
            margin: 16px 0;
            text-align: left;
            padding: 0 20px;          
        }

        .list li {
            position: relative;
            font-weight: 400;
            font-size: 14px;
            line-height: 19px;
            color: #253139;
            font-family: 'SF Pro Text', 'SF Pro Display', 'Roboto', sans-serif;
            margin-bottom: 11px;
            margin-left: 30px;
            letter-spacing: -0.15px;
        }
        .list li::before {
            content: "";
            position: absolute;
            display: inline-block;
            top: 50%;
            transform: translateY(-50%);
            left: -30px;
            width: 16px;
            height: 16px;
            background: url(${IMAGE_DIR_URL}/check_arr_yellow.svg) no-repeat center center;
            background-size: cover;
        }

        .list.plus_list li:nth-child(4),
        .list.plus_list li:nth-child(5),
        .list.plus_list li:nth-child(6) {
            color: #A0ADB6;
        }

        .list.plus_list li:nth-child(4)::before,
        .list.plus_list li:nth-child(5)::before,
        .list.plus_list li:nth-child(6)::before {
            width: 21px;
            height: 23px;
            background: url(${IMAGE_DIR_URL}/pro_v.svg) no-repeat center center;
        }

        .features {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;           
            border: 1px solid #D9E1E8;
            border-radius: 10px;
            z-index: 1;
            background: #FFFFFF;
            margin: 0 20px 12px;
box-shadow: 0px 1px 3px rgba(19, 24, 33, 0.07);
border-radius: 10px;
        }

        .features > div {
            display: flex;
            align-items: center;
        }

        .table_wrap {
            max-height: 0;
            overflow: hidden;
            transition: max-height 1s ease-in-out;
            border-radius: 0 0 10px 10px;
        }

        .features.show_table {
            border-radius: 10px;
        }

        .features > div + img {
            transform: rotate(180deg);
        }      

        .features.show_table > div + img {
            transform: rotate(0) !important;
        }
        .features.show_table + .table_wrap {
          max-height: 2000px;
          border-top: 1px solid #F5F8FA;
        }

        .features p {
            font-family: 'Inter', 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            color: #008A00;
            margin: 0;
            margin-left: 7px;
        }

        /* TABLE */

        #plans_comparison_table {
            border-collapse: collapse;
            margin: 0 0 35px 20px;
        }

        #plans_comparison_table th,
        #plans_comparison_table td {
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
        }

        #plans_comparison_table th:not(th:first-child) {
            padding-top: 14px;
        }

        #plans_comparison_table th:not(th:first-child),
        #plans_comparison_table td:not(td:first-child) {
            background: #F5F8FA;
        }

        #plans_comparison_table tr:first-child {
            margin-bottom: 10px;
        }

        #plans_comparison_table tr th:first-child {
            font-weight: 700;
            font-size: 18px;
            line-height: 20px;
            color: #253139;
        }

        #plans_comparison_table tr th:not(th:first-child) {
            font-weight: 700;
            font-size: 16px;
            line-height: 20px;
            padding-bottom: 10px;
        }

        #plans_comparison_table tr th:nth-child(2) {
            color: #596974;
        }

        #plans_comparison_table tr th:nth-child(3) {
            color: #49BB54;
        }

        #plans_comparison_table tr th:nth-child(4) {
            color: #FFC803;
        }

        #plans_comparison_table tr:not(:first-child) {
            border-bottom: 1px solid #D9E1E8;
        }

        #plans_comparison_table td {
            border: none;
            padding: 10px 0;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #596974;
        }

        #plans_comparison_table td:not(:first-child) {
            text-align: center;
            vertical-align: middle;
        }

        #plans_comparison_table td:not(:first-child) img {
            display: inline-block;
            vertical-align: middle;
        }

        #plans_comparison_table th:first-child,
        #plans_comparison_table td:first-child {
            padding-right: 16px;
            text-align: left;
        }

        #plans_comparison_table th:nth-child(2),
        #plans_comparison_table td:nth-child(2) {
            padding-left: 20px;
        }

        #plans_comparison_table th:nth-child(3),
        #plans_comparison_table td:nth-child(3) {
            padding-left: 15px;
            padding-right: 15px;
        }

        #plans_comparison_table th:nth-child(4),
        #plans_comparison_table td:nth-child(4) {
            padding-right: 20px;
        }

        /* fixed_div */

        .fixed_div {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;            
            background: #FFFFFF;
            box-shadow: 0px -2px 8px rgba(37, 49, 57, 0.1);
            z-index: 9999;
            text-align: center;
        }

        .fixed_div > div {
            padding: 16px 20px 20px;
        }

        .fixed_div p {
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 14px;
            line-height: 20px;
            color: #253139;
            margin-bottom: 16px;
        }

        .fixed_div button {
            all: unset;
            width: 100%;
            background: #49BB54;
            border-radius: 10px;
            padding: 18px 0;
            font-family: 'SF Pro Display', 'Roboto', sans-serif;
            font-weight: 600;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            letter-spacing: 0.38px;
            color: #FFFFFF;
        }

        @media only screen and (max-width: 385px) {
            .plan_checkbox p.price_off,
            .pro_pack_bottom p {
                font-size: 11px;
            }
        }

        @media only screen and (max-width: 375px) {
            .plan_checkbox p.price_off,
            .pro_pack_bottom p {
                font-size: 10px;
            }
        }

        
        @media only screen and (max-width: 355px) {
            .plans_checkbox_container {
                padding: 0 10px;
            }

            #plans_comparison_table th:nth-child(3), #plans_comparison_table td:nth-child(3) {
                padding-left: 10px;
                padding-right: 10px;
            }
        }

        @media only screen and (max-width: 335px) {
            .plans_checkbox_container {
                padding: 0 5px;
            }

            .annual_checkbox_wrapper .plan_checkbox:first-child {
                margin-right: 5px;
            }

            #plans_comparison_table th:nth-child(2), #plans_comparison_table td:nth-child(2) {
                padding-left: 15px;
            }
        }
    </style>
`

// -------------------------------------
// HTML ELEMENTS
// -------------------------------------
const smallCheckSvg = `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.02 8.26L4.4975 6.7375C4.36917 6.60917 4.21167 6.545 4.025 6.545C3.83833 6.545 3.675 6.615 3.535 6.755C3.40667 6.88333 3.3425 7.04667 3.3425 7.245C3.3425 7.44333 3.40667 7.60667 3.535 7.735L5.53 9.73C5.65833 9.85833 5.82167 9.9225 6.02 9.9225C6.21833 9.9225 6.38167 9.85833 6.51 9.73L10.4825 5.7575C10.6108 5.62917 10.675 5.47167 10.675 5.285C10.675 5.09833 10.605 4.935 10.465 4.795C10.3367 4.66667 10.1733 4.6025 9.975 4.6025C9.77667 4.6025 9.61333 4.66667 9.485 4.795L6.02 8.26ZM7 14C6.03167 14 5.12167 13.8161 4.27 13.4484C3.41833 13.0811 2.6775 12.5825 2.0475 11.9525C1.4175 11.3225 0.918867 10.5817 0.5516 9.73C0.183867 8.87833 0 7.96833 0 7C0 6.03167 0.183867 5.12167 0.5516 4.27C0.918867 3.41833 1.4175 2.6775 2.0475 2.0475C2.6775 1.4175 3.41833 0.918633 4.27 0.5509C5.12167 0.183633 6.03167 0 7 0C7.96833 0 8.87833 0.183633 9.73 0.5509C10.5817 0.918633 11.3225 1.4175 11.9525 2.0475C12.5825 2.6775 13.0811 3.41833 13.4484 4.27C13.8161 5.12167 14 6.03167 14 7C14 7.96833 13.8161 8.87833 13.4484 9.73C13.0811 10.5817 12.5825 11.3225 11.9525 11.9525C11.3225 12.5825 10.5817 13.0811 9.73 13.4484C8.87833 13.8161 7.96833 14 7 14Z" fill="#49BB54"/>
</svg>
`

const content = /*html*/`
    <section class="choose_plan">
        <div class="my_header">
            <div class="close_x">
                <img src="${IMAGE_DIR_URL}/x_close.svg" alt="">
            </div>
            <h2>Start Playing Better<br>Golf Today</h2>
            <p class="choose_label">Choose a plan</p>
            <div class="toggle_plan">
                <span class="annual">Annual</span>
                <span class="monthly">Monthly</span>
                <div class="dark_bg"></div>
            </div>
        </div>
        <div class="plans_checkbox_container show_annual">
            <div class="annual_checkbox_wrapper">
                <div class="plan_checkbox checkbox_active_plan" data-pack="annual_pro">                    
                    <p class="free_trial">7-day Free Trial</p>
                    <div class="check_circle">
                        <img src="${IMAGE_DIR_URL}/check_circle_yellow_png.png" alt="">
                        <img src="${IMAGE_DIR_URL}/ellipse.svg" alt="">
                    </div>
                    <p class="title">Pro</p>
                    <p class="price"><b>$99.99</b>/year</p>
                    <p class="price_off">58% OFF*</p>
                    <p class="month_price">(<s>$19.99</s> $8.33/month)</p>
                    <div class="curr_plan hide_curr_label">
                        ${smallCheckSvg}
                        <p>Current plan</p>
                    </div>
                </div>
                <div class="pro_pack_bottom">
                    <p><span>*58%</span> OFF compared to monthly</p>
                </div>                
                <div class="plan_checkbox" data-pack="annual_plus">
                    <div class="check_circle">
                        <img src="${IMAGE_DIR_URL}/check_circle_yellow_png.png" alt="">
                        <img src="${IMAGE_DIR_URL}/ellipse.svg" alt="">
                    </div>
                    <p class="title">Plus</p>
                    <p class="price"><b>$49.99</b>/year</p>
                    <p class="month_price">($4.16/month)</p>
                    <div class="curr_plan hide_curr_label">
                        ${smallCheckSvg}
                        <p>Current plan</p>
                    </div>
                </div>
            </div>
            <div class="monthly_checkbox_wrapper">
                <div class="plan_checkbox checkbox_active_plan" data-pack="monthly_pro">
                    <div class="check_circle">
                        <img src="${IMAGE_DIR_URL}/check_circle_yellow_png.png" alt="">
                        <img src="${IMAGE_DIR_URL}/ellipse.svg" alt="">
                    </div>
                    <p class="title">Pro</p>
                    <p class="price"><b>$19.99</b>/month</p>
                    <div class="curr_plan hide_curr_label">
                        ${smallCheckSvg}
                        <p>Current plan</p>
                    </div>
                </div>
            </div>
        </div>
        <ul class="list">
            <li>“Plays Like” distances with wind and elevation</li>
            <li>Green reading maps for 13,000+ courses</li>
            <li>Enhanced scorecard & stats</li>
            <li>Biggest video library of performance drills</li>
            <li>Stats comparison to your target handicap</li>
            <li>Relative Handicap for each facet of your game</li>
        </ul>
        <div class="plans_comparison_table_container">
            <div class="features">
                <div>
                    <img src="${IMAGE_DIR_URL}/golf-flag.svg" alt="">
                    <p>Compare all features</p>
                </div>
                <img src="${IMAGE_DIR_URL}/down_arr.svg" alt="">
            </div>
            <div class="table_wrap">
                <table id="plans_comparison_table">
                </table>
            </div>
        </div>
    </section>
    <div class="fixed_div">
        <div>
        <p>No commitment. Cancel anytime.</p>
        <button></button>
        </div>
    </div>
`

// -------------------------------------
// FUNCTIONS
// -------------------------------------
const sendGAEvent = (obj) => { // Send a Google Analytics event
  window.dataLayer = window.dataLayer || []
  dataLayer.push(obj)
  console.log(obj)
}

const waitForElement = async (selector) => { // Wait for an element to appear on the page
  while (!document.querySelector(selector)) {
    await new Promise(resolve => setTimeout(resolve, WAIT_INTERVAL_TIMEOUT))
  }
  return document.querySelector(selector)
}

const drawTable = () => {
  // define an array of data
  const data = [
    { benefit: 'Distances to Greens & Hazards', free: true, plus: true },
    { benefit: 'GPS Rangefinder And Scorecard For Every Course In The World', free: true, plus: true },
    { benefit: 'SwingU Handicap', free: true, plus: true },
    { benefit: 'Shot Tracking', free: true, plus: true },
    { benefit: 'Clubhouse Content Feed', free: true, plus: true },
    { benefit: 'Wind Speed & Elevation', free: false, plus: true },
    { benefit: '"Plays Like" Distances', free: false, plus: true },
    { benefit: 'Club Recommendation', free: false, plus: true },
    { benefit: 'Green-Reading Maps For 13,000+ Courses', free: false, plus: true },
    { benefit: 'Enhanced Scorecard & Stats', free: false, plus: true },
    { benefit: 'Hole Insights & Hole Notes', free: false, plus: true },
    { benefit: 'No Ads ln-App', free: false, plus: true },
    { benefit: 'Giveaway Eligibility', free: false, plus: true },
    { benefit: 'Strokes Gained Stats vs. Target Handicap Benchmarks', free: false, plus: false },
    { benefit: 'Handicap Index for Each Facet of Your Game (Driving, Approach, Chip/Pitch, Sand & Putting)', free: false, plus: false },
    { benefit: 'Personalized #1 Game Improvement Priority', free: false, plus: false },
    { benefit: 'Personalized Prescriptive Drill', free: false, plus: false },
    { benefit: 'Extensive Library of Performance Practice Drills, Premium Instructional Content and Informative Videos', free: false, plus: false },
  ]

  // define a function to create a table cell with an arrow or dash, depending on the value of the given property
  function createArrowCell(value, color) {
    const cell = document.createElement('td')
    const img = document.createElement('img')

    img.src = value ? `${IMAGE_DIR_URL}/check_circle_${color}.svg` : `${IMAGE_DIR_URL}/minus_circle.svg`

    cell.appendChild(img)
    return cell
  }

  // get a reference to the table element in the HTML document
  const table = document.getElementById('plans_comparison_table')

  // create the table header row
  const headerRow = document.createElement('tr')
  const headerNames = ['What do you get', 'Free', 'Plus', 'Pro']

  // loop through each header name and create a table cell for it
  headerNames.forEach(headerName => {
    const headerCell = document.createElement('th')
    headerCell.textContent = headerName
    headerRow.appendChild(headerCell)
  })

  // add the header row to the table
  table.appendChild(headerRow)

  // create a table row for each item in the data array
  data.forEach(item => {
    const row = document.createElement('tr')

    // create a table cell for the "What do you get" column
    const benefitCell = document.createElement('td')
    benefitCell.textContent = item.benefit
    row.appendChild(benefitCell)

    // create a table cell for the "Free" column
    const freeCell = createArrowCell(item.free, 'gray')
    row.appendChild(freeCell)

    // create a table cell for the "Plus" column
    const plusCell = createArrowCell(item.plus, 'green')
    row.appendChild(plusCell)

    // create a table cell for the "Pro" column, using the same function as above
    const proCell = createArrowCell(true, 'yellow')
    row.appendChild(proCell)

    // add the row to the table
    table.appendChild(row)
  })
}

// -------------------------------------
// MAKE DOM CHANGES
// -------------------------------------
document.head.insertAdjacentHTML('beforeend', style)

const waitForMainColumn = setInterval(() => {
  if (document.querySelector('.main-column')) {
    clearInterval(waitForMainColumn)

    document.querySelector('.main-column').insertAdjacentHTML('afterbegin', content)

    const waitForPlans = setInterval(() => {
      const togglePlanElement = document.querySelector('.toggle_plan')
      const plansCheckboxContainer = document.querySelector('.plans_checkbox_container')
      const payBtn = document.querySelector('.fixed_div button')
      if (togglePlanElement && plansCheckboxContainer && payBtn && document.querySelector('.in-app-upgrade-ctas__manage-subscriptions')) {
        clearInterval(waitForPlans)

        const isSubscriptionActive = document.querySelector('.cta-group__active')

        if (isSubscriptionActive) {
          payBtn.innerText = 'Manage subscriptions'

          document.querySelector('.annual_checkbox_wrapper').classList.add('subs')

          if (document.querySelector('.cta-group__active').closest('.cta-group__heading').innerText.includes('Pro')) {
            document.querySelector('[data-pack="annual_pro"] .hide_curr_label').classList.remove('hide_curr_label')
            document.querySelector('.monthly_checkbox_wrapper .plan_checkbox .hide_curr_label').classList.remove('hide_curr_label')
          } else {
            document.querySelector('.checkbox_active_plan').classList.remove('checkbox_active_plan')
            document.querySelector('[data-pack="annual_plus"').classList.add('checkbox_active_plan')

            document.querySelector('[data-pack="annual_plus"] .hide_curr_label').classList.remove('hide_curr_label')
          }

        } else {
          payBtn.innerText = 'Start 7-day free trial'
        }

        // Annual/Monthly switcher
        togglePlanElement.addEventListener('click', (event) => {
          const target = event.target
          if (target.tagName === 'SPAN') {
            if (target.classList.contains('annual')) {
              // the 'annual' span was clicked
              togglePlanElement.classList.remove('monthly_active')
              plansCheckboxContainer.classList.add('show_annual')

              if (!isSubscriptionActive) {
                payBtn.innerText = 'Start 7-day free trial'

                if (document.querySelector('.annual_checkbox_wrapper .checkbox_active_plan').dataset.pack === 'annual_plus') {
                  payBtn.innerText = 'Continue'

                  if (!document.querySelector('.plus_list')) {
                    document.querySelector('.list').classList.add('plus_list')
                  }


                }
              }

              sendGAEvent({
                'event': 'event-to-ga4',
                'event_name': 'exp_pick_a_plan_annual_tab',
                'event_desc': 'Annual',
                'event_type': 'Tab',
                'event_loc': 'Сhoice of subscription period'
              })
            } else if (target.classList.contains('monthly')) {
              // the 'monthly' span was clicked
              togglePlanElement.classList.add('monthly_active')
              plansCheckboxContainer.classList.remove('show_annual')

              if (!isSubscriptionActive) {
                payBtn.innerText = 'Continue'
              }

              document.querySelector('.plus_list')?.classList.remove('plus_list')

              sendGAEvent({
                'event': 'event-to-ga4',
                'event_name': 'exp_pick_a_plan_monthly_tab',
                'event_desc': 'Monthly',
                'event_type': 'Tab',
                'event_loc': 'Сhoice of subscription period'
              })
            }
          }
        })

        // plans checkbox 
        plansCheckboxContainer.querySelector('.annual_checkbox_wrapper').addEventListener('click', (event) => {
          const target = event.target.closest('[data-pack]')

          if (target) {
            if (target.dataset.pack === 'annual_pro') {
              payBtn.innerText = 'Start 7-day free trial'

              sendGAEvent({
                'event': 'event-to-ga4',
                'event_name': 'exp_pick_a_plan_pro',
                'event_desc': 'Pro',
                'event_type': 'Button',
                'event_loc': 'Choice of subscription type'
              })

              document.querySelector('.list').classList?.remove('plus_list')
            } else {
              payBtn.innerText = 'Continue'

              document.querySelector('.list').classList.add('plus_list')

              sendGAEvent({
                'event': 'event-to-ga4',
                'event_name': 'exp_pick_a_plan_plus',
                'event_desc': 'Plus',
                'event_type': 'Button',
                'event_loc': 'Choice of subscription type'
              })
            }
            document.querySelector('.checkbox_active_plan').classList.remove('checkbox_active_plan')

            target.classList.add('checkbox_active_plan')
          }
        })

        // click on fixed btn
        payBtn.addEventListener('click', () => {
          const isMonthlyActive = document.querySelector('.toggle_plan').classList.contains('monthly_active')

          sendGAEvent({
            'event': 'event-to-ga4',
            'event_name': 'exp_pick_a_plan_cta',
            'event_desc': payBtn.innerText,
            'event_type': 'Button',
            'event_loc': 'Bottom of screen'
          })

          if (isSubscriptionActive) {
            document.querySelector('.in-app-upgrade-ctas__manage-subscriptions a').dispatchEvent(new Event('click'))
          } else {
            if (isMonthlyActive) {
              document.querySelector('[data-cta-product-id*="swingu_pro.monthly"] a').dispatchEvent(new Event('click'))
            } else {
              const selectedPack = document.querySelector('.annual_checkbox_wrapper .checkbox_active_plan').dataset.pack

              if (selectedPack === 'annual_pro') {
                document.querySelector('[data-cta-product-id*="swingu_pro.yearly"] a').dispatchEvent(new Event('click'))
              } else {
                document.querySelector('[data-cta-product-id*="swingu_plus.yearly"] a').dispatchEvent(new Event('click'))
              }
            }
          }
        })
      }
    }, WAIT_INTERVAL_TIMEOUT)

    waitForElement('.features').then(el => {
      el.addEventListener('click', () => {
        el.classList.toggle('show_table')

        sendGAEvent({
          'event': 'event-to-ga4',
          'event_name': 'exp_pick_a_plan_compare',
          'event_desc': 'drop down list',
          'event_type': 'Button',
          'event_loc': 'What do you get'
        })
      })
    })

    waitForElement('#plans_comparison_table').then(() => drawTable())

    // click on close x
    waitForElement('.close_x').then(el => {
      el.addEventListener('click', () => {
        document.querySelector('.btn-close.close-webview').click()

        sendGAEvent({
          'event': 'event-to-ga4',
          'event_name': 'exp_pick_a_plan_close',
          'event_desc': 'Close',
          'event_type': 'Button',
          'event_loc': 'Top of the page'
        })
      })
    })
  }
}, WAIT_INTERVAL_TIMEOUT)

// GA loaded and Clarity
sendGAEvent({
  'event': 'event-to-ga4',
  'event_name': 'exp_pick_a_plan_start'
})

const recordClarity = setInterval(() => {
  if (typeof clarity === 'function') {
    clearInterval(recordClarity)
    clarity('set', `improve_upgrade_popup_v2`, 'variant_1')
  }
}, WAIT_INTERVAL_TIMEOUT)