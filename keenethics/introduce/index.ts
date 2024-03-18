import {startLog} from '../libraries/index.ts';

const dir = 'https://conversionratestore.github.io/projects/keenethics/introduce/img/'

startLog({ name: 'Keenethics: "Introduce content based on JBTD on HP"', dev: 'Andrii' });

const waitForElement = (selector: string): Promise<Element | null> => {
  return new Promise(resolve => {
    const element = document.querySelector(selector);
    if (element) {
      return resolve(element);
    }

    const observer = new MutationObserver(() => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true
    });
  });
}

const style: string = /*html*/`
    <style>
    .contacts-btn {
      border-radius: 8px;
      border: 1px solid var(--red-600-valencia, #D62C2C);
      background: var(--red-600-valencia, #D62C2C);
      color: #fff;

      &:hover {
        background: #f33;
        border-color: #f33;
        box-shadow: 0 8px 8px 0 rgba(0, 0, 0, .16);
      }

      &:active {
        background: #991f1f;
        border-color: #991f1f;
      }
    }

    .hero {
      display: none;
    }

    .aa-hero {
      padding: 25px 0 30px;
    }

    .aa-hero__wrapper {
      padding-left: 6.94%;
    }

    .aa-container {
      max-width: 1272px;
      padding: 0 16px;
      margin: 0 auto;
    }

    .heading-1 {
      color: #12233D;

      /* H1 mobile */
      font-family: "Raleway", sans-serif;
      font-size: 42px;
      font-style: normal;
      font-weight: 700;
      line-height: 130%;
      /* 54.6px */
      margin-bottom: 24px;
    }

    .heading-2 {
      font-family: "Raleway", sans-serif;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      /* 125% */
    }

    .heading-3 {
      color: var(--blue-800-tangaroa, #12233D);

      /* H3 */
      font-family: "Raleway", sans-serif;
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 32px;
      /* 133.333% */
    }

    .aa-content {
      display: flex;
      justify-content: space-between;
      padding-bottom: 80px;
    }

    .aa-content>div:first-of-type {
      width: 46.2%;
      margin-top: auto;
    }

    .aa-content>div:last-of-type {
      display: flex;
      padding-right: 30px;
      position: relative;
      z-index: 1;
      overflow: hidden;
    }

    .aa-content>div:last-of-type::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 40%;
      width: 680px;
      height: 680px;
      border: 162.29px solid var(--red-600-valencia, #D62C2C);
      border-radius: 50%;
      z-index: -1;
    }

    .aa-content .btn-primary {
      max-width: 376px;
      width: 100%;
    }

    .description {
      color: var(--gray-650-dark-gray, #414F64);
      font-family: Raleway;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 24px;
      /* 150% */
      margin-bottom: 32px;
    }

    .under-description {
      width: 83.7%;
    }

    .solutions-title {
      margin: 32px 0 20px;
      color: #12233D;
      font-family: Raleway;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: 150%;
    }

    .aa-solutions {
      padding: 0;
    }

    .aa-solutions li {
      list-style: none;
      border-radius: 8px;
      background: #F7F7F7;
      margin-bottom: 10px;
    }

    .aa-solutions li:last-of-type {
      margin-bottom: 0;
    }

    .aa-solutions li a {
      display: flex;
      color: var(--blue-800-tangaroa, #12233D);
      padding: 10px 18px;
      font-family: Raleway;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 100%;
      text-decoration: none;
      align-items: center;
      /* 14px */
    }

    .aa-solutions li a img:first-of-type {
      margin-right: 20px;
    }

    .aa-solutions li a span {
      margin-right: auto;
    }

    .aa-solutions li a img:last-of-type {
      margin-left: 5px;
    }

    .aa-awards {
      display: flex;
    }

    .aa-awards ul {
      display: flex;
      list-style: none;
      padding: 0;
      width: 100%;
      justify-content: space-between;
      flex: 1;
      padding-left: 4.17%;
      gap: 4.17%;
    }

    .aa-dash-line {
      background: linear-gradient(90deg, rgba(216, 216, 216, 0.00) 0.65%, #D8D8D8 16.29%, #D8D8D8 84.03%, rgba(216, 216, 216, 0.00) 100%);
      margin: 70px 6.94% 0 0;
      height: 1px;
    }

    .software {
      padding: 30px 0;
    }

    .software .heading-2 {
      text-align: center;
      margin-bottom: 44px;
    }
  </style>
`;

const html: string = /*html*/`
 <section class="aa-hero">
    <div class="aa-hero__wrapper">
      <div class="aa-content">
        <div>
          <h1 class="heading-1">Empower Your Business with Ethical Software Solutions</h1>
          <p class="description">Experience the velocity of KeenEthics' unique blend of no-code platforms and custom
            JavaScript development – <strong>launch your projects up to 40% faster</strong> without sacrificing quality
            or
            ethics.</p>

          <div class="under-description">
            <a href="/estimate" class="btn-primary btn-primary_accent">Get free project estimate</a>
            <p class="solutions-title">What software solution are you looking for?</p>
            <ul class="aa-solutions">
              <li>
                <a href="#">
                  <img src="${dir}/develop.svg" alt="">
                  <span>Develop My Idea</span>
                  <img src="${dir}/arrow-right.svg" alt="arrow right">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="${dir}/puzzle.svg" alt="">
                  <span>Optimize My Business</span>
                  <img src="${dir}/arrow-right.svg" alt="arrow right">
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="${dir}/scale.svg" alt="">
                  <span>Scale My Project</span>
                  <img src="${dir}/arrow-right.svg" alt="arrow right">
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <img src="${dir}/hero-image.png" alt="">
        </div>
      </div>

      <div class="aa-awards">
        <h2 class="heading-3">Our Awards:</h2>
        <ul>
          <li><img src="${dir}/Aciety.svg" alt="Aciety"></li>
          <li><img src="${dir}/AwardGDPR.svg" alt="GDPR.svg"></li>
          <li>
            <img src="${dir}/AwardBest_Software_Developments_company_in_Education.svg"
              alt="Award Best Software Developments company in Education">
          </li>
          <li><img src="${dir}/AwardClutch_2023.svg" alt="Award Clutch 2023"></li>
          <li><img src="${dir}/AwardExpertise.com_2023.svg" alt="Award Expertise.com 2023"></li>
          <li><img src="${dir}/AwardAciety_React_Development.svg" alt="Award Aciety React Development"></li>
          <li><img src="${dir}/AwardGoodFirms.svg" alt="Award GoodFirms"></li>
          <li><img src="${dir}/AwardAmplifier.svg" alt="Award Amplifier"></li>
        </ul>
      </div>

      <div class="aa-dash-line"></div>
    </div>
  </section>
  <section class="software">
    <div class="aa-container">
      <h2 class="heading-2">Which software service best fits your needs?</h2>
      <div class="tabs">

      </div>
    </div>
  </section>
`

waitForElement('head').then(el => el.insertAdjacentHTML('afterend', style))
waitForElement('.hero').then(el => el.insertAdjacentHTML('afterend', html))