
let dirImages = `https://conversionratestore.github.io/projects/luminette/img/`

const html = `
  <!-- Section 1 -->
  <section class='custom-section'>
    <div class='container-fluid container--size--lg lav-jumb__container'>
      <div class="days-test">
        <h3 class="text-center">You have 30 days to test Luminette</h3>
        <div class="line-dashed">
          <ul class="row days-test_list">
            <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center">
              <p class="fs-22 fw-bold days-test_head">Buy Luminette3</p>
              <div class="circle"></div>
              <div class="days-test_date">
                <p class="fs-18 fw-bold">Today</p>
                <p class="fs-16 op-07">Sep 26, 2022</p>
              </div>
            </li>
            <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center">
              <div class="d-flex align-items-center days-test_head ">
                <p class="fs-22 fw-bold mr-2">Free shipping</p>
                <div class="tooltip d-flex">
                  <img src="${dirImages}info.svg" alt="info"/>
                  <div class="tooltip-dropdown fs-16">
                    <div class="tooltip-item">
                      <div class="tooltip_free text-center mb-2">
                        <div class="d-flex align-items-center justify-content-center mb-2 pb-1">
                          <img class="mr-2" src="${dirImages}EN.svg" alt="EN">
                          <img class="ml-1" src="${dirImages}CA.svg" alt="CA">
                        </div>
                        <p> Free for USA and Canada: <span class="fw-bold d-block">3 to 5 working days</span></p>
                      </div>
                      <div class="d-flex align-items-center justify-content-center mb-2 py-1">
                        <img class="mr-2" src="${dirImages}bpost.png" alt="bpost">
                        <img class="ml-1" src="${dirImages}colissimo.png" alt="colissimo">
                      </div>
                      <p class="">Orders are shipped from our logistics center located in Boise, Idaho. We use the services of Fedex Ground or USPS. Before they deliver your package, the carrier sends you a email warning you of the day of its passage.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="circle"></div>
              <div class="days-test_date">
                <p class="fs-18 fw-bold">3-5 days</p>
                <p class="fs-16 op-07">Sep 29-Oct 1, 2022</p>
              </div>
            </li>
            <li class="col-xl-4 d-xl-block d-flex flex-row-reverse justify-content-center">
              <div class="d-flex align-items-md-center align-items-end days-test_head">
                <div class="fs-22 fw-bold mr-2">100% money<div class="d-md-inline d-block">back guarantee</div> </div>
                <div class="tooltip d-flex">
                  <img src="${dirImages}info.svg" alt="info"/>
                  <div class="tooltip-dropdown fs-16">
                    <div class="tooltip-item">
                      <p class="mb-2">
                        <b class="fw-semi">You have a whole month to trial your Luminette.</b> We recommend that you use Luminette consistently for a minimum of 10 consecutive days.
                      </p>
                      <p>However, if you’re dissatisfied, you can choose to be refunded for your Luminette within 30 days of purchase. See more details on our <a href="#" class="fw-semi bb-1 c-blue">Refunds page</a>.</p>
                    </div> 
                  </div>
                </div>
              </div>
              <div class="circle"></div>
              <div class="days-test_date">
                <p class="fs-18 fw-bold">After 30 days</p>
                <p class="fs-16 op-07">Oct 29-Nov 1, 2022</p>
              <div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- Section 2 -->
  <section class='custom-section compare-section'>
    <div class='container-fluid container--size--lg lav-jumb__container'>
      <div class="row fs-16 text-center compare mx-auto">
        <div class="col-6 py-5">
          <img class="my-1" src="${dirImages}glasses.svg" alt="glasses icon"/>
          <p class="fs-22 fw-bold py-1">Luminette3</p>
        </div>
        <div class="col-6 py-5">
          <img class="my-1" src="${dirImages}box.svg" alt="box icon"/>
          <p class="fs-22 fw-bold py-1">Light Box</p>
        </div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Portable</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Wear while <span class="text-ellipsis"> on-the-go</span></p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Requires you to stop and sit still for <span class="text-ellipsis">30 mins</span></p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Light colour spectrum</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Blue-enriched <span class="text-ellipsis">white light</span></p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Full spectrum <span class="text-ellipsis">white light</span></p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Therapy effectiveness</div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Provides effective therapy using <br>
            a less intense light source</p></div>
        <div class="col-6 py-5 fw-medium"><p class="py-1">Requires at least 10,000 lux to provide effective light therapy</p></div>
        <div class="col-12 py-2 fs-18 fw-bold b-1">Size</div>
        <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">Small/ ultralight <br>
            only 51g (1.83 ounces)</p></div>
        <div class="col-6 py-5 fw-medium"><p class="pt-1 pb-5">	Large/ bulky</p></div>
      
      </div>
    </div>
  </section>

  <!-- Section 3 -->
  <section class='custom-section technical'>
    <div class='container-fluid container--size--lg lav-jumb__container'>
      <div class="technical">
        <div class="row technical-block">
          <div class="col-lg-6 pl-0">
            <h2>Technical <br>
            Details</h2>
          </div>
          <div class="col-lg-6 fs-18">
            <div class="row pb-2 bb-1">
              <div class="col-sm-7 col-6 pl-0">Product Dimensions</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3"D x 9.06"W x6.26"H</div>
            </div>
            <div class="row py-2 bb-1">
              <div class="col-sm-7 col-6 pl-0">Light Source Type</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">LED</div>
            </div>
            <div class="row py-2 bb-1">
              <div class="col-sm-7 col-6 pl-0">Number of Light Sources</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">3</div>
            </div>
            <div class="row py-2 bb-1">
              <div class="col-sm-7 col-6 pl-0">Item Weight</div>
              <div class="col-sm-5 col-6 fw-semi pr-0 pl-1">1.83 ounces (51g)</div>
            </div>
          </div>
        </div>
        <div class="safety-block">
          <div class="row">
            <div class="col-lg-6 pl-0">
              <h2 class="pb-4">Safety</h2>
              <div class="d-flex mt-5">
                <img class="mr-5 mb-3" src="${dirImages}safety-1.svg" alt="safety icon" />
                <img class="mr-5 ml-2 mb-3" src="${dirImages}safety-2.svg" alt="safety icon" />
                <img class="ml-2 mb-3" src="${dirImages}safety-3.svg" alt="safety icon" />
              </div>
            </div>
            <div class="col-lg-6 fs-18 px-0">
              <p class="fw-bold mb-3">Since 2007 Luminette®  carries the European 
              CE classification. </p>
              <p class="mb-3">Luminette® is classified as a device that is safe for the eyes in accordance with the international standard CEI 62471. In addition, the light emitted by Luminette®  is free from UV, infrared rays and does not contain short wavelength below 450 nm</p>
              <p>There are no Light Therapy lamps in the USA that carry FDA approval. Therefore the efficacy and safety of this electronic device - and all other light therapy devices on the US market - will be unregulated by the FDA. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const styles = `
  .custom-section {
    padding: 50px 0;
  }
  /* fonts */
  .fw-bold {
    font-weight: 700;
  }
  .fw-semi {
    font-weight: 600;
  }
  .fw-medium {
    font-weight: 500;
  }
  .fs-22 {
    font-size: 22px;
    line-height: 28px;
  }
  .fs-18 {
    font-size: 18px;
    line-height: 24px;
  }
  .fs-16 {
    font-size: 16px;
    line-height: 24px;
  }
  .op-07 {
    opacity: 0.7;
  }
  .bb-1 {
    border-bottom: 1px solid #517193;
  }
  .b-1 {
    border: 1px solid #EFF2F5;
  }
  .c-blue {
    color: #517193;
  }
  /* Section 1 */
  .days-test {
    background: #406184;
    border-radius: 16px;
    padding: 32px 0;
    color: #FFFFFF;
    position: relative;
  }
  .days-test:before, .days-test:after {
    content: '';
    position: absolute;
    top: 0;
    height: 100%;
    width: 150px;
    z-index: 3;
    pointer-events: none;
    border-radius: 16px;
  }
  .days-test:before {
    left: 0;
    background: linear-gradient(90deg, #406184, rgba(64, 97, 132, 0.1));
  }
  .days-test:after {
    right: 0;
    background: linear-gradient(-90deg, #406184, rgba(64, 97, 132, 0.1));
  }
  .line-dashed {
    position: relative;
    margin-top: 32px;
  }
  .line-dashed:before {
    content: '';
    position: absolute;
    top: 62px;
    left: 0;
    width: 100%;
    height: 2px;
    background: url(${dirImages}line-desk.svg) center / 100%;
  }
  .days-test .row {
    max-width: 1045px;
    margin: 0 auto;
    padding: 0;
  }
  .circle {
    background: linear-gradient(90deg, #74E6FF 0%, #5D9EFF 851.75%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    margin: 22px 0 8px;
  }
  .days-test_list {
    list-style-type: none;
  }
  .tooltip {
    position: relative;
  }
  .tooltip:hover .tooltip-dropdown {
    opacity: 1;
    pointer-events: auto;
  }
  .tooltip-dropdown {
    color: #517193;
    position: absolute;
    padding-top: 32px;
    top: 0;
    right: -15px;
    width: 351px;
    pointer-events: none;
    opacity: 0;
    z-index: 4;
  }
  .tooltip-item {
    border-radius: 8px;
    background: #FFFFFF;
    padding: 24px;
    position: relative;
  }
  .tooltip-item:before {
    content: '';
    position: absolute;
    bottom: 100%;
    right: 10px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12.5px 8px 12.5px;
    border-color: transparent transparent #fff transparent;
  }
  .tooltip_free {
    background: rgba(218, 225, 232, 0.3);
    border-radius: 8px;
    padding: 24px;
  }
  /* Section 2*/
  .compare-section {
    background: url(${dirImages}stripes_features.png) no-repeat center bottom / cover;
  }
  .compare {
    background: #F8F9FA;
    border: 1px solid #F8F9FA;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    border-radius: 16px;
    max-width: 718px;
    overflow: hidden;
  }
  .compare .col-6:nth-child(3n+1) {
    background: linear-gradient(98.6deg, #EEF1F4 43.43%, #EEF1F4 58.16%, #F3F5F7 100%);
  }
  /* Section 3*/
  .technical {
    color: #517193;
    box-shadow: 0px 44px 66px rgba(59, 83, 108, 0.25);
    background: #FFFFFF;
  }
  .technical h2 {
    line-height: 54px;
  }
  .safety-block {
    background: linear-gradient(101.51deg, #F8F9FA 0%, #FDFDFD 100%, #FDFDFD 100%);
  }
  .technical-block, .safety-block .row {
    padding: 60px 16px;
    max-width: 992px;
    margin: 0 auto;
  }
  /* media */
  @media (min-width: 768px) {
    /* Section 2*/
    .compare-section {
      padding: 80px 0;
    }
  }
  @media (max-width: 1319px) {
    /* Section 1*/
    .days-test:before, .days-test:after {
      width: 36px;
    }
  }
  @media (max-width: 1199px) {
    /* Section 1*/
    .days-test:before, .days-test:after {
      width: 36px;
    }
    .days-test_date, .days-test_head  {
      width: calc(50% - 28px);
    }
    .days-test_date {
      text-align: right;
    }
    .line-dashed:before {
      top: 7px;
      left: 50%;
      width: 1px;
      height: calc(100% - 35px);
      transform: translateX(-50%);
      background-image: url(${dirImages}line-mob.svg);
    }
    .days-test_list li {
      align-items: flex-start;
    }
    .days-test_list li:not(:last-child) {
      margin-bottom: 24px;
    }
    .days-test_list li:last-child .circle {
      background: #5D9EFF;
    }
    .circle {
      margin: 0 16px;
    }
  }

  @media (max-width: 991px) {
    /* Section 3*/
    .technical-block h2 {
      margin-bottom: 25px;
    }
    .safety-block h2 {
      margin-bottom: 0;
      padding-bottom: 0;
    }
  }
  @media (max-width: 767px) {
    .days-test:before, .days-test:after {
      content: none;
    }
    .tooltip > img {
      width: 14px;
      height: 22px;
    }
    .days-test h3 {
      font-size: 22px;
      line-height: 28px;
    }
    .days-test {
      padding: 24px 0;
    }
    .line-dashed {
      margin-top: 16px;
    }
    .fs-22 {
      font-size: 18px;
      line-height: 24px;
    }
    .compare .fs-18, .days-test .fs-18, .technical-block .fs-18 {
      font-size: 16px;
      line-height: 24px;
    }
    .days-test_date .fs-16 {
      font-size: 14px;
      line-height: 20px;
    }
    .days-test_head .fs-22.mr-2 {
      margin-right: 4px;
    }
    .circle {
      margin: 7px 16px;
      width: 12px;
      height: 12px;
    }
    .tooltip {
      position: initial;
    }
    .days-test_date {
      width: calc(44% - 22px);
    }
    .days-test_head {
      width: calc(56% - 22px);
    }
    .line-dashed:before {
      left: calc(44% + 1px);
    }
    .days-test_list li {
      position: relative;
    }
    .tooltip-dropdown {
      right: 0;
      width: 100%;
    }
    .tooltip-item:before {
      right: auto;
      left: calc(50% + 63px);
    }
    .days-test_list li:not(:nth-child(2)) .tooltip-dropdown {
      top: calc(100% - 23px);
    }
    /* Section 2*/
    .compare img {
      width: 60px;
      height: 60px;
    }
    /* Section 3*/
    .safety-block img {
      width: 64px;
      height: 64px;
      margin-right: 12px;
      margin-left: 0;
    }
    .technical-block, .safety-block .row {
      padding: 16px;
    }
    .technical h2 {
      font-size: 32px;
      line-height: 36px;
    }
  }
`;

init();

function init() {
  // Init styles
  const stylesEl = document.createElement('style');
  stylesEl.innerHTML = styles;
  document.body.appendChild(stylesEl);

  // Init new Layout
  document.querySelector('.section-main').insertAdjacentHTML('afterend', html);
}
