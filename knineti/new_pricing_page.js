let startFunk = setInterval(() => {
  if (document.querySelector(".content-sidebar-wrap")) {
    clearInterval(startFunk)

    let styleVar = /*html */ `
      <style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body .container_var {
  font-family: "Open Sans", sans-serif;
  background: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: #1d3871 !important;
  /* identical to box height, or 144% */
}
body .container_var li {
  list-style: none;
}
.container_var {
  width: 90%;
  max-width: 1110px;
  margin: 0 auto;
}
body .container_var .underline_txt {
  text-decoration-line: underline;
}
body .container_var .bold_txt {
  font-weight: 700 !important;
}

body .container_var p {
  margin: 0;
  color: #1d3871 !important;
}
/* old block */
header.site-header,
div.site-inner {
  display: none;
}

/*  header*/
header {
  margin: 6px auto 20px;
}
.logo_wrapp {
  max-width: 204px;
  max-height: 50px;
  margin: 0 auto;
  display: block;
}
.logo_wrapp img {
  width: 100%;
  height: 100%;
}

/* inform_wrapp */
.inform_wrapp {
  margin-bottom: 75px;
}
.inform_wrapp h1 {
  font-size: 36px;
  line-height: 111%;
  color: #794e15;
  font-weight: 400;
  margin: 0 !important;
  text-align: left;
}

.inform_wrapp > div {
  margin: 28px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
}

.inform_wrapp h2 {
  font-size: 24px;
  line-height: 167%;
  color: #794e15;
  font-weight: 400;
  margin: 0 0 12px;
  text-align: left;
}

.notify div {
  width: 50%;
}

.notify div:nth-child(1) ul {
  margin: 0;
}

.notify div:nth-child(1) ul li {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 12px;
}
.notify div:nth-child(1) ul li + li {
  margin-top: 8px;
}
.notify div:nth-child(2) {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background: #e8f1f9;
  border-radius: 10px;
  padding: 16px;
  max-width: 510px;
}
.notify div:nth-child(2) span {
  font-weight: 600;
  line-height: 150%;
  color: #794e15;
  margin: 0 8px 0 4px;
}
.notify div:nth-child(2) p {
  font-size: 14px;
  line-height: 150%;
  color: #808080 !important;
}

/* tooltip */
.tippy-tooltip {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.2));
  max-width: 348px !important;
  font-size: 14px;
  line-height: 150%;
  color: #808080;
}

.tippy-content {
  text-align: left;
  padding: 0 !important;
}

.tippy-tooltip span {
  font-weight: 700;
}

.tippy-tooltip[data-placement^="bottom"] > .tippy-arrow,
.tippy-tooltip[data-placement^="top"] > .tippy-arrow {
  border-bottom-color: #ffffff;
  color: white;
  border-top-color: white;
}

p[data-tolltip] {
  position: relative;
}

img[data-title] {
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 11px;
  max-height: 11px;
  margin-left: 2px;
  cursor: pointer;
}

/* reviews_wrapp */
.reviews_wrapp {
  margin: 100px 0 23px;
  padding-bottom: 100px;
  border-bottom: 1px solid #f0eeee;
}
.reviews_wrapp .new_reviews_box {
  display: flex;
  gap: 90px;
  margin: 0;
}
.reviews_wrapp .new_reviews_box li {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  justify-content: space-between;
}
.reviews_wrapp .new_reviews_box li h3 {
  font-size: 16px;
  line-height: 22px;
  color: #734f22;
  margin: 0;
  text-align: left;
}
.reviews_wrapp .new_reviews_box li p {
  font-style: italic;
  line-height: 162%;
  letter-spacing: 0.02em;
  color: #808080 !important;
}

.reviews_wrapp .new_reviews_box li > img {
  max-width: 72px;
  max-height: 72px;
}

.reviews_wrapp .new_reviews_box li > div img {
  max-width: 25px;
  max-height: 16px;
  margin: 20px 0 12px;
}

@media (max-width: 1000px) {
  .reviews_wrapp .new_reviews_box li h3,
  .reviews_wrapp .new_reviews_boxs li p {
    font-size: 14px;
  }
}

/* table */

table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 8px 0;
}

table th {
  border: unset;
}

.plan_header {
  border: 1px solid #dfe8f0;
  border-radius: 20px;
  padding: 20px;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.plan_header h3 {
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #794e15;
  padding-bottom: 12px;
  border-bottom: 1px solid #dfe8f0;
  margin: 0;
}

.plan_header > div {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 22px 0 10px;
}

.plan_header > div span:nth-child(1) {
  font-weight: 400;
  line-height: 88%;
  text-decoration-line: line-through;
  color: #808080;
  margin-right: 4px;
}
.plan_header > div span:nth-child(2) {
  font-weight: 400;
  font-size: 24px;
  line-height: 100%;
}
.plan_header p {
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center !important;
}
.plan_header p span:nth-child(2) {
  color: #808080;
}
.btn_plan,
.enroll_link_wrap a {
  height: 48px;
  display: flex;
  background: #ffffff;
  border: 1px solid #1d3871;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 100%;
  outline: none;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  font-weight: 600;
  color: #1d3871;
  margin-top: 16px;
  cursor: pointer;
  padding: 1px;
}

@media (max-width: 1000px) {
  .enroll_link_wrap a {
    font-size: 11px;
  }
  table tr td p {
    font-size: 13px;
  }
}
.best_value {
  position: relative;
  border-radius: 0 0 20px 20px;
}
.best_value::before {
  position: absolute;
  content: "Best value";
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #ffffff;
  background: #1d3871;
  width: 100.8%;
  left: -1px;
  top: -33px;
  height: 32px;
  border: 1px solid #1d3871;
  border-radius: 20px 20px 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
table svg {
  display: block;
  stroke: #808080;
  max-width: 24px;
  max-height: 24px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
.minus_var {
  fill: #808080;
}
table tr td:not(:nth-child(1)) {
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
  letter-spacing: -0.01em;
  text-transform: uppercase;
  color: #808080;
  transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1);
}

table tr td:first-child {
  width: 27%;
}
tbody tr:not(:nth-child(1)) {
  position: relative;
}

tbody tr:not(:nth-child(1))::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: 0;
  width: 100%;
  border-bottom: 1px solid #dfe8f0;
}

tbody tr:nth-child(5)::after {
  content: unset;
}

tbody td svg + span {
  display: block;
  margin: 8px auto 0;
}

table tbody td {
  padding: 20px 0;
}

table tbody tr:first-child td {
  padding: 10px 0;
}

.enroll_link_wrap {
  opacity: 0;
}

.enroll_link_wrap p {
  font-weight: 400;
  color: #1d3871;
  font-size: 16px;
  line-height: 150%;
  margin-top: 12px !important;
  text-transform: initial;
  text-align: center !important;
}

.active_plan {
  border: 1px solid #1d3871;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.plan_header.active_plan .btn_plan,
.enroll_link_wrap a {
  background: #1d3871;
  color: #ffffff;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

.enroll_link_wrap a {
  text-decoration: unset;
  margin-top: 20px;
}

.enroll_link_wrap a span {
  margin: 0 5px;
}

.enroll_link_wrap.active {
  opacity: 1;
}

table tbody tr:not(:nth-child(1)) td:nth-child(3) {
  background: #f9fcff;
  color: #1d3871;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

table tbody tr:not(:nth-child(1)) td:nth-child(3) svg.minus_var {
  fill: #1d3871;
}

table tbody tr:not(:nth-child(1)) td:nth-child(3) svg:not(.minus_var) {
  stroke: #1d3871;
}

table tbody tr:nth-child(2) td {
  border-radius: 16px 16px 0 0;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

table tbody tr:nth-child(5) td {
  border-radius: 0 0 16px 16px;
  transition: all 2s cubic-bezier(0.075, 0.82, 0.165, 1);
}

/* contacts_us */
.contacts_wrapp .new_contacts_us {
  display: flex;
  padding: 0 !important;
}

.contacts_wrapp .new_contacts_us li {
  flex: 1;
  padding-left: 92px !important;
}

.contacts_wrapp .new_contacts_us li:last-child {
  padding-left: 126px !important;
}

.contacts_wrapp .new_contacts_us li p:first-child {
  font-weight: 400;
  font-size: 15px;
  line-height: 20px;
  color: #794e15 !important;
  margin-bottom: 16px;
}

.contacts_wrapp .new_contacts_us p:last-child {
  font-weight: 400;
  font-size: 12px;
  line-height: 167%;
  color: #808080 !important;
  margin: 0 !important;
}

.contacts_wrapp .new_contacts_us p > a {
  color: #0037b4;
}


      </style>
    `

    let renederHtml = /*html */ `
        <header>
      <a href="#" class="logo_wrapp">
        <img src="https://conversionratestore.github.io/projects/knineti/img/new_test_logo.jpg" alt="lofo k9ti" />
      </a>
    </header>
    <main>
      <section class="choose_plan container_var">
        <div class="inform_wrapp">
          <h1>Choose your plan</h1>
          <div class="notify">
            <div>
              <h2>All 3 plans include <span class="bold_txt">lifetime</span> access to:</h2>
              <ul>
                <li>
                  <img src="https://conversionratestore.github.io/projects/knineti/img/new_paw_print.svg" alt="paw print" />
                  <p class="underline_txt bold_txt" data-tolltip="1">Total Transformation Masterclass</p>
                </li>
                <li>
                  <img src="https://conversionratestore.github.io/projects/knineti/img/new_paw_print.svg" alt="paw print" />
                  <p>Housebreaking, Separation Anxiety, and Biting/Nipping Prevention <span class="bold_txt">BONUS classes</span></p>
                </li>
              </ul>
            </div>
            <div>
              <img src="https://conversionratestore.github.io/projects/knineti/img/new_error_outline.svg" alt="error outline" />
              <span>NOTE:</span>
              <p>
                You can claim the special offer today and delay activation until later. Simply contact us after purchase to postpone the start of your dog's training course
              </p>
            </div>
          </div>
        </div>

        <!-- <div class="pricing_wrapp">
          <ul class="tabs_visible_wrap">
            <li class="">
              <h3>Basic</h3>
              <div>
                <span>$497</span>
                <span>$297</span>
              </div>
              <p data-tolltip="2"><span>or $99/month</span> <span>for 3 months</span></p>
              <button>Select</button>
            </li>
            <li class="active_tab">
              <h3>Premium</h3>
              <div>
                <span>$587</span>
                <span>$387</span>
              </div>
              <p data-tolltip="3"><span>or $129/month</span> <span>for 3 months</span></p>
              <button>Selected</button>
            </li>
            <li class="">
              <h3>Deluxe</h3>
              <div>
                <span>$887</span>
                <span>$687</span>
              </div>
              <p data-tolltip="4"><span>or $229/month</span> <span>for 3 months</span></p>
              <button>Select</button>
            </li>
          </ul>

          <ul class="tabs_content">
            <li class="inform_content desk">
              <ul>
                <li>
                  <p data-tolltip="5">Lifetime Access to <span class="bold_txt underline_txt">Total Transformation Masterclass + 3 bonus classes</span></p>
                </li>
                <li>
                  <p data-tolltip="6"><span class="bold_txt underline_txt">Live Weekly Q&A Group Calls</span> with personal coaching</p>
                </li>
                <li>
                  <p>Ability to <span class="bold_txt">email us questions</span> which will be answered in a separate downloadable weekly call</p>
                </li>
                <li>
                  <p class="bold_txt">Recordings of Weekly Q&A Calls</p>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </li>
                <li>
                  <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="20" height="2" rx="1" fill="#808080" />
                  </svg>
                </li>
                <li>
                  <svg width="21" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" width="20" height="2" rx="1" fill="#808080" />
                  </svg>
                </li>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </li>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </li>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </li>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>10-Week Access</span>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </li>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>1-Year Access</span>
                </li>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>1-Year Access</span>
                </li>
                <li>
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke="#808080" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <span>1-Year Access</span>
                </li>
              </ul>
            </li>
            <li class="active_plan">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <div>
                <a href="#" target="_blank">Enroll — <span>Premium</span> Version</a>
                <p><span class="bold_txt">Discount</span>expires on<span>Jul 26, 2022</span></p>
              </div>
            </li>
          </ul>
        </div> -->
        <div class="pricing_wrapp">
          <div>
            <table>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th class="plan_header" data-count="basic">
                    <h3>Basic</h3>
                    <div>
                      <span>$497</span>
                      <span>$297</span>
                    </div>
                    <p data-tolltip="2"><span>or $99/month</span> <span>for 3 months</span></p>
                    <button class="btn_plan">Select</button>
                  </th>
                  <th class="plan_header best_value active_plan" data-count="premium">
                    <h3>Premium</h3>
                    <div>
                      <span>$587</span>
                      <span class="bold_txt">$387</span>
                    </div>
                    <p data-tolltip="3"><span>or $129/month</span> <span>for 3 months</span></p>
                    <button class="btn_plan">Selected</button>
                  </th>
                  <th class="plan_header" data-count="deluxe">
                    <h3>Deluxe</h3>
                    <div>
                      <span>$887</span>
                      <span>$687</span>
                    </div>
                    <p data-tolltip="4"><span>or $229/month</span> <span>for 3 months</span></p>
                    <button class="btn_plan">Select</button>
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <p data-tolltip="5">
                      Lifetime Access to
                      <span class="bold_txt underline_txt"
                        >Total <br />
                        Transformation Masterclass + 3 bonus classes</span
                      >
                    </p>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p data-tolltip="6">
                      <span class="bold_txt underline_txt">Live Weekly Q&A Group Calls <br /></span> with personal coaching
                    </p>
                  </td>
                  <td>
                    <svg class="minus_var" width="20" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" width="20" height="2" rx="1" />
                    </svg>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>10-Week Access</span>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>1-Year Access</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p>Ability to <span class="bold_txt">email us questions</span> which will be answered in a separate downloadable weekly call</p>
                  </td>
                  <td>
                    <svg class="minus_var" width="20" height="2" viewBox="0 0 21 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.5" width="20" height="2" rx="1" />
                    </svg>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>10-Week Access</span>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>1-Year Access</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p class="bold_txt">Recordings of Weekly Q&A Calls</p>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>10-Week Access</span>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>10-Week Access</span>
                  </td>
                  <td>
                    <svg width="24" height="24" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4.5 12.5L10.5 18.5L20.5 6.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <span>1-Year Access</span>
                  </td>
                </tr>
              </tbody>

              <tfoot>
                <tr>
                  <th>&nbsp;</th>
                  <td class="enroll_link_wrap">
                    <a href="#">Enroll — <span>Basic</span> Version</a>
                    <p><span class="bold_txt">Discount</span> expires on <span>Jul 26, 2022</span></p>
                  </td>
                  <td class="enroll_link_wrap active">
                    <a href="#">Enroll — <span>Premium</span> Version</a>
                    <p><span class="bold_txt">Discount</span> expires on <span>Jul 26, 2022</span></p>
                  </td>
                  <td class="enroll_link_wrap">
                    <a href="#">Enroll — <span>Deluxe</span> Version</a>
                    <p><span class="bold_txt">Discount</span> expires on <span>Jul 26, 2022</span></p>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div class="reviews_wrapp">
          <ul class="new_reviews_box">
            <li>
              <img src="https://conversionratestore.github.io/projects/knineti/img/reviews_dog1.jpg" alt="dog" />
              <div>
                <h3>Jack Plymouth from New York, US</h3>
                <img src="https://conversionratestore.github.io/projects/knineti/img/new_quotes.svg" alt="quotes" />
                <p>
                  It’s been a few weeks since I purchased the masterclass. Very happy with it so far. My yorkie used to pull on his leash everytime I used to take him out for a
                  walk. That has now stopped completely, and he maintains constant eye contact with me during our walks. He has also become a lot more calm inside the house instead
                  of being excitable all the time, as he used to be.
                </p>
              </div>
            </li>
            <li>
              <img src="https://conversionratestore.github.io/projects/knineti/img/reviews_dog2.jpg" alt="dog" />
              <div>
                <h3>Lorraine Bernard from Ontario, CA</h3>
                <img src="https://conversionratestore.github.io/projects/knineti/img/new_quotes.svg" alt="quotes" />
                <p>
                  I am only on my third lesson with this organization and one of their key lesson commands saved my puppy’s life this week. She managed to pull her leash out of my
                  hand — a mistake of mine that will never happen again — and she took off toward a main road. Because I had been following the lessons, I shouted the command and
                  she stopped, turned around and came barrelling back to me. Thank you K9 Training! You are worth every penny!
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div class="contacts_wrapp">
          <ul class="new_contacts_us">
            <li>
              <p>U.S. Office</p>
              <p>
                K9 Training Institute <br />
                A division of Digitools Limited <br />
                4283 Express Lane <br />
                Sarasota, Florida 34238 <br />
                Ph: <a class="not-for-eu-visitor" href="tel:4157581461">(415) 758-1461</a>
              </p>
            </li>
            <li>
              <p>European Office</p>
              <p>
                K9 Training Institute A division of Digitools Limited <br />
                Execo Business Centre <br />
                77 Strovolos Av., Strovolos Center <br />
                4th Floor, Office 12-D5 <br />
                Strovolos 2018, Nicosia, Cyprus
              </p>
            </li>
          </ul>
        </div>
      </section>
    </main>
      `
    document.head.insertAdjacentHTML("beforeend", styleVar)
    document.querySelector(".site-container").insertAdjacentHTML("afterbegin", renederHtml)

    //
    let scriptPopper = document.createElement("script")
    scriptPopper.src = "https://unpkg.com/popper.js@1"
    scriptPopper.async = false
    document.body.appendChild(scriptPopper)

    let scriptTippy = document.createElement("script")
    scriptTippy.src = "https://unpkg.com/tippy.js@5"
    scriptTippy.async = false
    document.body.appendChild(scriptTippy)
    // //////////////////////////////////////////////////////

    // Tooltip
    let arrTooltipTable = {
      1: [
        `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service-dog levels of calmness, obedience, and impulse control into your canine companion`,
      ],
      2: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
      3: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
      4: [`You may spread the payment over 3 months by choosing instalments at Checkout`],
      5: [
        `The Total Transformation Masterclass uses videos of real dogs to demonstrate how you can instil service dog levels of calmness, obedience, and impulse control into your canine companion. <br/> <span> Plus:</span> Housebreaking, Separation Anxiety, and Biting/Nipping Prevention <span>BONUS classes</span>`,
      ],
      6: [`Calls held every Saturday at 3PM EST`],
    }

    // setTooltipBarTable
    function setTooltipBarTable(event, tooltip) {
      return `<img data-id="${event}" data-title="${tooltip}" src="https://conversionratestore.github.io/projects/knineti/img/new_alert_circle.svg" alt="tooltip icon">`
    }

    if (document.querySelector(".choose_plan")) {
      document.querySelectorAll("p[data-tolltip]").forEach((el) => {
        let atr = el.getAttribute("data-tolltip")
        let product

        if (atr === "1") {
          product = "1"
        } else if (atr === "2") {
          product = 2
        } else if (atr === "3") {
          product = 3
        } else if (atr === "4") {
          product = 4
        } else if (atr === "5") {
          product = 5
        } else if (atr === "6") {
          product = 6
        }

        let arrTooltipTableVar = arrTooltipTable[product]

        for (let key in arrTooltipTableVar) {
          el.insertAdjacentHTML("beforeend", setTooltipBarTable(product, arrTooltipTableVar[key]))
        }
      })
    }

    let tippyRun = setInterval(() => {
      if (typeof tippy === "function" && document.querySelector("p[data-tolltip]")) {
        clearInterval(tippyRun)

        document.querySelectorAll("img[data-title]").forEach((el) => {
          tippy(el, {
            content: el.getAttribute("data-title"),
            // trigger: "click",
            appendTo: function () {
              return document.querySelector(".choose_plan")
            },
          })
        })
      }
    }, 500)

    // plan pricing Switch
    const planSwitch = (slideMenu) => (e) => {
      slideMenu.forEach((links) => {
        const hidePanel = links.nextElementSibling
        if (links === e.currentTarget) {
          e.currentTarget.closest("th").classList.add("active_plan")

          let s = e.currentTarget.closest("th").getAttribute("data-count")

          if (s === "premium") {
            console.log(s)
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(2)").forEach((el) => {
              el.style.background = "#FFFFFF"
              el.style.color = "#808080"
              el.querySelector("svg").style.stroke = "#808080"
              if (el.querySelector("svg").classList.contains("minus_var")) {
                el.querySelector("svg").style.fill = "#808080"
              }
            })
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(3)").forEach((el) => {
              el.style.background = "#f9fcff"
              el.style.color = "#1D3871"
              el.querySelector("svg").style.stroke = "#1D3871"
            })
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(4)").forEach((el) => {
              el.style.background = "#FFFFFF"
              el.style.color = "#808080"
              el.querySelector("svg").style.stroke = "#808080"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(3)").forEach((el) => {
              el.style.opacity = "1"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(2)").forEach((el) => {
              el.style.opacity = "0"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(4)").forEach((el) => {
              el.style.opacity = "0"
            })
          }

          if (s === "basic") {
            console.log(s)
            document.querySelectorAll("table tbody tr:not(:nth-child(1))  td:nth-child(2)").forEach((el) => {
              el.style.background = "#f9fcff"
              el.style.color = "#1D3871"
              el.querySelector("svg").style.stroke = "#1D3871"
              if (el.querySelector("svg").classList.contains("minus_var")) {
                el.querySelector("svg").style.fill = "#1D3871"
              }
            })
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(3)").forEach((el) => {
              el.style.background = "#FFFFFF"
              el.style.color = "#808080"
              el.querySelector("svg").style.stroke = "#808080"
            })
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(4)").forEach((el) => {
              el.style.background = "#FFFFFF"
              el.style.color = "#808080"
              el.querySelector("svg").style.stroke = "#808080"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(2)").forEach((el) => {
              el.style.opacity = "1"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(3)").forEach((el) => {
              el.style.opacity = "0"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(4)").forEach((el) => {
              el.style.opacity = "0"
            })
          }
          if (s === "deluxe") {
            console.log(s)
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(4)").forEach((el) => {
              el.style.background = "#f9fcff"
              el.style.color = "#1D3871"
              el.querySelector("svg").style.stroke = "#1D3871"
            })
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(2)").forEach((el) => {
              el.style.background = "#FFFFFF"
              el.style.color = "#808080"
              el.querySelector("svg").style.stroke = "#808080"
              if (el.querySelector("svg").classList.contains("minus_var")) {
                el.querySelector("svg").style.fill = "#808080"
              }
            })
            document.querySelectorAll("table tbody tr:not(:nth-child(1)) td:nth-child(3)").forEach((el) => {
              el.style.background = "#FFFFFF"
              el.style.color = "#808080"
              el.querySelector("svg").style.stroke = "#808080"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(4)").forEach((el) => {
              el.style.opacity = "1"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(3)").forEach((el) => {
              el.style.opacity = "0"
            })
            document.querySelectorAll(".enroll_link_wrap:nth-child(2)").forEach((el) => {
              el.style.opacity = "0"
            })
          }
        } else {
          links.closest("th").classList.remove("active_plan")
        }
      })
    }

    const slideMenu = document.querySelectorAll(".btn_plan")

    slideMenu.forEach((links) => {
      links.addEventListener("click", planSwitch(slideMenu))
    })
  }
}, 10)
