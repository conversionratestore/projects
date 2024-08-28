(function() {
  "use strict";
  const h = (c, t, o, a = "") => {
    window.dataLayer = window.dataLayer || [], window.dataLayer.push({
      event: "event-to-ga4",
      event_name: c,
      event_desc: t,
      event_type: o,
      event_loc: a
    }), console.log(`Event: ${c} | ${t} | ${o} | ${a}`);
  }, z = ({ name: c, dev: t }) => {
    console.log(
      `%c EXP: ${c} (DEV: ${t})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, N = (c) => {
    let t = setInterval(function() {
      typeof window.clarity == "function" && (clearInterval(t), window.clarity("set", c, "variant_1"));
    }, 1e3);
  }, D = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="16"
  height="12"
  viewBox="0 0 16 12"
  fill="none"
>
  <path
    d="M15 6H1M1 6L6 11M1 6L6 1"
    stroke="#161718"
    stroke-width="1.4"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`
  ), B = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="18"
  height="24"
  viewBox="0 0 18 24"
  fill="none"
>
  <path
    d="M16.5019 9.94033H15.535H15.5348V6.53486C15.5347 2.93159 12.6032 0 8.99985 0C5.39668 0 2.46509 2.93159 2.46509 6.53491V9.94038H1.49805C0.733594 9.94038 0.11377 10.5601 0.11377 11.3246V12.1667V21.7737V22.6157C0.11377 23.3803 0.733545 24 1.49805 24H8.9999H16.5019C17.2663 24 17.886 23.3803 17.886 22.6157V21.7737V12.1667V11.3246C17.886 10.5601 17.2663 9.94033 16.5019 9.94033ZM10.4733 19.8559H7.52656L8.05395 17.3428C7.56074 17.029 7.2313 16.4809 7.2313 15.853C7.2313 14.8763 8.02319 14.0845 8.9999 14.0845C9.97666 14.0845 10.7684 14.8763 10.7684 15.853C10.7684 16.4809 10.4391 17.029 9.9459 17.3427L10.4733 19.8559ZM13.203 9.94033H8.9999H4.79702H4.79678V6.53486C4.79678 4.21704 6.68218 2.33169 8.9999 2.33169C11.3177 2.33169 13.203 4.21709 13.203 6.53486V9.94033Z"
    fill="white"
  />
</svg>`
  ), H = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="12"
  height="10"
  viewBox="0 0 12 10"
  fill="none"
>
  <path d="M11 1L5 8L1 4" stroke="white" stroke-width="2" />
</svg>`
  ), $ = (
    /* HTML */
    `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="37"
  height="36"
  viewBox="0 0 37 36"
  fill="none"
>
  <path
    d="M30.9049 8.06991L18.9049 3.44991C18.6451 3.34482 18.3547 3.34482 18.0949 3.44991L6.09489 8.06991C5.88287 8.15172 5.70059 8.29583 5.57207 8.48326C5.44355 8.67069 5.37481 8.89265 5.37489 9.11991V14.5349C5.35236 18.1438 6.33178 21.6881 8.20412 24.7734C10.0765 27.8586 12.7683 30.3637 15.9799 32.0099C16.7587 32.4133 17.6228 32.6241 18.4999 32.6249C19.3815 32.6225 20.2501 32.4118 21.0349 32.0099C24.2437 30.3617 26.9325 27.8557 28.8021 24.7706C30.6717 21.6855 31.6488 18.1422 31.6249 14.5349V9.11991C31.625 8.89265 31.5562 8.67069 31.4277 8.48326C31.2992 8.29583 31.1169 8.15172 30.9049 8.06991Z"
    fill="#00AC6E"
  />
  <path
    d="M17.7498 22.1251C17.4516 22.1249 17.1656 22.0062 16.9548 21.7951L12.4548 17.2951C12.299 17.0807 12.224 16.8181 12.2429 16.5537C12.2618 16.2893 12.3734 16.04 12.5582 15.8499C12.7429 15.6598 12.9888 15.541 13.2526 15.5145C13.5163 15.488 13.781 15.5556 13.9998 15.7051L17.6148 19.3201L22.8198 12.7951C23.0068 12.5604 23.2794 12.4096 23.5776 12.3758C23.8757 12.3421 24.1751 12.4282 24.4098 12.6151C24.6445 12.8021 24.7954 13.0747 24.8291 13.3729C24.8629 13.671 24.7768 13.9704 24.5898 14.2051L18.5898 21.7051C18.487 21.8263 18.3611 21.9258 18.2195 21.9979C18.0778 22.07 17.9233 22.1132 17.7648 22.1251H17.7498Z"
    fill="white"
  />
</svg>`
  ), I = (c) => document.querySelectorAll(c), d = (c) => document.querySelector(c);
  function C(c) {
    return new Promise((t) => {
      if (document.querySelector(c))
        return t(document.querySelector(c));
      const o = new MutationObserver(() => {
        document.querySelector(c) && (t(document.querySelector(c)), o.disconnect());
      });
      o.observe(document.documentElement, {
        childList: !0,
        subtree: !0,
        characterData: !0
      });
    });
  }
  const w = (c, t, o, a) => {
    let i = [];
    if (typeof c == "string")
      i = document.querySelectorAll(c);
    else if (c instanceof Element)
      i = [c];
    else {
      console.error("Invalid target type:", c);
      return;
    }
    let p = new IntersectionObserver(
      (l) => {
        l.forEach((n) => {
          n.isIntersecting && (p.unobserve(n.target), setTimeout(function() {
            r.observe(n.target);
          }, 1e3));
        });
      },
      {
        threshold: 0.5
      }
    ), r = new IntersectionObserver((l) => {
      l.forEach((n) => {
        n.isIntersecting ? (h(t || `view_element_${n.target.id}`, o || "Element visibility", "view", a || n.target.id), p.unobserve(n.target)) : p.observe(n.target), r.unobserve(n.target);
      });
    });
    i.forEach((l) => {
      p.observe(l);
    });
  }, V = "https://www.dropservicing.com/refund-guarantee?_gl=1*1idgxw5*_gcl_au*MTQ4MDg5MTY4OS4xNzIzNTQxOTY2*_ga*NTg4MzI1MjUuMTcyMzU0MTk2Nw..*_ga_KQ2Z1WNWC8*MTcyNDE2MTg2OS45LjAuMTcyNDE2MTg2OS42MC4wLjA.", G = (
    /* HTML */
    `
  <div class="nextStepBtn">
    <button>${B} Secure Checkout</button>
  </div>
`
  ), R = (
    /* HTML */
    `
  <div class="submitBtn">
    <button>${B} Submit Purchase</button>
  </div>
`
  ), F = (
    /* HTML */
    ` <div class="crs-sticky-cta-container">
  <div class="crs-order-details">
    <span class="crs-order-details__text">Total:</span> <span class="crs-order-details__sale">79% off</span>
    <span class="crs-order-details__price-container">
      <span class="crs-order-details__price-amount">$396</span>&nbsp;
      <sub class="crs-order-details__currency">usd</sub>
      <span class="crs-order-details__payment-info">
        <span class="crs-order-details__monthly-payments">x 3 monthly payments</span>
        <span class="crs-order-details__one-time-price">$996 one-time price</span>
      </span>
    </span>
  </div>
  <div class="crs-order-button"></div>
  <div class="crs-guarantee">
    <span>30</span> - day <a href="${V}">action-based</a> money-back guarantee
  </div>
</div>`
  ), q = (
    /* HTML */
    `
  <div class="crs-custom-options">
    <div class="crs-custom-options__title">Choose payment plan</div>
    <div class="crs-custom-options__groups">
      <div class="crs-custom-options__group">
        <input id="crs-monthly" type="radio" name="crs-payment" value="monthly" checked />
        <label for="crs-monthly"><b>$396 x</b> 3 monthly payments</label>
      </div>
      <div class="crs-custom-options__group">
        <input id="crs-onetime" type="radio" name="crs-payment" value="onetime" />
        <label for="crs-onetime"><b>$996</b> one-time payment </label>
      </div>
    </div>
  </div>
`
  ), U = (
    /* HTML */
    `
  <div class="crs-order-summary">
    <h3 class="crs-order-summary__title">Order summary</h3>
    <ul class="crs-order-summary__list">
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Drop Servicing Partner Program Course</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$800</span>$269</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Live Video Coaching Calls (3x every week)</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$600</span>$199</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Private Drop Servicing Community</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$150</span>$49</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Done For You Partnership</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$900</span>$299</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text">Drop Servicing AI Software</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$550</span>$180</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"
          ><b>Bonus 1</b> - $200 Cash Back <b>Get it by posting your first sale</b></span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$200</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 2</b> - Everything Inside My Business</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$300</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 3</b> - Drop Servicing Blueprint 3.0</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$240</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 4</b> - 200+ ‘Done For You’ Templates</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$200</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 5</b> - ‘Done For You’ Website Template</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$160</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 6</b> - Quality Stamp of Approval</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$100</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 7</b> - 10 Highest Demand Services</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$80</span>$0</span>
      </li>
      <li class="crs-order-summary__item">
        <span class="crs-order-summary__text"><b>Bonus 8</b> - Extra Full Membership</span
        ><span class="crs-order-summary__price"><span class="crs-order-summary__old-price">$999</span>$0</span>
      </li>
    </ul>
  </div>
`
  ), j = (
    /* HTML */
    `
  <ul class="crs-comments">
    <li class="crs-comment">
      <div class="crs-comment__user">
        <img
          src="https://start.dropservicing.com/hosted/images/c9/d7c03783bd4954b348c21c54c39538/73x73-3-.png"
          alt="Michelle Roe avatar"
        />
        <span class="crs-comment__username">Michelle Roe</span>
      </div>
      <div class="crs-comments__title">The best course to build a successful online business!</div>
      <div class="crs-comments__text">
        His course is so complete, detailed, and clearly explained that it makes the process of building a professional
        and successful online business easy. The weekly live coaching and the Facebook community give you all the
        support and motivation to go through the course and build and grow your business. Thank you, Dylan!
      </div>
      <div class="crs-comments__rating">
        <img
          src="https://conversionratestore.github.io/projects/dropservicing/improvements_checkout/img/stars.webp"
          height="21"
          width="88"
          alt="five stars"
        />
      </div>
    </li>
  </ul>
`
  ), K = (
    /* HTML */
    `
  <div class="crs-form">
    <div class="crs-step1">
      <h3 class="crs-step-title">Provide your personal information</h3>
      <div class="crs-form__row">
        <div class="crs-form__control">
          <label for="crs-name">Full Name*</label>
          <div class="crs-input-wrap">
            <input type="text" id="crs-name" />
          </div>
          <div class="crs-form__error">This field is required</div>
        </div>
        <div class="crs-form__control">
          <label for="crs-email">Email*</label>

          <div class="crs-input-wrap">
            <input type="email" id="crs-email" />
          </div>
          <div class="crs-form__error">Enter a valid email address</div>
        </div>
      </div>
    </div>
    <div class="crs-step2" style="display: none">
      <button class="crs-back-btn">${D} back</button>
      <h3 class="crs-step-title">Provide your billing details</h3>
      <div class="crs-form__row">
        <div class="crs-form__control">
          <label for="crs-address">Full Address*</label>

          <div class="crs-input-wrap">
            <input type="text" id="crs-address" />
          </div>
          <div class="crs-form__error">This field is required</div>
        </div>
        <div class="crs-form__control">
          <label for="crs-city">City Name*</label>
          <div class="crs-input-wrap">
            <input type="text" id="crs-city" />
          </div>
          <div class="crs-form__error">This field is required</div>
        </div>
      </div>
      <div class="crs-form__row">
        <div class="crs-form__control">
          <label for="crs-country">Country*</label>
          <div class="crs-input-wrap">
            <select type="text" id="crs-country">
              <option value="">Select Country</option>
              <option value="">------------------------------</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="GB">United Kingdom</option>
              <option value="IE">Ireland</option>
              <option value="AU">Australia</option>
              <option value="NZ">New Zealand</option>
              <option value="">------------------------------</option>
              <option value="AF">Afghanistan</option>
              <option value="AX">Aland Islands</option>
              <option value="AL">Albania</option>
              <option value="DZ">Algeria</option>
              <option value="AS">American Samoa</option>
              <option value="AD">Andorra</option>
              <option value="AO">Angola</option>
              <option value="AI">Anguilla</option>
              <option value="AQ">Antarctica</option>
              <option value="AG">Antigua and Barbuda</option>
              <option value="AR">Argentina</option>
              <option value="AM">Armenia</option>
              <option value="AW">Aruba</option>
              <option value="AU">Australia</option>
              <option value="AT">Austria</option>
              <option value="AZ">Azerbaijan</option>
              <option value="BS">Bahamas</option>
              <option value="BH">Bahrain</option>
              <option value="BD">Bangladesh</option>
              <option value="BB">Barbados</option>
              <option value="BY">Belarus</option>
              <option value="BE">Belgium</option>
              <option value="BZ">Belize</option>
              <option value="BJ">Benin</option>
              <option value="BM">Bermuda</option>
              <option value="BT">Bhutan</option>
              <option value="BO">Bolivia</option>
              <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
              <option value="BA">Bosnia and Herzegovina</option>
              <option value="BW">Botswana</option>
              <option value="BV">Bouvet Island</option>
              <option value="BR">Brazil</option>
              <option value="IO">British Indian Ocean Territory</option>
              <option value="VG">British Virgin Islands</option>
              <option value="BN">Brunei</option>
              <option value="BG">Bulgaria</option>
              <option value="BF">Burkina Faso</option>
              <option value="BI">Burundi</option>
              <option value="KH">Cambodia</option>
              <option value="CM">Cameroon</option>
              <option value="CA">Canada</option>
              <option value="CV">Cape Verde</option>
              <option value="KY">Cayman Islands</option>
              <option value="CF">Central African Republic</option>
              <option value="TD">Chad</option>
              <option value="CL">Chile</option>
              <option value="CN">China</option>
              <option value="CX">Christmas Island</option>
              <option value="CC">Cocos Islands</option>
              <option value="CO">Colombia</option>
              <option value="KM">Comoros</option>
              <option value="CK">Cook Islands</option>
              <option value="CR">Costa Rica</option>
              <option value="HR">Croatia</option>
              <option value="CU">Cuba</option>
              <option value="CW">Curacao</option>
              <option value="CY">Cyprus</option>
              <option value="CZ">Czech Republic</option>
              <option value="CD">Democratic Republic of the Congo</option>
              <option value="DK">Denmark</option>
              <option value="DJ">Djibouti</option>
              <option value="DM">Dominica</option>
              <option value="DO">Dominican Republic</option>
              <option value="TL">East Timor</option>
              <option value="EC">Ecuador</option>
              <option value="EG">Egypt</option>
              <option value="SV">El Salvador</option>
              <option value="GQ">Equatorial Guinea</option>
              <option value="ER">Eritrea</option>
              <option value="EE">Estonia</option>
              <option value="ET">Ethiopia</option>
              <option value="FK">Falkland Islands</option>
              <option value="FO">Faroe Islands</option>
              <option value="FJ">Fiji</option>
              <option value="FI">Finland</option>
              <option value="FR">France</option>
              <option value="GF">French Guiana</option>
              <option value="PF">French Polynesia</option>
              <option value="TF">French Southern Territories</option>
              <option value="GA">Gabon</option>
              <option value="GM">Gambia</option>
              <option value="GE">Georgia</option>
              <option value="DE">Germany</option>
              <option value="GH">Ghana</option>
              <option value="GI">Gibraltar</option>
              <option value="GR">Greece</option>
              <option value="GL">Greenland</option>
              <option value="GD">Grenada</option>
              <option value="GP">Guadeloupe</option>
              <option value="GU">Guam</option>
              <option value="GT">Guatemala</option>
              <option value="GG">Guernsey</option>
              <option value="GN">Guinea</option>
              <option value="GW">Guinea-Bissau</option>
              <option value="GY">Guyana</option>
              <option value="HT">Haiti</option>
              <option value="HM">Heard Island and McDonald Islands</option>
              <option value="HN">Honduras</option>
              <option value="HK">Hong Kong</option>
              <option value="HU">Hungary</option>
              <option value="IS">Iceland</option>
              <option value="IN">India</option>
              <option value="ID">Indonesia</option>
              <option value="IR">Iran</option>
              <option value="IQ">Iraq</option>
              <option value="IE">Ireland</option>
              <option value="IM">Isle of Man</option>
              <option value="IL">Israel</option>
              <option value="IT">Italy</option>
              <option value="CI">Ivory Coast</option>
              <option value="JM">Jamaica</option>
              <option value="JP">Japan</option>
              <option value="JE">Jersey</option>
              <option value="JO">Jordan</option>
              <option value="KZ">Kazakhstan</option>
              <option value="KE">Kenya</option>
              <option value="KI">Kiribati</option>
              <option value="XK">Kosovo</option>
              <option value="KW">Kuwait</option>
              <option value="KG">Kyrgyzstan</option>
              <option value="LA">Laos</option>
              <option value="LV">Latvia</option>
              <option value="LB">Lebanon</option>
              <option value="LS">Lesotho</option>
              <option value="LR">Liberia</option>
              <option value="LY">Libya</option>
              <option value="LI">Liechtenstein</option>
              <option value="LT">Lithuania</option>
              <option value="LU">Luxembourg</option>
              <option value="MO">Macao</option>
              <option value="MK">Macedonia</option>
              <option value="MG">Madagascar</option>
              <option value="MW">Malawi</option>
              <option value="MY">Malaysia</option>
              <option value="MV">Maldives</option>
              <option value="ML">Mali</option>
              <option value="MT">Malta</option>
              <option value="MH">Marshall Islands</option>
              <option value="MQ">Martinique</option>
              <option value="MR">Mauritania</option>
              <option value="MU">Mauritius</option>
              <option value="YT">Mayotte</option>
              <option value="MX">Mexico</option>
              <option value="FM">Micronesia</option>
              <option value="MD">Moldova</option>
              <option value="MC">Monaco</option>
              <option value="MN">Mongolia</option>
              <option value="ME">Montenegro</option>
              <option value="MS">Montserrat</option>
              <option value="MA">Morocco</option>
              <option value="MZ">Mozambique</option>
              <option value="MM">Myanmar</option>
              <option value="NA">Namibia</option>
              <option value="NR">Nauru</option>
              <option value="NP">Nepal</option>
              <option value="NL">Netherlands</option>
              <option value="NC">New Caledonia</option>
              <option value="NZ">New Zealand</option>
              <option value="NI">Nicaragua</option>
              <option value="NE">Niger</option>
              <option value="NG">Nigeria</option>
              <option value="NU">Niue</option>
              <option value="NF">Norfolk Island</option>
              <option value="KP">North Korea</option>
              <option value="MP">Northern Mariana Islands</option>
              <option value="NO">Norway</option>
              <option value="OM">Oman</option>
              <option value="PK">Pakistan</option>
              <option value="PW">Palau</option>
              <option value="PS">Palestinian Territory</option>
              <option value="PA">Panama</option>
              <option value="PG">Papua New Guinea</option>
              <option value="PY">Paraguay</option>
              <option value="PE">Peru</option>
              <option value="PH">Philippines</option>
              <option value="PN">Pitcairn</option>
              <option value="PL">Poland</option>
              <option value="PT">Portugal</option>
              <option value="PR">Puerto Rico</option>
              <option value="QA">Qatar</option>
              <option value="CG">Republic of the Congo</option>
              <option value="RE">Reunion</option>
              <option value="RO">Romania</option>
              <option value="RU">Russia</option>
              <option value="RW">Rwanda</option>
              <option value="BL">Saint Barthelemy</option>
              <option value="SH">Saint Helena</option>
              <option value="KN">Saint Kitts and Nevis</option>
              <option value="LC">Saint Lucia</option>
              <option value="MF">Saint Martin</option>
              <option value="PM">Saint Pierre and Miquelon</option>
              <option value="VC">Saint Vincent and the Grenadines</option>
              <option value="WS">Samoa</option>
              <option value="SM">San Marino</option>
              <option value="ST">Sao Tome and Principe</option>
              <option value="SA">Saudi Arabia</option>
              <option value="SN">Senegal</option>
              <option value="RS">Serbia</option>
              <option value="SC">Seychelles</option>
              <option value="SL">Sierra Leone</option>
              <option value="SG">Singapore</option>
              <option value="SX">Sint Maarten</option>
              <option value="SK">Slovakia</option>
              <option value="SI">Slovenia</option>
              <option value="SB">Solomon Islands</option>
              <option value="SO">Somalia</option>
              <option value="ZA">South Africa</option>
              <option value="GS">South Georgia and the South Sandwich Islands</option>
              <option value="KR">South Korea</option>
              <option value="SS">South Sudan</option>
              <option value="ES">Spain</option>
              <option value="LK">Sri Lanka</option>
              <option value="SD">Sudan</option>
              <option value="SR">Suriname</option>
              <option value="SJ">Svalbard and Jan Mayen</option>
              <option value="SZ">Swaziland</option>
              <option value="SE">Sweden</option>
              <option value="CH">Switzerland</option>
              <option value="SY">Syria</option>
              <option value="TW">Taiwan</option>
              <option value="TJ">Tajikistan</option>
              <option value="TZ">Tanzania</option>
              <option value="TH">Thailand</option>
              <option value="TG">Togo</option>
              <option value="TK">Tokelau</option>
              <option value="TO">Tonga</option>
              <option value="TT">Trinidad and Tobago</option>
              <option value="TN">Tunisia</option>
              <option value="TR">Turkey</option>
              <option value="TM">Turkmenistan</option>
              <option value="TC">Turks and Caicos Islands</option>
              <option value="TV">Tuvalu</option>
              <option value="VI">U.S. Virgin Islands</option>
              <option value="UG">Uganda</option>
              <option value="UA">Ukraine</option>
              <option value="AE">United Arab Emirates</option>
              <option value="GB">United Kingdom</option>
              <option value="US">United States</option>
              <option value="UM">United States Minor Outlying Islands</option>
              <option value="UY">Uruguay</option>
              <option value="UZ">Uzbekistan</option>
              <option value="VU">Vanuatu</option>
              <option value="VA">Vatican</option>
              <option value="VE">Venezuela</option>
              <option value="VN">Vietnam</option>
              <option value="WF">Wallis and Futuna</option>
              <option value="EH">Western Sahara</option>
              <option value="YE">Yemen</option>
              <option value="ZM">Zambia</option>
              <option value="ZW">Zimbabwe</option>
            </select>
          </div>
          <div class="crs-form__error">This field is required</div>
        </div>
        <div class="crs-form__inputs-wrap">
          <div class="crs-form__control">
            <label for="crs-state">State / Province*</label>
            <div class="crs-input-wrap">
              <input type="text" id="crs-state" />
            </div>
            <div class="crs-form__error">This field is required</div>
          </div>

          <div class="crs-form__control">
            <label for="crs-zip">Zip Code*</label>
            <div class="crs-input-wrap">
              <input type="text" id="crs-zip" />
            </div>
            <div class="crs-form__error">This field is required</div>
          </div>
        </div>
      </div>
    </div>
  </div>
`
  ), W = `.crsTargetSection [data-col='left'] .elHeadlineWrapper,
.order2StepHeader,
.order2stepbutton,
.order2ButtonSubText,
.goBacktoStepOneOrderBump,
.crsTargetSection [data-col='right'] :is(.elImageWrapper, .elHeadlineWrapper, .elBulletList, .elFeatureImage),
.elOrder2Step + .elImageWrapper,
.crs-order-summary + .col-inner {
  display: none !important;
}

.container:has(.crsTargetSection) {
  background: 0 !important;
}

.crsTargetSection {
  color: var(--Black, #161718);
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100% !important;
  margin: 0 !important;
  background: none;
  margin-top: 40px !important;
}

@media (max-width: 768px) {
  .fullContainer[style*='Background-Big-Last-Footer-t-'] {
    margin-top: 26px !important;
  }
  .crsTargetSection {
    margin-top: 24px !important;
  }
}
.crsTargetSection::before,
.crsTargetSection::after {
  position: absolute;
}
.crsTargetSection [data-col='left'] {
  width: 60.3% !important;
  max-width: 662px !important;
  padding: 0;
}

.crsTargetSection [data-col='right'] {
  width: 40.7% !important;
  max-width: 407px !important;
  padding: 0;
  padding-bottom: 26px;
  border: 1px solid #ddd;
}

.crsTargetSection [data-col='left'] > .col-inner {
  padding: 0 !important;
}

.o2step_step1,
.o2step_step2 {
  display: none !important;

  border: 1px solid #ddd;
  padding: 22px 30px 40px !important;
}

.o2step_step1 {
  margin-bottom: 30px;
}

@media screen and (max-width: 768px) {
  .crsTargetSection {
    flex-direction: column;
    padding-inline: 16px !important;
  }

  .crsTargetSection [data-col='left'] {
    width: 100% !important;
    max-width: 100% !important;
    border: none !important;
  }

  .crsTargetSection [data-col='right'] {
    max-width: 100vw !important;
    border: none !important;
    margin-left: -16px;
    width: calc(100% + 32px) !important;
  }

  .o2step_step1,
  .o2step_step2 {
    padding: 18px 20px 28px !important;
  }
  .o2step_step1 {
    margin-bottom: 24px;
  }
}

.elOrder2Step {
  border: none;
  margin-top: 0 !important;
}
.crsTargetSection [data-col='left'] .bgCover:first-of-type {
  background-color: #fff !important;
  padding: 22px 30px;
}

@media screen and (max-width: 768px) {
  .crsTargetSection [data-col='left'] .bgCover:first-of-type {
    background-color: #f2ebfc !important;
  }
}
.crsTargetSection [data-col='left'] .col-inner {
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.crs-back-btn {
  display: flex;
  gap: 6px;
  justify-content: center;
  align-items: center;
  border: 0;
  background: 0;
  cursor: pointer;
  margin-bottom: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
}

:is(.nextStepBtn, .submitBtn) button {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
  min-height: 62px;
  border-radius: 3px;
  border: none;
  background: #17aa1c;
  padding: 10px 20px;
  color: #fff;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
}

.o2step_step1 .formInstructionNote {
  display: none;
}

.o2step_step1 p:not(.formInstructionNote) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 23px;
}

:is(.o2step_step1, .o2step_step2) :is(input, select) {
  margin: 0 !important;
  height: 50px;
}

:is(.o2step_step1, .o2step_step2) .labelUnderInput {
  position: static;
}
/* 
.o2step_step1 [data-name='name'] {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}
.o2step_step1 [name='name'] + .labelUnderInput {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}
.o2step_step1 [data-name='email'] {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.o2step_step1 [data-name='email'] + .labelUnderInput {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
}

@media screen and (max-width: 768px) {
  .crsTargetSection {
    background-color: #f2ebfc !important;
  }
  .o2step_step1 p:not(.formInstructionNote) {
    grid-template-columns: 1fr;
  }

  .o2step_step1 [data-name='name'] {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .o2step_step1 [data-name='name'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .o2step_step1 [data-name='email'] {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .o2step_step1 [data-name='email'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }
}

.elOS1Shipping {
  display: grid;
  grid-template-columns: 1fr 0.5fr 0.5fr;
  gap: 0 23px;
}
.elS1ShippingWrap {
  display: none;
}
.elOS1Shipping [data-name='shipping_address'] {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.elOS1Shipping [data-name='shipping_address'] + .labelUnderInput {
  grid-column: 1 / 2;
  grid-row: 1 / 2;
}

.elOS1Shipping [data-name='shipping_city'] {
  grid-column: 2 / 4;
  grid-row: 2 / 3;
}

.elOS1Shipping [data-name='shipping_city'] + .labelUnderInput {
  grid-column: 2 / 4;
  grid-row: 1 / 2;
}

.elOS1Shipping [data-name='shipping_country'] {
  grid-column: 1 / 2;
  grid-row: 4 / 5;
}

.elOS1Shipping [data-name='shipping_country'] + .labelUnderInput {
  grid-column: 1 / 2;
  grid-row: 3 / 4;
}

.elOS1Shipping .elStateDiv {
  grid-column: 2 / 3;
  grid-row: 3 / 5;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
}

.elOS1Shipping .elZipCodeDiv {
  grid-column: 3 / 4;
  grid-row: 3 / 5;
  display: flex;
  flex-direction: column-reverse;
  width: 100%;
  margin: 0;
}

@media screen and (max-width: 768px) {
  .elOS1Shipping {
    grid-template-columns: 1fr;
  }

  .elOS1Shipping [data-name='shipping_address'] {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }

  .elOS1Shipping [data-name='shipping_address'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .elOS1Shipping [data-name='shipping_city'] {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
  }

  .elOS1Shipping [data-name='shipping_city'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
  }

  .elOS1Shipping [data-name='shipping_country'] {
    grid-column: 1 / 2;
    grid-row: 6 / 7;
  }

  .elOS1Shipping [data-name='shipping_country'] + .labelUnderInput {
    grid-column: 1 / 2;
    grid-row: 5 / 6;
  }

  .elOS1Shipping .elStateDiv {
    grid-column: 1 / 2;
    grid-row: 8 / 9;
  }

  .elOS1Shipping .elZipCodeDiv {
    grid-column: 1 / 2;
    grid-row: 10 / 11;
  }
} */
.elOrderProductOptions {
  display: flex;
  padding-inline: 30px;
}

.crs-comments {
  display: grid;
  list-style-type: none;
  padding: 0;
  margin: 0;
  margin-bottom: 24px;
  color: #2f2f2f;
}
.crs-comment {
  position: relative;
  padding: 16px 30px;
  background-color: rgba(242, 235, 252, 0.8);

  border-radius: 10px 10px 10px 0;
  z-index: 0;
}

.crs-comment::after {
  position: absolute;
  display: block;
  left: 0;
  bottom: -25px;
  content: '';
  width: 57px;
  height: 25px;
  background-image: url('https://conversionratestore.github.io/projects/dropservicing/improvements_checkout/img/message_foot_note_desktop.png');
  background-size: cover;
  z-index: 1;
}

@media screen and (max-width: 768px) {
  .crs-comment {
    background: #fff;
    padding: 20px;
    margin-bottom: 0;
  }
  .crs-comment::after {
    bottom: -26px;
    width: 59px;
    height: 26px;
    background-image: url('https://conversionratestore.github.io/projects/dropservicing/improvements_checkout/img/message_footnote_mobile.png');
  }
  .crsTargetSection {
    background-color: #f2ebfc !important;
  }
}

.crs-comment__user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.crs-comment__user {
  display: flex;
  align-items: center;
  gap: 12px;
  color: #2f2f2f;
  font-size: 14px;
  font-weight: 700;
  line-height: 24px;
}
.crs-comment__user img {
  width: 41px;
  height: 41px;
  border-radius: 50%;
}
.crs-comments__title {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  line-height: 21px;
}
.crs-comments__text {
  margin-top: 9px;
  color: #2f2f2f;
  font-size: 12px;
  font-weight: 400;
  line-height: 21px;
}

.crs-comments__rating {
  margin-top: 9px;
}

.crs-comments__rating img {
  object-fit: contain;
}
.crs-order-summary {
  color: var(--Black, #161718);
  background-color: #fff;
  padding: 22px 30px;
}

@media screen and (max-width: 768px) {
  .crs-order-summary {
    padding: 22px 16px;
  }
}

.crs-order-summary__title {
  color: var(--Black, #161718);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
}
.crs-order-summary__list {
  display: grid;
  gap: 10px;
  list-style-type: none;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}

.crs-order-summary__item {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.crs-order-summary__text {
  max-width: 260px;
}
.crs-order-summary__text b {
  font-weight: 700;
}

.crs-order-summary__price {
  display: flex;
  gap: 6px;
  color: #161718;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
}

.crs-order-summary__old-price {
  color: var(--Black, #161718);
  opacity: 0.5;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  text-decoration-line: line-through;
}

.crs-custom-options {
  padding-bottom: 24px;
  padding-inline: 30px;
  padding-top: 0;
  background-color: #fff;
}

.crs-custom-options__groups {
  border-bottom: 1px solid #ddd;
  padding-bottom: 14px;
}

@media screen and (max-width: 768px) {
  .crs-custom-options {
    padding: 24px 16px;
    padding-top: 0;
  }
}
.crs-custom-options__title {
  border-top: 1px solid #ddd;
  padding-top: 20px;
  color: var(--Black, #161718);
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.crs-custom-options__groups {
  margin-top: 20px;
  display: grid;
  gap: 14px;
}

.crs-custom-options__group {
  display: flex;
  align-items: center;
  gap: 11px;
  height: 24px;
}
.crs-custom-options__group label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  margin: 0;
}
.crs-custom-options__group label b {
  font-weight: 700;
}

.crs-sticky-cta-container {
  position: sticky;
  top: 0;
  top: 0;
  z-index: 10;
  background-color: #fff;
  padding-inline: 30px;
}

@media screen and (max-width: 768px) {
  .crs-sticky-cta-container {
    padding-inline: 16px;
  }
}
.crs-sticky-cta-container--fixed {
  position: fixed;
  top: auto;
  bottom: 0;
  left: auto;
  width: 407px;
  height: max-content;
  z-index: 10;
  padding: 12px 16px;
  background-color: #fff;
  padding-inline: 30px;
  box-shadow: 0px -2px 14px 0px rgba(0, 0, 0, 0.07);
}

@media screen and (max-width: 768px) {
  .crs-sticky-cta-container--fixed {
    width: 100% !important;
    left: 0 !important;
    padding-inline: 16px;
  }

  .crs-sticky-cta-container--fixed .crs-guarantee {
    display: none;
  }
}
.crs-order-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
}
.crs-order-details__text {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-right: auto;
}
.crs-order-details__price-container {
  display: flex;
  align-items: center;
}
.crs-order-details__sale {
  border-radius: 34px;
  background: #ea4458;
  padding: 5px 8px;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  line-height: 18px;
  margin-right: 10px;
}

.crs-order-details__price-amount {
  color: #000;
  font-size: 18px;
  font-weight: 800;
  line-height: 18px;
}

.crs-order-details__currency {
  color: #000;
  font-size: 12px;
  font-weight: 800;
  line-height: 18px;
  text-transform: uppercase;
}

.crs-order-details__payment-info {
  display: inline-flex;
  flex-direction: column;
  margin-left: 10px;
  font-size: 10px;
}

.crs-order-details__monthly-payments {
  font-weight: 700;
}

.crs-order-details__one-time-price {
  font-weight: 500;
  color: #8a8a8b;
}

.crs-input-error {
  position: relative;
  border: 1px solid #fda29b !important;
  background: var(--White, #fff);
  z-index: 1; /* Додаємо z-index */
}

.crs-error-msg {
  display: none;
}
.crs-input-error + .crs-error-msg {
  display: block;
}

.crs-input-error::before {
  position: absolute;
  content: 'Value required';
  display: block;
  width: 50px;
  height: 50px;
  background-color: white;
  padding: 2px 5px;
  color: red;
  padding: 2px 5px;
  top: 100%;
  left: 0;
  white-space: nowrap;
  z-index: 2; /* Додаємо z-index */
  border: 1px solid red; /* Додаємо рамку для видимості */
}

.crs-input-valid {
  border: 1px solid #ccc !important;
}

.email_suggestion + label {
  display: none;
}

.elOrder2Step label {
  margin-top: 25px;
}

[data-title='cf-order-summary'] {
  display: none !important;
}

.elCreditCardForm {
  background: none !important;
  border: none !important;
  padding: 0 !important;
}

.crs-guarantee {
  text-align: center;
  margin-top: 14px;
  color: var(--Black, #161718);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
}
.crs-guarantee span {
  width: 30px;
  height: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none"><path d="M25.1043 4.06818C22.6011 1.55228 19.2197 0.147152 15.7001 0.160295C13.9288 0.152143 12.1739 0.504229 10.5385 1.19584C8.90308 1.88745 7.42018 2.90463 6.17702 4.18754C6.11165 4.25496 6.06008 4.3349 6.02529 4.42272C5.9905 4.51055 5.97318 4.60452 5.97433 4.69919C5.97549 4.79387 5.9951 4.88737 6.03202 4.97429C6.06895 5.06121 6.12246 5.13982 6.18945 5.20558C6.32702 5.33756 6.50965 5.41003 6.69878 5.40767C6.8879 5.40531 7.06872 5.32832 7.20307 5.19294C8.31272 4.04905 9.63599 3.14218 11.0951 2.52559C12.5543 1.90899 14.1199 1.59512 15.7001 1.60241C22.2458 1.59679 27.5679 6.93555 27.5679 13.5002C27.5679 20.0648 22.2458 25.4036 15.7001 25.4036C9.15435 25.4036 3.83217 20.0648 3.83217 13.5002V13.3499L5.01427 14.5351C5.14956 14.6701 5.33153 14.7457 5.52107 14.7457C5.71062 14.7457 5.89259 14.6701 6.02788 14.5351C6.09436 14.4688 6.14716 14.3897 6.18321 14.3024C6.21926 14.2151 6.23783 14.1214 6.23783 14.0268C6.23783 13.9321 6.21926 13.8384 6.18321 13.7511C6.14716 13.6638 6.09436 13.5847 6.02788 13.5184L3.62917 11.106C3.49388 10.971 3.31191 10.8954 3.12236 10.8954C2.93282 10.8954 2.75085 10.971 2.61556 11.106L0.209943 13.5184C0.14347 13.5847 0.0906646 13.6638 0.054616 13.7511C0.0185675 13.8384 0 13.9321 0 14.0268C0 14.1214 0.0185675 14.2151 0.054616 14.3024C0.0906646 14.3897 0.14347 14.4688 0.209943 14.5351C0.490276 14.8159 0.944608 14.8159 1.22494 14.5351L2.40565 13.3499V13.5002C2.40333 15.2572 2.74694 16.997 3.41624 18.6169C4.08553 20.2368 5.06697 21.704 6.30269 22.9322C8.8059 25.4481 12.1873 26.8532 15.707 26.8401C19.256 26.8401 22.5979 25.4513 25.1098 22.9322C26.3446 21.7036 27.3249 20.2361 27.993 18.6162C28.6611 16.9963 29.0035 15.2568 29 13.5002C29.0025 11.7432 28.6591 10.0035 27.99 8.38366C27.321 6.76377 26.3398 5.29645 25.1043 4.06818Z" fill="%238F53E3"/></svg>');
  background-repeat: no-repeat;
  background-position: 0 0;
  color: #8f53e3;
  font-size: 13.82px;
  font-style: normal;
  font-weight: 700;
  line-height: 27.641px;
}

.crs-guarantee a {
  color: inherit !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.crs-payment__header {
  display: flex;
  gap: 15px;
  margin-top: 38px;
}

@media (max-width: 768px) {
  .crs-payment__header {
    flex-direction: column;
  }
}
.crs-payment__header h3 {
  color: var(--Black, #161718);
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}

.crs-payment__methods {
  display: flex;
  gap: 10px;
}

.elCreditCardForm {
  margin-top: 38px !important;
}

@media (max-width: 768px) {
  .elCreditCardForm {
    margin-top: 24px !important;
  }
}

.crs-payment__badge {
  display: none;
  padding: 22px 30px;
  border-right: 1px dashed #a165f5;
  border-bottom: 1px dashed #a165f5;
  border-left: 1px dashed #a165f5;
  margin-bottom: 30px;
}

@media (max-width: 768px) {
  .crs-payment__badge {
    padding: 22px 16px;
    background: #faf7fe;
  }
}

.crs-step2-active + .crs-payment__badge {
  display: block;
}
.crs-payment__wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.crs-payment__title {
  color: var(--Black, #161718);
  font-family: 'Helvetica Neue', Lato, sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
}

.crs-payment__desc {
  color: var(--Black, #161718);
  font-family: Lato;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
}

.order2ButtonSubText2 {
  display: none;
}

.ccCardText,
.ccExpYearText,
.ccCVCText {
  color: var(--Black, #161718);
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  margin-bottom: 4px !important;
}

#card-number-element {
  margin-bottom: 24px !important;
}

#card-exp-element {
  margin: 0 !important;
}

.crs-step1,
.crs-step2 {
  padding: 22px 30px 40px;
  border: 1px solid #ddd;
  background: var(--White, #fff);
}

.crs-step1 {
  margin-bottom: 30px;
}
.crs-form__row {
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
  gap: 23px;
}

.crs-form__inputs-wrap {
  flex: 1 1 50%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  gap: 23px;
}

.crs-form__control {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.crs-form__control :is(input, select) {
  height: 50px;
  width: 100%;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: var(--White, #fff);
  padding: 13px 18px;
  color: var(--Gray-500, #667085);
  font-family: Lato;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 150% */
}

.crs-form__control :is(input, select):focus {
  border: 1px solid #49b1e0;
  outline: none;
}
.crs-form__control label {
  color: var(--Black, #161718);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
}
.crs-form__error {
  display: none;
  color: var(--Error-500, #f04438);
  font-family: Lato;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  margin-top: 4px;
}

.crs-input-wrap:has(.crs-input-error) + .crs-form__error {
  display: block;
}
.crs-input-wrap {
  position: relative;
}
.crs-input-wrap:has(.crs-input-error)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 18px;
  left: auto;
  transform: translateY(-50%);
  display: block;
  width: 20px;
  height: 20px;
  z-index: 1;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none"><g clip-path="url(%23clip0_131_478)"><path d="M8.00004 5.3335V8.00016M8.00004 10.6668H8.00671M14.6667 8.00016C14.6667 11.6821 11.6819 14.6668 8.00004 14.6668C4.31814 14.6668 1.33337 11.6821 1.33337 8.00016C1.33337 4.31826 4.31814 1.3335 8.00004 1.3335C11.6819 1.3335 14.6667 4.31826 14.6667 8.00016Z" stroke="%23F04438" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_131_478"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>');
  background-repeat: no-repeat;
  background-size: contain;
}
.crs-step-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 0px;
}

.crs-step1 .crs-step-title {
  padding-bottom: 25px;
  border-bottom: 1px solid #ddd;
}

#order-declined-message {
  margin-top: 24px !important;
}

@media (max-width: 768px) {
  .crs-step1,
  .crs-step2 {
    padding: 18px 20px 28px;
  }
  .crs-form__row {
    flex-direction: column;
    gap: 23px;
  }
  .crs-step1 .crs-step-title {
    border-bottom: none;
    padding-bottom: 0;
  }
}
`;
  class Z {
    constructor() {
      this.device = "desktop", this.device = window.innerWidth < 768 ? "mobile" : "desktop", this.init();
    }
    init() {
      this.initStyles(), this.changes(), this.inputsValidation();
    }
    changes() {
      var O;
      const t = d(".row:has(.order2stepbuttonOrder)"), o = d(".elOrder2Step"), a = d(".order2stepbuttonOrder"), i = t == null ? void 0 : t.querySelector('[data-col="right"]'), p = t == null ? void 0 : t.querySelector('[data-col="left"]'), r = d(".elOrderProductOptions");
      let l, n;
      if (!o)
        return;
      t && t.classList.add("crsTargetSection"), o.insertAdjacentHTML("beforebegin", K), w(".crs-step1", "exp_imprcheck_ev_provide", "View on screen", "Provide your personal information"), w(".crs-step2", "exp_imprcheck_ev_billing", "View on screen", "Provide your billing details");
      const g = d(".crs-form");
      if (!g)
        return;
      const _ = g.querySelector(".crs-step1"), x = g.querySelector(".crs-step2");
      if (g.querySelectorAll("input, select").forEach((e) => {
        e.addEventListener("input", () => {
          if (e.id === "crs-name") {
            const s = o.querySelector('input[name="name"]');
            s && (s.value = e.value);
          }
          if (e.id === "crs-email") {
            const s = o.querySelector('input[name="email"]');
            s && (s.value = e.value);
          }
          if (e.id === "crs-address") {
            const s = o.querySelector('input[name="shipping_address"]');
            s && (s.value = e.value);
          }
          if (e.id === "crs-city") {
            const s = o.querySelector('input[name="shipping_city"]');
            s && (s.value = e.value);
          }
          if (e.id === "crs-zip") {
            const s = o.querySelector('input[name="shipping_zip"]');
            s && (s.value = e.value);
          }
          if (e.id === "crs-state") {
            const s = o.querySelector('input[name="shipping_state"]');
            s && (s.value = e.value);
          }
          if (e.id === "crs-country") {
            const s = o.querySelector('select[name="shipping_country"]');
            s && (s.value = e.value);
          }
        }), e.addEventListener("change", () => {
          e.id === "crs-name" && h("exp_imprcheck_cl_name", "Full Name", "input", "Provide your personal information"), e.id === "crs-email" && h("exp_imprcheck_cl_email", "Email", "input", "Provide your personal information"), e.id === "crs-address" && h("exp_imprcheck_cl_address", "Full Address", "input", "Provide your billing details"), e.id === "crs-city" && h("exp_imprcheck_cl_city", "City Name", "input", "Provide your billing details"), e.id === "crs-zip" && h("exp_imprcheck_cl_zip", "Zip Code", "input", "Provide your billing details"), e.id === "crs-state" && h("exp_imprcheck_cl_state", "State / Province", "input", "Provide your billing details"), e.id === "crs-country" && h("exp_imprcheck_cl_country", "Country", "input", "Provide your billing details");
        });
      }), C(".elCreditCardForm").then((e) => {
        const s = e, y = d("#order-declined-message");
        s && y && (x == null || x.append(y), x == null || x.append(s), this.paymentChanges());
      }), r) {
        r.style.display = "none";
        const e = r.querySelector(".elOrderProductOptinItem"), s = r.querySelectorAll(".elOrderProductOptinProducts");
        e && (e.style.display = "none"), i == null || i.insertAdjacentHTML("beforeend", q), I(".crs-custom-options input").forEach((b) => {
          b.addEventListener("input", (S) => {
            var k, u, v;
            ((k = S.target) == null ? void 0 : k.value) === "monthly" ? (C(".crs-order-details__price-amount").then((f) => {
              const m = f;
              m && (m.textContent = "$396");
            }), C(".crs-order-details__payment-info").then((f) => {
              const m = f;
              m && (m.querySelector(".crs-order-details__monthly-payments").textContent = "x 3 monthly payments", m.querySelector(".crs-order-details__one-time-price").textContent = "$996 one-time price");
            }), (u = d('input[data-product-name="Partner Program (3 monthly payments)"]')) == null || u.click(), h("exp_imprcheck_cl_3monthly", "3 monthly payments", "input", "Choose payment plan")) : (C(".crs-order-details__payment-info").then((f) => {
              const m = f;
              m && (m.querySelector(".crs-order-details__monthly-payments").textContent = "one-time price", m.querySelector(".crs-order-details__one-time-price").textContent = "$396 x 3 monthly payments");
            }), C(".crs-order-details__price-amount").then((f) => {
              const m = f;
              m && (m.textContent = "$996");
            }), (v = d('input[data-product-name="Partner Program"]')) == null || v.click(), h("exp_imprcheck_cl_onetime", "One-time payment", "input", "Choose payment plan"));
          });
        }), s.forEach((b) => {
          var L, k;
          (L = b.textContent) != null && L.includes("3 monthly payments") && (b.after(b.previousElementSibling), (k = b.querySelector("input")) == null || k.click());
        });
      }
      if (a) {
        a.style.display = "none", i == null || i.insertAdjacentHTML("beforeend", F);
        const e = d(".crs-sticky-cta-container"), s = d(".crs-sticky-cta-container .crs-order-button");
        if (s == null || s.insertAdjacentHTML("beforeend", G), s == null || s.insertAdjacentHTML("beforeend", R), !e)
          return;
        this.device === "mobile" && e.classList.add("crs-sticky-cta-container--fixed");
        const y = document.createElement("div");
        y.style.position = "absolute", y.style.top = "0", y.style.width = "100%", y.style.height = "1px", (O = e.parentNode) == null || O.insertBefore(y, e);
        let b = !1, S = 0;
        const L = () => {
          const u = i == null ? void 0 : i.getBoundingClientRect(), v = u.left;
          S = u.width, b ? (e.style.left = `${v}px`, e.style.width = `${S}px`, e.style.transform = "translateX(0)") : (e.style.left = "", e.style.width = "", e.style.transform = "");
        }, k = new IntersectionObserver(
          (u) => {
            u.forEach((v) => {
              const f = e.getBoundingClientRect(), m = y.getBoundingClientRect();
              if (v.isIntersecting && v.intersectionRect.top > 0 && !b) {
                const T = i.getBoundingClientRect().left;
                e.classList.add("crs-sticky-cta-container--fixed"), e.style.left = `${T}px`, S = f.width, e.style.width = `${S}px`, e.style.transform = "translateX(0)", b = !0;
              } else
                m.top < 0 && (e.classList.remove("crs-sticky-cta-container--fixed"), e.style.left = "", e.style.width = "", e.style.transform = "", b = !1);
            });
          },
          {
            root: null,
            threshold: 0
          }
        );
        setTimeout(() => {
          k.observe(y);
        }, 1e3), window.addEventListener("resize", L), l = d(".nextStepBtn"), n = d(".submitBtn"), l == null || l.addEventListener("click", () => {
          const u = d("#crs-name"), v = d("#crs-email");
          h("exp_imprcheck_cl_sum_checkout", "Secure Checkout", "click", "Order summary");
          const f = _ == null ? void 0 : _.getBoundingClientRect();
          if (f && (f.top < 0 || f.bottom > window.innerHeight) && (_ == null || _.scrollIntoView({ behavior: "smooth" })), !u || !v)
            return;
          const m = u == null ? void 0 : u.value, E = v == null ? void 0 : v.value;
          let T = !0;
          !m || m.trim() === "" ? (u.classList.add("crs-input-error"), T = !1) : u.classList.remove("crs-input-error");
          const an = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!E || E.trim() === "" || !an.test(E))
            v.classList.add("crs-input-error"), T = !1;
          else {
            const [P] = E.split("@");
            P.includes("test") ? (v == null || v.classList.add("crs-input-error"), T = !1) : v.classList.remove("crs-input-error");
          }
          T && (!_ || !x || (_.style.display = "none", x.style.display = "block", x.classList.add("crs-step2-active"), n && (n.style.display = ""), l && (l.style.display = "none")));
        }), n && (n.style.display = "none", n.addEventListener("click", () => {
          const u = a.querySelector("a");
          u == null || u.click();
        }));
      }
      p == null || p.insertAdjacentHTML("beforeend", j), i == null || i.insertAdjacentHTML("afterbegin", U), w(".crs-comments", "exp_imprcheck_ev_review", "View on screen", "Positive review"), w(".crs-order-summary", "exp_imprcheck_ev_order", "View on screen", "Order summary");
      const A = d(".crs-back-btn");
      A && A.addEventListener("click", () => {
        h("exp_imprcheck_cl_back", "Back", "click", "Provide your billing details"), _ && (_.style.display = "block"), x && (x.style.display = "none"), n && (n.style.display = "none"), l && (l.style.display = "block");
      });
    }
    initStyles() {
      document.head.insertAdjacentHTML("beforeend", `<style>${W}</style>`);
    }
    addErrorMessages() {
      const t = d(".elOrder2Step"), o = t == null ? void 0 : t.querySelectorAll("input, select");
      o == null || o.forEach((a) => {
        if (a.name === "phone")
          return;
        const i = document.createElement("div");
        i.classList.add("crs-input-wrap"), i.dataset.name = a == null ? void 0 : a.name;
        const p = document.createElement("div");
        p.textContent = "This field is required", p.classList.add("crs-error-msg"), a.after(i), i.append(a), i.append(p);
      });
    }
    inputsValidation() {
      const t = d(".submitBtn button"), o = d(".crs-back-btn"), a = d(".crs-form"), i = a == null ? void 0 : a.querySelectorAll("input, select");
      if (!i || !t)
        return;
      t.addEventListener("click", () => {
        const r = d("#order-declined-message");
        h("exp_imprcheck_cl_sf_checkout", "Secure Checkout", "click", "Sticky footer (mobile)");
        const l = () => {
          if (r && r.style.display !== "none") {
            const n = r.getBoundingClientRect();
            (n.top < 0 || n.bottom > window.innerHeight) && r.scrollIntoView({ behavior: "smooth" }), p.disconnect();
          }
        };
        r && new MutationObserver((g) => {
          for (const _ of g)
            _.type === "attributes" && _.attributeName === "style" && l();
        }).observe(r, { attributes: !0, attributeFilter: ["style"] }), l(), i.forEach((n) => {
          !n.value || n.value.trim() === "" ? n.classList.add("crs-input-error") : n.classList.remove("crs-input-error"), n.addEventListener("input", () => {
            n.classList.remove("crs-input-error"), t.disabled = !1;
          });
        });
      }), i.forEach((r) => {
        r.addEventListener("input", () => {
          r.classList.remove("crs-input-error"), t.disabled = !1;
        });
      });
      const p = new MutationObserver((r) => {
        r.forEach((l) => {
          if (l.type === "attributes" && l.attributeName === "disabled") {
            const n = l.target;
            n.disabled && (n.disabled = !1);
          }
        });
      });
      p.observe(t, { attributes: !0 }), o && p.observe(o, { attributes: !0 });
    }
    observeInputs() {
      const t = document.querySelectorAll("input, select"), o = (i) => {
        i.forEach((p) => {
          var r, l;
          if (p.type === "attributes" && p.attributeName === "style") {
            const n = p.target, g = n.style;
            g.borderColor === "rgb(185, 21, 23)" && g.borderWidth === "3px" && (n.classList.add("crs-input-error"), n.classList.remove("crs-input-valid"), (r = n.previousElementSibling) != null && r.classList.contains("crs-error-msg") || (l = n.previousElementSibling) == null || l.insertAdjacentHTML(
              "afterend",
              /* HTML */
              '<span class="crs-error-msg">This field is required</span>'
            )), g.borderColor === "rgb(74, 137, 32)" && g.borderWidth === "3px" && (n.classList.remove("crs-input-error"), n.classList.add("crs-input-valid"));
          }
        });
      }, a = new MutationObserver(o);
      t.forEach((i) => {
        a.observe(i, { attributes: !0, attributeFilter: ["style"] });
      });
    }
    paymentChanges() {
      const t = d(".elCreditCardForm"), o = d(".crs-step2");
      if (d(".ccExpYearText"), !t || !o)
        return;
      C(".ccExpYearText").then((p) => {
        const r = p;
        r && (r.textContent = "Expiration date");
      }), C(".ccCVCText").then((p) => {
        const r = p;
        r && (r.textContent = "CVV");
      }), C(".ccCardText ").then((p) => {
        const r = p;
        r && (r.textContent = "Card number");
      });
      const a = (
        /* HTML */
        `
      <div class="crs-payment__header">
        <h3>Credit card</h3>
        <div class="crs-payment__methods">
          <img
            src="https://conversionratestore.github.io/projects/dropservicing/improvements_checkout/img/visa.svg"
            alt="Visa"
            width="38"
            height="25"
          /><img
            src="https://conversionratestore.github.io/projects/dropservicing/improvements_checkout/img/mastercard.svg"
            alt="Mastercard"
            width="38"
            height="25"
          /><img
            src="https://conversionratestore.github.io/projects/dropservicing/improvements_checkout/img/amercan_express.svg"
            alt="American Express"
            width="38"
            height="25"
          /><img
            src="https://conversionratestore.github.io/projects/dropservicing/improvements_checkout/img/discover.svg"
            alt="Discover Network"
            width="38"
            height="25"
          />
        </div>
      </div>
    `
      ), i = (
        /* HTML */
        `
      <div class="crs-payment__badge">
        <div class="crs-payment__wrap">
          <div class="crs-payment__icon">${$}</div>
          <div class="crs-payment__content">
            <div class="crs-payment__title">SSL SECURE PAYMENT</div>
            <div class="crs-payment__desc">Secure Order Form - 100% Protected & Safe</div>
          </div>
        </div>
      </div>
    `
      );
      t.insertAdjacentHTML("beforebegin", a), o.insertAdjacentHTML("afterend", i);
    }
  }
  const Y = `.crs-header {
  display: flex;
  align-items: center;
  padding-top: 0 !important;
  padding-bottom: 0 !important;
  padding-inline: 30px;
  height: 58px;
}

.crs-header::before, .crs-header::after {
  display: none;
}

.crs-header .row, .crs-header .row > div {
  padding: 0 !important;
}
.crs-header .col-inner {
  display: flex;
  padding: 0 !important;
  justify-content: space-between;
}
.crs-header .col-inner .elHeadlineWrapper {
  display: flex;
  align-items: center;
  font-size: 14px !important;
}
.crs-header__guarantee {
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;

}

.crs-header__guarantee span {
  width: 30px;
  height: 28px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="29" height="27" viewBox="0 0 29 27" fill="none"><path d="M25.1043 4.06818C22.6011 1.55228 19.2197 0.147152 15.7001 0.160295C13.9288 0.152143 12.1739 0.504229 10.5385 1.19584C8.90308 1.88745 7.42018 2.90463 6.17702 4.18754C6.11165 4.25496 6.06008 4.3349 6.02529 4.42272C5.9905 4.51055 5.97318 4.60452 5.97433 4.69919C5.97549 4.79387 5.9951 4.88737 6.03202 4.97429C6.06895 5.06121 6.12246 5.13982 6.18945 5.20558C6.32702 5.33756 6.50965 5.41003 6.69878 5.40767C6.8879 5.40531 7.06872 5.32832 7.20307 5.19294C8.31272 4.04905 9.63599 3.14218 11.0951 2.52559C12.5543 1.90899 14.1199 1.59512 15.7001 1.60241C22.2458 1.59679 27.5679 6.93555 27.5679 13.5002C27.5679 20.0648 22.2458 25.4036 15.7001 25.4036C9.15435 25.4036 3.83217 20.0648 3.83217 13.5002V13.3499L5.01427 14.5351C5.14956 14.6701 5.33153 14.7457 5.52107 14.7457C5.71062 14.7457 5.89259 14.6701 6.02788 14.5351C6.09436 14.4688 6.14716 14.3897 6.18321 14.3024C6.21926 14.2151 6.23783 14.1214 6.23783 14.0268C6.23783 13.9321 6.21926 13.8384 6.18321 13.7511C6.14716 13.6638 6.09436 13.5847 6.02788 13.5184L3.62917 11.106C3.49388 10.971 3.31191 10.8954 3.12236 10.8954C2.93282 10.8954 2.75085 10.971 2.61556 11.106L0.209943 13.5184C0.14347 13.5847 0.0906646 13.6638 0.054616 13.7511C0.0185675 13.8384 0 13.9321 0 14.0268C0 14.1214 0.0185675 14.2151 0.054616 14.3024C0.0906646 14.3897 0.14347 14.4688 0.209943 14.5351C0.490276 14.8159 0.944608 14.8159 1.22494 14.5351L2.40565 13.3499V13.5002C2.40333 15.2572 2.74694 16.997 3.41624 18.6169C4.08553 20.2368 5.06697 21.704 6.30269 22.9322C8.8059 25.4481 12.1873 26.8532 15.707 26.8401C19.256 26.8401 22.5979 25.4513 25.1098 22.9322C26.3446 21.7036 27.3249 20.2361 27.993 18.6162C28.6611 16.9963 29.0035 15.2568 29 13.5002C29.0025 11.7432 28.6591 10.0035 27.99 8.38366C27.321 6.76377 26.3398 5.29645 25.1043 4.06818Z" fill="%238F53E3"/></svg>');
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: contain;
  color: #fff;
  font-size: 13.82px;
  font-style: normal;
  font-weight: 700;
  line-height: 27.641px;
}

.crs-header__guarantee a {
  color: #fff !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}

.crs-header__headline {
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
}

div:has(> .crs-header__questions) {
  font-size: 14px !important;
}

div:has(> .crs-header__headline) {
  display: flex;
  align-items: center;
}
.containerInner:has(.crs-header) {
  width: 100% !important;
}

@media (max-width: 768px) {
  .crs-header {
    height: 62px;
    padding-inline: 0;
  }

  .crs-header .col-inner {
    flex-direction: column;
    align-items: center;
  }

  .crs-header .col-inner .elHeadlineWrapper {
    margin: 0 !important;
  }

  .crs-header__headline {
    text-align: center;
    font-size: 14px;
  }

  .crs-header .elHeadlineWrapper:last-child {
    display: none;
  }

  .crs-header__guarantee  {
    font-size: 12px;
    line-height: 24px;
  }
  .crs-header__guarantee span {
    font-size: 9px;
    line-height: 14px;
    width: 18px;
    height: 16px;
  }


}
`, J = "https://www.dropservicing.com/refund-guarantee?_gl=1*1idgxw5*_gcl_au*MTQ4MDg5MTY4OS4xNzIzNTQxOTY2*_ga*NTg4MzI1MjUuMTcyMzU0MTk2Nw..*_ga_KQ2Z1WNWC8*MTcyNDE2MTg2OS45LjAuMTcyNDE2MTg2OS42MC4wLjA.";
  class Q {
    constructor() {
      this.init();
    }
    init() {
      this.initStyles(), this.changes();
    }
    changes() {
      I(".fullContainer ").forEach((o) => {
        var a, i;
        if ((a = o.textContent) != null && a.includes("DROP SERVICING PARTNER PROGRAM") && ((i = o.textContent) != null && i.includes("Questions?"))) {
          const p = (
            /* HTML */
            `<div class="crs-header__guarantee">
          <div class="crs-header__guarantee-wrap"><span>30</span> - day <a href="${J}">action-based</a> money-back guarantee</div>
        </div>`
          ), r = o.querySelector(".elHeadlineWrapper"), l = o.querySelectorAll("b");
          l == null || l.forEach((n) => {
            n.textContent === "DROP SERVICING PARTNER PROGRAM" && n.classList.add("crs-header__headline"), n.textContent === "Questions?" && n.classList.add("crs-header__questions");
          }), o.classList.add("crs-header"), r && r.insertAdjacentHTML("afterend", p);
        }
      });
    }
    initStyles() {
      const t = document.createElement("style");
      t.textContent = Y, document.head.appendChild(t);
    }
  }
  class X {
    constructor() {
      this.init();
    }
    init() {
      this.addEvents();
    }
    addEvents() {
      w(
        '.fullContainer[style*="Background-Big-Last-Footer-t-"]',
        "exp_imprcheck_ev_success_st",
        "View on screen",
        "Just a few incredible success stories from our members"
      );
      const t = d(
        '.fullContainer[style*="Background-Big-Last-Footer-t-"] a.elButtonRounded '
      );
      t && t.addEventListener("mousedown", () => {
        h(
          "exp_imprcheck_cl_join_drop",
          "Join drop servicing partner program",
          "click",
          "Just a few incredible success stories from our members"
        );
      }), document.querySelectorAll(".fullContainer").forEach((a) => {
        var i, p, r, l, n;
        if ((i = a.textContent) != null && i.includes("Overall Rating") && w(a, "exp_imprcheck_ev_rating", "View on screen", "Overall Rating"), (p = a.textContent) != null && p.includes("Frequently Asked Questions") && w(a, "exp_imprcheck_ev_faq", "View on screen", "Frequently Asked Questions"), (r = a.textContent) != null && r.includes("Join Drop Servicing Partner Program Today")) {
          if ((n = (l = a.querySelector("a")) == null ? void 0 : l.textContent) != null && n.includes("Join Drop Servicing Partner Program Today"))
            return;
          const g = a.querySelector("a.elButtonRounded");
          g && (g == null || g.addEventListener("mousedown", () => {
            h(
              "exp_imprcheck_cl_join_now",
              "Join now with limited time offer at $996",
              "click",
              "Join Drop Servicing Partner Program Today"
            );
          })), w(
            a,
            "exp_imprcheck_ev_join_drop",
            "View on screen",
            "Join Drop Servicing Partner Program Today"
          );
        }
      });
    }
  }
  const nn = `.crs-schedule {
  margin-top: 40px;
  color: #000;
}

@media screen and (max-width: 768px) {
  .crs-schedule {
    margin-top: 24px;
    padding-inline: 16px;
    margin-right: -16px;

  }
  
}

.crs-schedule::before {
  content: '';
  position: absolute;
  inset: 0;
  display: block;
  background: #F2EBFC;
  height: 480px;
  z-index: -1;
}

.crs-schedule__title {
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;
  text-align: center;
  margin: 0;
}

@media screen and (max-width: 768px) {

  .crs-schedule__title {
    font-size: 16px;
    line-height: 26px;
    text-align: center;
  }
  
}

.crs-schedule__title span {
  color: #8F53E3;
}

.crs-schedule__blocks {
  margin-top: 32px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  width: 100%;
}

.crs-schedule__blocks::-webkit-scrollbar {
  height: 4px; /* Висота горизонтального скролбару */
}

.crs-schedule__blocks::-webkit-scrollbar-track {
  background: #E8DBFA; /* Колір фону треку скролбару */
}

.crs-schedule__blocks::-webkit-scrollbar-thumb {
  background: #A165F5; /* Колір скролбару */
  border-radius: 4px; /* Закруглення країв скролбару */
}

.crs-schedule__blocks::-webkit-scrollbar-thumb:hover {
  background: #A165F5; /* Колір скролбару при наведенні */
}
@media (max-width: 1120px) {
  .crs-schedule__blocks {
    padding-bottom: 24px;
  }
}
@media (max-width: 768px) {
  .crs-schedule__blocks {
    margin-top: 24px;
    padding-right: 16px;
  }
}
.crs-schedule__block {
  position: relative;
  background: #e8dbfa;

  padding: 0;
  padding-right: 16px;
  width: 220px;
  height: 128px;
  flex-shrink: 0;
  clip-path: polygon(93% 0%, 100% 50%, 93% 100%, 0% 100%, 7% 50%, 0% 0%);
  margin-right: -5px; 
}

.crs-schedule__wrap {
  padding: 14px 2px 16px 26px;
}

.crs-schedule__block:first-child {
  transform: none;
  clip-path: polygon(93% 0%, 100% 50%, 93% 100%, 0% 100%, 0% 0%);
}

.crs-schedule__block:first-child .crs-schedule__wrap {
  padding-left: 16px;
}

.crs-schedule__block:last-child {
  background: #DCE9E1;;
  clip-path: polygon(100% 0%, 100% 50%, 100% 100%, 0% 100%, 7% 50%, 0% 0%);
  margin-right: 0; 
}

.crs-schedule__today,
.crs-schedule__check {
  position: absolute;
  top: 0;
  right: 0;
  border-radius: 0px 0px 0px 11px;
  padding: 2px 10px;
}

.crs-schedule__today {
  background: #a165f5;
  padding-right: 25px;
  z-index: 2;
  color: #fff;
  font-size: 12px;
  font-weight: 700;
  line-height: 24px;
  text-transform: uppercase;
}

.crs-schedule__check {
  background: #17aa1c;
}

.crs-schedule__date {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  width: max-content;
  padding: 2px 10px;
  background: #fff;
  font-size: 12px;
  font-weight: 400;
  line-height: 24px;
  text-transform: uppercase;
}

.crs-schedule__until {
  text-transform: capitalize;
}

.crs-schedule__text {
  margin-top: 10px;
  font-size: 12px;
  font-weight: 400;
  line-height: 20px;
}

.crs-schedule__text a {
  color: inherit !important;
  text-decoration: underline;
  text-underline-offset: 2px;
}
`, en = "https://www.dropservicing.com/refund-guarantee?_gl=1*1idgxw5*_gcl_au*MTQ4MDg5MTY4OS4xNzIzNTQxOTY2*_ga*NTg4MzI1MjUuMTcyMzU0MTk2Nw..*_ga_KQ2Z1WNWC8*MTcyNDE2MTg2OS45LjAuMTcyNDE2MTg2OS42MC4wLjA.";
  function M(c) {
    const t = { month: "short", day: "numeric", year: "numeric" };
    return c.toLocaleDateString("en-US", t);
  }
  class tn {
    constructor() {
      this.init();
    }
    init() {
      this.getDates(), this.render();
    }
    render() {
      const t = (
        /* HTML */
        `
      <div class="crs-schedule">
        <div class="crs-schedule__header">
          <h3 class="crs-schedule__title">
            Secure your spot in the Drop Servicing Partner Program – Save <span>$2,000</span> and Get 8 Exclusive
            Bonuses Today
          </h3>
        </div>
        <div class="crs-schedule__blocks">
          <div class="crs-schedule__block">
            <div class="crs-schedule__wrap">
              <div class="crs-schedule__date">${M(this.today)}</div>
              <div class="crs-schedule__today">today</div>
              <div class="crs-schedule__text">Join Drop Servicing Partner Program</div>
            </div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__wrap">
              <div class="crs-schedule__date">${M(this.today)}</div>
              <div class="crs-schedule__text">
                Access the full Drop Servicing Partner Program package, community and support
              </div>
            </div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__wrap">
              <div class="crs-schedule__date">${M(this.date2DaysLater)}</div>
              <div class="crs-schedule__text">
                Attend live video calls and receive personalized coaching (3x every week)
              </div>
            </div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__wrap">
              <div class="crs-schedule__date">${M(this.date17DaysLater)}</div>
              <div class="crs-schedule__text">Launch your first drop servicing business</div>
            </div>
          </div>
          <div class="crs-schedule__block">
            <div class="crs-schedule__wrap">
              <div class="crs-schedule__check">${H}</div>
              <div class="crs-schedule__date"><span class="crs-schedule__until">Until</span>&nbsp;${M(this.date31DaysLater)}</div>
              <div class="crs-schedule__text">30 days <a href="${en}">action-based</a> money-back guarantee</div>
            </div>
          </div>
        </div>
      </div>
    `
      ), o = document.querySelector(".crsTargetSection");
      o && (this.initStyles(), o.insertAdjacentHTML("beforebegin", t), w(".crs-schedule", "exp_imprcheck_ev_timeline", "View on screen", "Timeline"));
    }
    getDates() {
      this.today = /* @__PURE__ */ new Date(), this.date2DaysLater = new Date(this.today), this.date2DaysLater.setDate(this.today.getDate() + 2), this.date17DaysLater = new Date(this.today), this.date17DaysLater.setDate(this.today.getDate() + 17), this.date31DaysLater = new Date(this.today), this.date31DaysLater.setDate(this.today.getDate() + 31);
    }
    initStyles() {
      document.head.insertAdjacentHTML("beforeend", `<style>${nn}</style>`);
    }
  }
  z({ name: "Improvements on Checkout Page", dev: "OS" }), N("exp_imprcheck_loaded");
  const on = "/partner-offer";
  class rn {
    constructor() {
      this.init();
    }
    init() {
      window.location.pathname === on && (new Z(), new tn(), new Q(), new X());
    }
  }
  new rn();
})();
