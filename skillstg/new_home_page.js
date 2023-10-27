console.log('%c EXP: New Home Page', 'background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;')
const $$el = (selector) => document.querySelectorAll(selector)
const $el = (selector) => document.querySelector(selector)
const git = 'https://conversionratestore.github.io/projects/skillstg/img/homepage'

// funtion for push data to GA4
const pushDataLayer = (name, desc, type = '', loc = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} ${desc} ${type} ${loc}`)
}

const clarityInterval = setInterval(function () {
  if (typeof clarity == 'function') {
    clearInterval(clarityInterval)
    clarity('set', 'new_home_page', 'variant_1')
  }
}, 1000)

// block visibility function
function checkFocusTime(selector, event, location, additional = '') {
  const checker = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !entry.target.getAttribute('data-startShow')) {
        entry.target.setAttribute('data-startShow', new Date().getTime())
      } else if (!entry.isIntersecting && entry.target.getAttribute('data-startShow')) {
        const startShow = entry.target.getAttribute('data-startShow')
        const endShow = new Date().getTime()
        const timeShow = Math.round((endShow - startShow) / 1000)
        entry.target.removeAttribute('data-startShow')
        pushDataLayer(event, timeShow + ' ' + additional, 'Visibility', location)
        checker.unobserve(entry.target)
      }
    })
  })

  checker.observe(document.querySelector(selector))
}

function scrollToElement(selector) {
  const element = document.querySelector(selector)
  const elementPosition = element.getBoundingClientRect().top
  const offsetPosition = elementPosition - 70
  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  })
}

const tpReviews = [
  {
    title: 'Great courses, great trainers',
    text: 'Had an absolutely wonderful experience getting my emergency first aid at work training! The trainer was clearly very knowledgable and had a great way of training in a way that included a good mix of practical and theory',
    customer: 'Moth To Flame',
    date: '29 Sept 2023'
  },
  {
    title: 'Excellent Centre for Gas',
    text: "Excellent Centre, highly recommend. I'm a Former Veteran, recently completed my ACS after 7 months training. Thank you to the ACS assessors, the admin team with a Special thank you to the Trainer Gavin, Paul, Stevie, Glen and Derek Bruce. Training",
    customer: 'DM',
    date: '28 Sept 2023'
  },
  {
    title: 'I recently used Skills Training Group…',
    text: 'I recently used Skills Training Group for the reassessment of my ACS. All the staff were very helpful and knowledgeable. The centre itself is set up perfectly with a great selection of appliances required to complete my course. Classrooms are well sized and comfortable and was made very welcome. Would recommend them to anyone wishing to get reassessed or even getting their first qualifications.',
    customer: 'Charles Green',
    date: '28 Sept 2023'
  },
  {
    title: 'I came to Skills Training (Paisley) to… Initial ACS 10/10',
    text: "I came to Skills Training (Paisley) to do my initial ACS again.This is the 3rd time I've used STG twice for domestic gas resits and this time to do the initial again due to letting my qualifications lapse. Each time I've have had an excellent experience and as always found the staff very informative and helpful. I'm back in next week to redo the unvented hot water course and know the experience will be just as good as every experience so far. So thank you all at STG. I will always recommend your services.",
    customer: 'Ross',
    date: '28 Sept 2023'
  },
  {
    title: 'Water regulations and heat pumps course',
    text: 'I carried out the water regulations and heat pumps course at skills training group. This was 4 days which was very interesting and helped me widen my skills and knowledge. Thanks to Paul who took the course making sure everybody was managing it at the same pace and making you feel comfortable to flag something up if you were unsure about it and taking time to explain it and talk you through it.',
    customer: 'Christopher Igoe',
    date: '21 Sept 2023'
  },
  {
    title: 'New entrant gas course',
    text: 'Completed new entrant gas course with skills training. Course was brilliant learned loads with great up to date equipment and brilliant trainers who were always a phone call away. Special mention to Gavin who was our trainer for the 6 months who made everyday different and always went above and beyond to help make sure everyone’s needs were met.',
    customer: 'Christopher Igoe',
    date: '18 Sept 2023'
  },
  {
    title: 'Great experience with STG',
    text: 'Great experience with STG . I done my initial training here & now my reassessments 5 years later. Highly recommended for anyone looking to join the gas industry.',
    customer: 'Scotty Rumsby',
    date: '6 Sept 2023'
  },
  {
    title: 'New Entrant Gas course',
    text: 'Course is brilliant for anyone looking to take up a new career. Gavin our trainer was brilliant throughout the 7 months and goes above and beyond for students. All staff at the centre are always on hand to help you through it! Thanks to Ian & David our Acs assessors.',
    customer: 'Michael Giblin',
    date: '31 August 2023'
  },
  {
    title: 'First Aid Course 100% recommend',
    text: 'Completed my first aid course a few days ago, and thoroughly enjoyed the whole experience. It was easy to book and very affordable. Allan was fab, very knowledgeable and great at engaging with all of the class. The facilities are great too and easily to find with parking just close to the venue. All in all I would 100% recommend this company and the course. Its rare to find that you get a great first hand experience these days. Top class and well done!',
    customer: 'Tina Mcbain',
    date: '31 August 2023'
  },
  {
    title: 'New entrant gas course was absolutely…',
    text: 'New entrant gas course was absolutely brilliant the staff are all very helpful. Our trainer Gavin was fantastic throughout and extremely knowledgable. Would recommend to anyone looking for a new career to study at Skills!',
    customer: 'John',
    date: '30 August 2023'
  },
  {
    title: 'ACS Reassessment',
    text: 'Just completed my first reassessment after having attended the gas course 5 years ago. The process went quickly and smoothly and the assessors were a great help. Highly recommend!!',
    customer: 'Jordano Bosco',
    date: '23 August 2023'
  },
  {
    title: 'First Aid Courses',
    text: 'We had a few of our staff members go on the First Aid at Work and the Emergency First Aid course, all of which said how the courses were informative and engaging. Lauren was really helpful through the booking process too, thank you!!',
    customer: 'Megan',
    date: '7 Jun 2023'
  },
  {
    title: 'Boiler Fault Finding & Repair Course',
    text: 'Very experienced trainer able to deliver years of experience in an easy to learn way. Done their best to deliver 1 on 1 training. Enough theory to get started then loads of hands on training. Learned years worth of experience in days that can now be implemented on the job tomorrow. Worth every penny.',
    customer: 'Lee',
    date: '21 May 2023'
  },
  {
    title: 'Great experience at Emergency First Aid at Work',
    text: 'I recently did the Emergency First Aid at Work training delivered by Matt. It was a great course, Matt was very knowledgeable, friendly and approachable and the course was informative and enjoyable. I left feeling confident to be a First Aider at work.',
    customer: 'Ishana',
    date: '12 May 2023'
  },
  {
    title: 'Paediatric first aid training',
    text: 'I had my paediatric first aid training with Allan king. I thought the experience was excellent and very helpful. Allan couldn’t have been more helpful with any questions and managed to explain everything perfectly. Thank you again',
    customer: 'Sophie',
    date: '17 Jan 2023'
  }
]

const coursesContent = [
  {
    title: 'GAS ENGINEER COURSES',
    list: [
      {
        img: `${git}/course1.jpg`,
        name: 'Gas Managed Learning Programme – Full Time',
        price: '',
        description:
          '29 Week Central Heating Training Programme for New Entrants Into the Domestic Heating Industry. Includes Gas Boilers, Cookers, Fires & Air Source Heat Pumps.',
        learn_link: 'https://www.skillstg.co.uk/courses/gas-managed-learning-programme/full-time/',
        labels: ['Guaranteed work placements', 'The course is accredited by LCL Awards']
      },
      {
        img: `${git}/course2.jpg`,
        name: 'Domestic ACS Package (Refresher) – CCN1 &Appliances',
        price: '£400-650',
        description:
          '29 Week Central Heating Training Programme for New Entrants Into the Domestic Heating Industry. Includes Gas Boilers, Cookers, Fires & Air Source Heat Pumps.',
        learn_link: 'https://www.skillstg.co.uk/courses/domestic-acs-package-refresher-ccn1-appliances/',
        book_link:
          'https://booking.skillstg.co.uk/course/DOM-PAK-REA?_gl=1*yk0fze*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NjQxOTg4NC4xMi4xLjE2OTY0MTk5NDYuNTguMC4w',
        labels: ['LCL awards certificate in (CCN1) is provided']
      }
    ],
    links: [
      {
        name: 'View all New Entrant Gas Engineer Courses',
        link: 'https://www.skillstg.co.uk/category/new-entrant-gas-engineer-courses/'
      },
      {
        name: 'View all Commercial Gas Courses',
        link: 'https://www.skillstg.co.uk/category/commercial-gas/'
      },
      {
        name: 'View all Domestic Gas Courses',
        link: 'https://www.skillstg.co.uk/category/domestic-gas/'
      }
    ]
  },
  {
    title: 'FIRST AID COURSES',
    list: [
      {
        img: `${git}/course3.jpg`,
        name: 'First Aid at Work Course',
        price: '£160',
        description:
          'Our blended first aid at work course is completed over 3 days with 1 day e-learning and 2 days in the classroom. Suitable for high-risk workplaces. Includes CPR & defibrillator training. Students will be issued an FAIB accredited first aid certificate valid for 3 years.',
        learn_link: 'https://www.skillstg.co.uk/courses/first-aid-at-work-course/',
        book_link:
          'https://booking.skillstg.co.uk/course/BFAW?_gl=1*21zki9*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODg5MzMuMjkuMC4w',
        labels: ['First aid at work certificate is provided']
      },
      {
        img: `${git}/course4.jpg`,
        name: '1-Day Emergency First Aid at Work Course (EFAW)',
        price: '£79',
        description:
          'Suitable for low-risk workplaces such as offices, shops, and libraries. Also suitable for entry requirements for SIA. Includes CPR & defibrillator training. Students will be issued an FAIB accredited first aid certificate valid for 3 years.',
        learn_link: 'https://www.skillstg.co.uk/courses/one-day-emergency-first-aid-at-work-course/',
        book_link:
          'https://booking.skillstg.co.uk/course/EFW?_gl=1*1xhx1rt*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODg4NTguMjguMC4w'
      },
      {
        img: `${git}/course5.jpg`,
        name: 'Paediatric First Aid Course (12 Hour) Level 3',
        price: '£85',
        description:
          'This blended learning course has been designed with EYFS compliance in mind and meets the requirements of OFSTED & CSSIW. This paediatric training is aimed at enabling EPA (End Point Assessment) for Early Years Educators and EYFS criteria. Suitable for those working in a Nursery in England or Wales.',
        learn_link: 'https://www.skillstg.co.uk/courses/paediatric-first-aid-course/',
        book_link:
          'https://booking.skillstg.co.uk/course/BPFA?_gl=1*1pcxr1f*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODg5NjguNTYuMC4w',
        labels: ['First aid at work certificate is provided']
      },
      {
        img: `${git}/course6.jpg`,
        name: 'On Site First Aid Training Nationwide',
        price: '£495',
        description:
          'First aid training delivered on-site at your own workplace or venue, nationwide, for a fixed daily rate of £495.',
        learn_link: 'https://www.skillstg.co.uk/courses/on-site-first-aid-training/',
        labels: ['First aid at work certificate is provided']
      }
    ],
    links: [
      {
        name: 'View all Workplace First Aid Courses',
        link: 'https://www.skillstg.co.uk/category/first-aid-training-courses/workplace-first-aid/'
      },
      {
        name: 'View all First Aid Training Courses',
        link: 'https://www.skillstg.co.uk/category/first-aid-training-courses/'
      }
    ]
  },
  {
    title: 'ELECTRICIAN COURSES',
    list: [
      {
        img: `${git}/course7.jpg`,
        name: 'PAT Testing Course (1 Day) – Electrical Safety Training',
        price: '£195',
        description:
          'Our 1-Day PAT Testing Course is ideal for those looking to become a qualified and competent PAT Tester. The one-day course covers all the skills and knowledge required to safely test, inspect and maintain portable electrical appliances.',
        learn_link: 'https://www.skillstg.co.uk/courses/pat-testing-course-1-day/',
        book_link:
          'https://booking.skillstg.co.uk/course/PAT?_gl=1*1q7klpg*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODkxMjIuMjguMC4w',
        labels: ['PAT test certificate is provided']
      },
      {
        img: `${git}/course8.jpg`,
        name: 'Level 3 18th Edition Course & Training (C&G 2382-22) BS 7671',
        price: '£395',
        description:
          'Nationwide - Level 3 18th Edition Wiring Regulations BS7671:2018+A2:2022 3-Day or 1-Day Update Training & Exam.',
        learn_link: 'https://www.skillstg.co.uk/courses/18th-edition-courses/',
        book_link:
          'https://booking.skillstg.co.uk/course/18TH-3D?_gl=1*or3yyq*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODkxNTYuNTUuMC4w',
        labels: ['The 18th edition сertificate is provided']
      },
      {
        img: `${git}/course9.jpg`,
        name: 'Inspection & Testing Course (Periodic & Initial) 2391 Course',
        price: '£845',
        description:
          'LCL Awards QCF – Level 3 Award in the Initial Verification, Periodic Inspection Testing, Condition Reporting and Certification of Electrical Installations (City & Guilds 2391-52 equivalent) JIB/SJIB recognised',
        learn_link: 'https://www.skillstg.co.uk/courses/inspection-and-testing-course/',
        book_link:
          'https://booking.skillstg.co.uk/course/IT?_gl=1*c6pvne*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODkxOTMuMTguMC4w'
      }
    ],
    links: [
      {
        name: 'View all Electrician Courses',
        link: 'https://www.skillstg.co.uk/category/electrician-training-courses/'
      }
    ]
  },
  {
    title: 'PLUMBING COURSES',
    list: [
      {
        img: `${git}/course10.jpg`,
        name: 'Legionella Risk Assessment & Treatment Course',
        price: '£200',
        description:
          "Skills Training Group's course will equip you with all the necessary skills to carry out legionella risk assessments and produce a professional Legionella report.",
        learn_link: 'https://www.skillstg.co.uk/courses/legionella-risk-assessment-treatment-course/',
        book_link:
          'https://booking.skillstg.co.uk/course/PLB-APP-LEG?_gl=1*zra3su*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODkzMTUuMjcuMC4w'
      }
    ],
    links: [
      {
        name: 'View all Plumbing Courses',
        link: 'https://www.skillstg.co.uk/category/plumbing-courses/'
      }
    ]
  },
  {
    title: 'RENEWABLE COURSES',
    list: [
      {
        img: `${git}/course11.jpg`,
        name: 'Air Source Heat Pump Course (ASHP)',
        price: '£595',
        description:
          'The air source heat pump (ASHP) qualification is for learners looking to expand their knowledge in the Installation and Maintenance of Air Source Heat Pumps Systems (Non-refrigerant Circuits). This qualification could be used by operatives or individuals looking to join the Microgeneration Certification Scheme (MCS).',
        learn_link: 'https://www.skillstg.co.uk/courses/air-source-heat-pump-course/',
        book_link: 'https://skillstg.my.site.com/Candidates/s/bookingavailibility?pcode=ASHP',
        labels: ['PAT test certificate is provided']
      },
      {
        img: `${git}/course12.jpg`,
        name: 'Solar PV Installation Course With Battery Storage (5 Days)',
        price: '£850',
        description:
          'Our Solar PV Installation Course with battery storage is completed over 5 days. This qualification is specifically designed to equip individuals with the skills and knowledge they need to install, commission, fault find and maintain photovoltaic systems to the highest standards, in line with industry regulations and accepted codes of practice.',
        learn_link: 'https://www.skillstg.co.uk/courses/solar-pv-installation-course/',
        book_link:
          'https://booking.skillstg.co.uk/course/SOLARPVEESS?_gl=1*1665zm6*_ga*MTAyNzI4ODkxMy4xNjk1NzIzNDAy*_ga_WN54VK015R*MTY5NzE4ODE5OC4xNi4xLjE2OTcxODk0NzkuNDYuMC4w'
      }
    ],
    links: [
      {
        name: 'View all Renewable Courses',
        link: 'https://www.skillstg.co.uk/category/renewable-courses/'
      }
    ]
  },
  {
    title: 'METERING COURSES',
    link: 'https://www.skillstg.co.uk/category/metering/'
  },
  {
    title: 'IOSH MANAGING SAFELY COURSES',
    link: 'https://www.skillstg.co.uk/category/iosh-managing-safely-courses/'
  },
  {
    title: 'OIL COURSES',
    link: 'https://www.skillstg.co.uk/category/oil/'
  },
  {
    title: 'LPG COURSES',
    link: 'https://www.skillstg.co.uk/category/lpg/'
  }
]

// check device type

const device = window.innerWidth < 768 ? 'mobile' : 'desktop'

class NewHomePage {
  constructor(d) {
    this.device = d
    this.init()
  }

  init() {
    this.globalChange()
    this.mainScreen()
    this.allCourses()
    this.trustpilotReviews()
    this.mostSubscribed()
    this.lastBlock()
    this.setVisibility()
  }

  globalChange() {
    const style = /* html */ `
      <style>
        .top-courses__section {
          box-shadow: none;
        }
        .course-categories-simple {
          display: none;
        }
        h2 {
          font-size: 32px;
          line-height: 40px;
          font-weight: 800;
        }
        header.home {
          margin-bottom: 30px;
        }
        .image-text {
          margin-bottom: 32px;
        }
        .image-text ul {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: space-between;
          margin-top: 32px;
        }
        .image-text ul li {
          width: calc(50% - 8px);
        }
        .image-text ul li a {
          font-size: 14px;
          font-weight: 800;
          text-decoration: underline;
        }
        .image-text ul li::before {
          top: 50%;
          transform: translateY(-50%);
        }
        .image-text .crs_links {
          margin-top: 32px;
          border-radius: 4px;
          background: #EAF5FE;
          padding: 16px;
          width: 100%;
        }
        .image-text .crs_links p {
          font-size: 16px;
          line-height: 24px;
          color: #49718C;
        }
        .image-text .crs_links p a {
          color: #0D3B5B;
          text-decoration: underline;
        }
        .cta-simple,
        .cta-simple+div {
          display: none;
        }
        .facilities {
          margin: 70px 0 50px;
        }
        .facilities h3 {
          font-size: 16px;
        }
        .facilities p {
          font-size: 14px;
          line-height: 22px;
        }
        .facilities h2+p {
          font-size: 16px;
        }
        .endorsements h2,
        .testimonial h2  {
          font-size: 36px;
        }
        .three-col-icons .three-col-icons__block {
          flex-wrap: wrap;
          align-items: start;
          gap: 10px;
          background: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
          margin-bottom: 0;
        }
        .three-col-icons .three-col-icons__block p {
          width: 100%;
          margin-top: 0;
        }
        .three-col-icons img {
          margin-bottom: 0;
        }
        .three-col-icons h3 {
          font-size: 18px;
          line-height: 26px;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .three-col-icons__grid {
          margin-top: 20px;
          margin-left: 0;
          margin-right: 0;
          gap: 20px;
        }
        @media (max-width: 768px) {
          
          .three-col-icons {
            margin-bottom: 30px;
            background-color: #EAF5FE;
            padding: 30px 0;
          }
          .three-col-icons h2 {
            font-size: 29px;
          }
          .endorsements {
            margin-top: 30px;
          }
          .endorsements h2 {
            font-size: 30px;
            line-height: 38px;
          }
          .testimonial {
            margin: 85px 0 30px;
          }
          .testimonial h2 {
            font-size: 20px;
            line-height: 28px;
          }
          .testimonial .container::before {
            top: -78px;
            left: 15px;
          }
          .testimonial img {
            margin-top: 24px;
          }
          .image-text__image {
            width: calc(100% + 50px);
            margin: 0 -25px;
            box-shadow: none;
            overflow: visible;
          }
          .course-stats {
            width: 95%;
            padding-left: 15px;
            padding-right: 15px;
            margin: 30px auto;
          }
          .course-stats h6 {
            font-size: 14px;
            line-height: 24px;
            font-weight: 800;
          }
        }
        @media (min-width: 769px) {
          .facilities p {
            font-size: 16px;
            line-height: 24px;
          }
          .facilities h3 {
            font-size: 20px;
          }
          header.home {
            margin-bottom: 90px;
          }
          .image-text {
            margin-bottom: 120px;
          }
          .image-text ul li {
            width: calc((100% - 32px)/3);
          }
          .image-text__col:first-of-type {
            align-self: stretch;
            padding: 0 0 0 60px;
          }
          .image-text__images,
          .image-text__image {
            height: 100%;
            box-shadow: none;
          }
          .course-stats {
            max-width: 1400px;
            margin: 120px auto;
            display: flex;
            justify-content: center;
          }
          .three-col-icons {
            background: linear-gradient(90deg, #EAF5FE 66.39%, rgba(234, 245, 254, 0.00) 103.85%), url(${git}/why_bg.png) top right no-repeat;
            padding: 60px 0;
          }
          .three-col-icons h2 {
            font-size: 36px;
          }
          .three-col-icons__grid {
            gap: 24px;
            margin-bottom: 10px;
          }
          .three-col-icons__block {
            width: calc((100% - 48px) / 3);
          }
          .three-col-icons__grid::before,
          .three-col-icons__grid::after {
            display: none;
          }
        }
      </style>
    `
    $el('body').insertAdjacentHTML('afterbegin', style)

    // change blocks position

    $el('.testimonial').after($el('.top-courses'))
    $el('.testimonial').before($el('.endorsements'))
    $el('.course-categories-simple').after($el('.three-col-icons'))
    $el('.three-col-icons').after($el('.course-stats'))
    $$el('.three-col-icons__block h3').forEach((el, i) => {
      el.insertAdjacentElement('afterbegin', $$el('.three-col-icons__block img')[i])
    })
  }

  mainScreen() {
    const style = /* html */ `
      <style>
        header.home .background__image,
        header.home form,
        header.home .banner .btn-prefix,
        header.home .clearfix,
        header.home [name="#contact-form"] {
          display: none;
        }
        header.home h1+p {
          margin: 10px 0 24px;
          font-weight: 400;
        }
        header.home h1+p span {
          text-decoration: underline;
        }
        .crs_main1 {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 14px;
        }
        .crs_main1 a {
          width: 100%;
          text-transform: uppercase;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          background: #09983F;
          text-align: center;
        }
        .crs_main1 a:last-of-type {
          background: linear-gradient(180deg, #1C4F6E 0%, #1C4F6E 100%);
          border: 1px solid #49718C;
        }
        .crs_main1 p {
          text-transform: uppercase;
          color: #fff;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          height: 48px;
          column-gap: 8px;
          margin-top: 0 !important;
          cursor: pointer;
        }
        .crs_main1 p img {
          width: 16px;
          height: 16px;
          margin: 0;
        }
        .crs_main1 p span {
          text-decoration: underline;
        }
        .crs_reviews {
          display: flex;
          column-gap: 12px;
          margin-bottom: 24px;
          margin-top: 24px;
        }
        .crs_reviews > div {
          width: calc(50% - 6px);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          row-gap: 8px;
          padding: 10px 13px;
          border-radius: 4px;
          background: linear-gradient(180deg, #1C4F6E 0%, rgba(28, 79, 110, 0.30) 100%);
        }
        .crs_reviews > div img:first-of-type {
          height: 26px;
          margin: 0;
          max-width: 100%;
        }
        .crs_reviews > div img:last-of-type {
          height: 16px;
          margin: 0;
          max-width: 100%;
        }
        .crs_reviews > div p {
          font-size: 12px;
          color: #fff;
          margin-top: 0;
        }
        .crs_accredit>p {
          font-size: 20px;
          color: #fff;
          font-weight: 700;
          margin-top: 0;
          margin-bottom: 18px;
          line-height: 28px;
        }
        .crs_accredit>div {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 16px;
        }

        .crs_accredit>div img {
          margin: 0;
          max-width: 100%;
        }

        .crs_accredit>div img{
          height: 40px;
          width: auto;
        }
        .crs_main1+form {
          float: unset;
          margin: 14px 0 24px !important;
          max-width: 100% !important;
        }
        header .banner input.search {
          border-radius: 4px !important;
          font-size: 16px;
          height: 48px !important;
        }
        header .banner input.search::placeholder {
          font-size: 16px;
        }
        header.home .banner .search-btn {
          border-radius: 4px;
          width: 40px;
          height: 40px;
          top: 4px;
          right: 4px;
        }
        @media (min-width: 769px) {
          header .background__overlay {
            transform: translateX(-50%) rotate(180deg);
            top: 0;
            left: 50%;
          }
          header.home .banner {
            width: 45%;
          }
          header.home h1+p {
            margin: 14px 0 30px;
          }
          .crs_main1 a {
            width: calc(50% - 7px);
          }
          .crs_accredit {
            max-width: 1400px;
            margin: 0 auto 80px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .crs_accredit>p {
            color: #0D3B5B;
            font-size: 16px;
            line-height: 24px;
          }
          .crs_accredit>div img {
            height: 58px;
            text-transform: uppercase;
            font-weight: 800;
          }
          
        }
        @media (max-width: 1300px) {
            header.home h1 {
              font-size: 50px;
              line-height: 58px;
            }
            header.home {
              padding: 150px 0 42px;
            }
            .main_img {
              position: absolute;
              right: 15px;
              top: 0px;
              width: 48%;
              max-width: 690px;
            }
          }
          @media (max-width: 1250px) {
            .main_img {
              position: absolute;
              right: 15px;
              top: -55px;
              width: 48%;
              max-width: 690px;
            }
          }
          @media (max-width: 990px) {
            .main_img {
              position: absolute;
              right: 15px;
              top: -95px;
              width: 48%;
              max-width: 690px;
            }
          }
          @media (max-width: 768px) {
          header.home h1 {
            font-size: 30px;
            line-height: 38px;
          }
          header.home {
            padding: 87px 0 30px;
          }
          .main_img {
            display: none;
          }
        }
          @media (min-width: 1300px) {
            header.home h1 {
              font-size: 66px;
              line-height: 74px;
            }
            header.home {
              padding: 176px 0 42px;
            }
            .main_img {
              position: absolute;
              right: 15px;
              top: -80px;
              width: 48%;
              max-width: 690px;
            }
          }
      </style>
    `
    const block1 = /* html */ `
      <div class="crs_main1">
        <a href="#all_courses">EXPLORE ALL COURSES</a>
        <a href="#first_aid">EXPLORE FIRST AID COURSES</a>
        <p><img src="https://www.skillstg.co.uk/wp-content/themes/skills-training-group/assets/images/search-white.svg" alt="search"><span>SEARCH FOR A COURSE</span></p>
      </div>
    `
    const block2 = /* html */ `
      <div class="crs_main2">
        <div class="crs_reviews">
          <div class="crs_google">
            <img src="${git}/google_reviews.svg" alt="google_reviews">
            <img src="${git}/google_stars.svg" alt="stars">
            <p>5.0 rating | 231 review</p>
          </div>
          <div class="crs_trustpilot">
            <img src="${git}/trustpilot_reviews.svg" alt="trustpilot_reviews">
            <img src="${git}/trustpilot_stars.svg" alt="stars">
            <p>5.0 rating | 446 reviews</p>
          </div>
        </div>
        <div class="crs_accredit">
          <p>Our accreditations</p>
          <div>
            <img src="https://www.skillstg.co.uk/wp-content/uploads/2020/12/igem.png" alt="logo1">
            <img src="https://www.skillstg.co.uk/wp-content/uploads/2020/12/oftec.png" alt="logo2">
            <img src="https://www.skillstg.co.uk/wp-content/uploads/2020/12/gas-safe-register.png" alt="logo3">
            <img src="https://www.skillstg.co.uk/wp-content/uploads/2020/12/city-guilds.png" alt="logo4">
            <img src="${git}/logo1.png" alt="logo5">
            <img src="${git}/logo2.png" alt="logo6">
            <img src="https://www.skillstg.co.uk/wp-content/uploads/2020/02/faib-logo-130x65.jpg" alt="logo7">
            <img src="${git}/logo3.png" alt="logo8">
          </div>
        </div>
      </div>
    `
    $el('header form').insertAdjacentHTML('beforebegin', block1)
    $el('header form').insertAdjacentHTML('afterend', block2)
    $el('header h1').innerHTML = 'Boost your skills.<br>Boost your career.'
    $el('header h1+p').innerHTML =
      'We provide <span>more than 100 courses</span> spanning heating, electrical, plumbing, and first aid disciplines.'
    $el('header').insertAdjacentHTML('afterbegin', style)
    $el('header .banner input.search').placeholder = 'Search'
    console.log(this.device)
    if (this.device === 'desktop') {
      $el('header').after($el('.crs_accredit'))
      $el('section.banner').insertAdjacentHTML(
        'afterend',
        /* html */ `<div class="main_img"><img src="${git}/main_bg_d.png" alt="mainbg"></div>`
      )
    }
    $el('.crs_main1 p').addEventListener('click', function () {
      this.style.display = 'none'
      $el('.search-form').style.display = 'block'
      pushDataLayer('exp_imp_home_first_but_seacou', 'Search for a courses', 'Button', 'First screen')
    })
    $el('.search-form input').addEventListener('focus', function () {
      pushDataLayer('exp_imp_home_first_inp_sear', 'Search', 'Input', 'First screen')
    })
    $el('.search-form button').addEventListener('click', function () {
      pushDataLayer('exp_imp_home_first_but_sear', 'Search', 'Button', 'First screen')
    })
  }

  allCourses() {
    let tapLine = ''
    coursesContent.forEach((item, i) => {
      tapLine += /* html */ `
        <p ${i === 0 ? 'class="active"' : ''}>${item.title}</p>
      `
    })

    let courseTypeList = ''
    coursesContent.forEach((item, i) => {
      let courseList = ''
      item.list?.forEach((course) => {
        let labels = ''
        if (course.labels) {
          course.labels.forEach((label) => {
            const spanClass = label.includes('by LCL Awards') ? 'green' : ''
            const img = label.includes('by LCL Awards')
              ? `${git}/confirmed.svg`
              : label.includes('Guaranteed work')
              ? `${git}/security-user.svg`
              : `${git}/provided.svg`
            labels += /* html */ `
              <span class="${spanClass}"><img src="${img}" alt="icon">${label}</span>
            `
          })
        }
        courseList += /* html */ `
          <div class="course_item">
            <div class="img">
              <img src="${course.img}" alt="course">
              <div class="labels">
                ${labels}
              </div>
            </div>
            <div class="name">
              <h3>${course.name}</h3>
              <p>${course.price}</p>
            </div>
            <p>${course.description}</p>
            <div class="btns">
              <a href="${course.learn_link}" class="learn_more">Learn more</a>
              ${course.book_link ? `<a href="${course.book_link}" class="book_now">Book now</a>` : ''}
            </div>
          </div>
        `
      })
      courseTypeList += /* html */ `
        <div class="course_type${i === 0 ? ' active' : ''}" ${i === 1 ? 'id="first_aid"' : ''}>
          <div class="course_item_title">
            <h3>${item.title}</h3>
            ${!item.list ? /* html */ `<a href="${item.link}">View all</a>` : ''}
          </div>
          ${
            item.list
              ? /* html */ `
            <div class="course_item_content">
              ${
                i === 0
                  ? /* html */ `
                <div class="work">
                  <p>
                    <span><img src="${git}/bag.svg" alt="bag">Guaranteed work placements</span>
                    We guarantee a work placement with a Gas Safe Registered Employer on our Gas Managed Learning Programmes.
                  </p>
                </div>
              `
                  : ''
              }
              <div class="courses_items">
                ${courseList}
              </div>
              <div class="add_links">
                ${
                  item.links
                    ? /* html */ `
                  ${item.links
                    .map(
                      (link) => /* html */ `
                        <a href="${link.link}">${link.name}</a>
                      `
                    )
                    .join('')}
                `
                    : ''
                }
              </div>
            </div>
            `
              : ''
          }
        </div>
      `
    })

    const block = /* html */ `
      <div class="crs_all_courses" id="all_courses">
        <style>
          .crs_all_courses {
            width: 95%;
            margin: 0 auto;
            max-width: 1400px;
            padding-left: 15px;
            padding-right: 15px;
          }
          .crs_all_courses h2 {
            font-size: 30px;
            line-height: 38px;
            font-weight: 800;
            margin-bottom: 16px;
            text-align: left;
          }
          .course_tap_line {
            width: 100%;
            overflow-x: auto;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            gap: 8px;
            margin-bottom: 22px;
          }
          .course_tap_line::-webkit-scrollbar {
            height: 0;
          }
          .course_tap_line::-webkit-scrollbar-track {
            height: 0;
          }
          .course_tap_line p {
            white-space: nowrap;
            padding: 3px 7px;
            font-size: 14px;
            line-height: 22px;
            color: #49718C;
            border-radius: 4px;
            border: 1px solid #DBE8F4;
            background: #F8F8F8;
            font-weight: 700;
            text-transform: capitalize;
          }
          .course_tap_line p.active {
            background: #fff;
            border: 1px solid #0D3B5B;
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
          }
          .course_list {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
          }
          .course_list .course_type {
            width: 100%;
          }
          .course_list .course_type:nth-of-type(n+6) a {
            color: #fff;
            display: inline-flex;
            padding-left: 20px;
            border-left: 1px solid #49718C;
            white-space: nowrap;
            padding-right: 20px;
            text-decoration: underline;
          }
          .course_item_title {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 4px;
            background: #0D3B5B;
            box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.15);
            padding: 12px 16px;
            column-gap: 8px;
            position: relative;
          }
          .course_item_title h3 {
            color: #fff;
            font-weight: 800;
            text-transform: uppercase;
            font-size: 16px;
            line-height: 24px;
            margin: 0;
          }
          .course_list .course_type .course_item_title::after {
            position: absolute;
            content: '';
            width: 12px;
            height: 8px;
            background: url(${git}/chevron.svg) no-repeat center center;
            background-size: contain;
            right: 16px;
            top: 50%;
            transform: translateY(-50%);
            transition: transform 0.3s ease;
          }
          .course_type.active .course_item_title {
            border-radius: 4px 4px 0 0;
            box-shadow: none;
          }
          .course_type.active {
            box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
          }
          .course_list .course_type.active .course_item_title::after {
            transform: translateY(-50%) rotate(180deg);
          }
          .course_list .course_type:nth-of-type(n+6) .course_item_title::after {
            transform: translateY(-50%) rotate(-90deg);
          }
          .course_item_content {
            display: none;
            border-radius: 0 0 4px 4px;
            background: #FFF;
            padding: 20px 14px;
          }
          .course_type.active .course_item_content {
            display: block;
          }
          .course_item_content .work {
            width: calc(100% + 28px);
            margin: -20px 0 20px -14px;
            padding: 14px;
            background-color: #EAF5FE;
          }
          .course_item_content .work p {
            color: #49718C;
            font-size: 16px;
            line-height: 24px;
          }
          .course_item_content .work p span {
            color: #0D3B5B;
            font-weight: 800;
            display: flex;
            align-items: center;
            column-gap: 8px;
            margin-bottom: 12px;
          }
          .course_item_content .work p span img {
            width: 20px;
            height: 20px;
          }
          .courses_items {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
          }
          .course_item {
            width: 100%;
            padding-bottom: 20px;
            border-bottom: 1px solid #DBE8F4;
          }
          .course_item .img {
            width: 100%;
            aspect-ratio: 2/1;
            border-radius: 10px;
            border: 1px solid #DBE8F4;
            overflow: hidden;
            position: relative;
          }
          .course_item .img img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
          .course_item .img .labels {
            position: absolute;
            bottom: 6px;
            width: calc(100% - 12px);
            left: 6px;
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
          }
          .course_item .img .labels span {
            display: flex;
            align-items: center;
            column-gap: 4px;
            font-size: 14px;
            line-height: 22px;
            color: #fff;
            font-weight: 600;
            padding: 2px 4px;
            border-radius: 4px;
            background-color: #49718C;
          }
          .course_item .img span.green {
            background-color: #09983F;
          }
          .course_item .img span img {
            height: 18px;
            width: 18px;
          }
          .course_item .name {
            display: flex;
            justify-content: space-between;
            align-items: start;
            column-gap: 8px;
            margin: 12px 0 8px;
          }
          .course_item .name h3,
          .course_item .name p {
            font-size: 16px;
            line-height: 24px;
            font-weight: 800;
            color: #0D3B5B;
            margin: 0;
          }
          .course_item .name p {
            white-space: nowrap;
          }
          .course_item .name+p {
            font-size: 14px;
            line-height: 22px;
            color: #49718C;
            margin-bottom: 12px;
          }
          .course_item .btns {
            display: flex;
            column-gap: 12px;
          }
          .course_item .btns a {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 12px;
            font-size: 16px;
            line-height: 24px;
            font-weight: 600;
            border-radius: 4px;
          }
          .course_item .btns .learn_more {
            color: #49718C;
            border: 1px solid #49718C;
            width: 100%;
          }
          .course_item .btns .book_now {
            flex-shrink: 0;
            width: calc(50% - 6px);
            color: #fff;
            background-color: #09983F;
          }
          .add_links {
            display: flex;
            flex-wrap: wrap;
            gap: 16px;
            margin-top: 20px;
          }
          .add_links a {
            display: flex;
            width: 100%;
            font-size: 14px;
            line-height: 22px;
            color: #0D3B5B;
            text-decoration: underline;
            padding-right: 15px;
            position: relative;
            font-weight: 600;
          }
          .add_links a::after {
            position: absolute;
            content: '';
            width: 10px;
            height: 10px;
            background: url(${git}/arrow.svg) no-repeat center center;
            background-size: contain;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
          }
          .desktop_content {
            display: none;
          }
          @media (min-width: 769px) {
            .desktop_content .course_item .name+p {
              max-height: calc(22px * 4);
              display: -webkit-box;
              -webkit-line-clamp: 4;
              overflow: hidden;
              text-overflow: ellipsis;
              -webkit-box-orient: vertical;
            }
            .crs_all_courses h2 {
              font-size: 36px;
              line-height: 44px;
              margin-bottom: 40px;
            }
            .course_tap_line {
              display: none;
            }
            .courses_content {
              display: flex;
              column-gap: 30px;
              align-items: start;
            }
            .course_list {
              width: 435px;
            }
            .desktop_content {
              display: block;
              width: calc(100% - 465px);
            }
            .course_type.active .course_item_content {
              display: none;
            }
            .course_list .course_type .course_item_title {
              transition: all 0.3s ease;
              width: calc(100% - 30px);
              border-radius: 4px;
              cursor: pointer;
            }
            .course_list .course_type:nth-of-type(n+6) .course_item_title {
              cursor: default;
            }
            .course_list .course_type .course_item_title::after {
              transition: unset;
              transform: translateY(-50%) rotate(-90deg);
            }
            .course_list .course_type.active .course_item_title::after {
              height: 12px;
              width: 8px;
              background: url(${git}/chevron_blue.svg) no-repeat center center;
              background-size: contain;
              transform: translateY(-50%) rotate(0);
            }
            .course_type.active .course_item_title {
              width: 100%;
              background-color: #fff;
              border: 1px solid #0D3B5B;
            }
            .course_type.active .course_item_title h3 {
              color: #0D3B5B;
            }
            .desktop_content .course_item_content {
              display: block;
              border-radius: 10px;
              background: #FFF;
              box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
              padding: 20px;
            }
            .desktop_content .course_item_content .work {
              width: calc(100% + 40px);
              margin: -20px 0 20px -20px;
              border-radius: 10px 10px 0 0;
            }
            .desktop_content .course_item_content .courses_items {
              align-items: stretch;
            }
            .desktop_content .course_item_content .course_item {
              border-bottom: none;
              width: calc(50% - 10px);
              border: 1px solid #DBE8F4;
              border-radius: 10px;
              display: flex;
              flex-direction: column;
            }
            .desktop_content .course_item>*:not(.img) {
              padding: 0 20px;
            }
            .desktop_content .course_item .btns {
              margin-top: auto;
            }
            .desktop_content .course_item .img {
              border-radius: 10px 10px 0 0;
              border: none;
            }
            .desktop_content .add_links {
              gap: 20px;
            }
            .desktop_content .add_links a {
              width: auto;
            }
            .desktop_content .add_links a:not(:last-child) {
              padding-right: 35px;
              border-right: 1px solid #DBE8F4;
            }
            .desktop_content .add_links a:not(:last-child)::after {
              right: 20px;
            }
            .desktop_content .course_item .img .labels span {
              padding: 4px 6px;
            }
          }
        </style>
        <h2>Explore all courses</h2>
        <div class="course_tap_line">
          ${tapLine}
        </div>
        <div class="courses_content">
          <div class="course_list">
            ${courseTypeList}
          </div>
          <div class="desktop_content">
          </div>
        </div>
      </div>
    `

    $el('.course-categories-simple').insertAdjacentHTML('afterend', block)
    $$el('.course_item_title').forEach((item, i) => {
      item.addEventListener('click', () => {
        if (!item.querySelector('a')) {
          if (window.innerWidth < 769) {
            if (item.parentElement.classList.contains('active')) {
              item.parentElement.classList.remove('active')
            } else {
              $$el('.course_type.active').forEach((item) => {
                item.classList.remove('active')
              })
              item.parentElement.classList.add('active')
              $$el('.course_tap_line p').forEach((item, i) => {
                item.classList.remove('active')
              })
              $el(`.course_tap_line p:nth-of-type(${i + 1})`).classList.add('active')
              $el('.course_tap_line').scrollLeft = $el(`.course_tap_line p:nth-of-type(${i + 1})`).offsetLeft - 24
            }
            scrollToElement('.course_type.active')
          } else {
            $$el('.course_type.active').forEach((item) => {
              item.classList.remove('active')
            })
            item.parentElement.classList.add('active')
            drawContentToDesktop()
          }
          pushDataLayer(
            'exp_imp_home_expl_acc_cours',
            item.querySelector('h3').innerText,
            'Accordion',
            'Explore all courses'
          )
        }
      })
    })
    function drawContentToDesktop() {
      const content = $el('.course_type.active .course_item_content').cloneNode(true)
      $el('.desktop_content').innerHTML = ''
      $el('.desktop_content').append(content)
    }
    drawContentToDesktop()
    $el('.crs_main1 a:last-of-type').addEventListener('click', (e) => {
      e.preventDefault()
      $$el('.course_type.active').forEach((item) => {
        item.classList.remove('active')
      })
      $el('.course_type:nth-of-type(2)').classList.add('active')
      drawContentToDesktop()
      scrollToElement('.course_type:nth-of-type(2)')
      pushDataLayer('exp_imp_home_first_but_aid', 'Explore first aid courses', 'Button', 'First screen')
    })
    $el('.crs_main1 a:first-of-type').addEventListener('click', (e) => {
      e.preventDefault()
      scrollToElement('#all_courses')
      pushDataLayer('exp_imp_home_first_but_exp', 'Explore all courses', 'Button', 'First screen')
    })
    $$el('.course_tap_line p').forEach((item, i) => {
      item.addEventListener('click', () => {
        $$el('.course_tap_line p').forEach((y) => {
          y.classList.remove('active')
        })
        item.classList.add('active')
        $$el('.course_type').forEach((y) => {
          y.classList.remove('active')
        })
        $el(`.course_type:nth-of-type(${i + 1})`).classList.add('active')
        scrollToElement('.course_type.active')
        pushDataLayer('exp_imp_home_expl_but_cours', item.innerText, 'Button', 'Explore all courses Header')
      })
    })

    $$el('.course_item .learn_more').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer(
          'exp_imp_home_explac_but_cours',
          `Learn more - ${item.closest('.course_item').querySelector('.name h3').innerText}`,
          'Button',
          'Explore all courses'
        )
      })
    })

    $$el('.course_item .book_now').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer(
          'exp_imp_home_explac_but_bookin',
          `Book now - ${item.closest('.course_item').querySelector('.name h3').innerText}`,
          'Button',
          'Explore all courses'
        )
      })
    })

    $$el('.add_links a').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer('exp_imp_home_explac_inp_categ', `View all - ${item.innerText}`, 'Link', 'Explore all courses')
      })
    })

    $$el('.course_item_title a').forEach((item) => {
      item.addEventListener('click', () => {
        pushDataLayer(
          'exp_imp_home_explund_but_cours',
          `View all - ${item.closest('.course_item_title').querySelector('h3').innerText}`,
          'Button',
          'Explore all courses'
        )
      })
    })
  }

  trustpilotReviews() {
    let reviewsList = ''
    tpReviews.forEach((item) => {
      reviewsList += /* html */ `
        <div class="crs_reviews_item">
          <h4>${item.title}</h4>
          <p>${item.text}</p>
          <p>${item.customer} | ${item.date}</p>
        </div>
      `
    })

    const block = /* html */ `
      <div class="crs_reviews_tp">
        <style>
          .slick-dots li {
            transition: all 0.3s ease;
          }
          .crs_reviews_tp {
            max-width: 1400px;
            margin: 0 auto;
            width: 100%;
            padding: 30px 0;
            background-color: #F8F8F8;
          }
          .crs_reviews_tp > p {
            padding: 0 20px;
            display: flex;
            align-items: center;
            column-gap: 8px;
            margin-bottom: 12px;
            font-size: 16px;
            color: #0D3B5B;
          }
          .crs_reviews_tp > p span {
            width: 1px;
            height: 20px;
            background-color: #DBE8F4;
            display: block;
          }
          .crs_reviews_tp h3 {
            padding: 0 20px;
            font-size: 20px;
            line-height: 28px;
            font-weight: 800;
            margin-bottom: 12px;
          }
          .crs_reviews_item {
            border-radius: 10px;
            border: 1px solid #DBE8F4;
            background: #FFF;
            padding: 16px;
            display: flex !important;
            flex-direction: column;
            gap: 6px;
          }
          .crs_reviews_item::-webkit-scrollbar {
            width: 5px;
          }
          .crs_reviews_item::-webkit-scrollbar-track {
            background-color: #FAFAFA;
            border-radius: 3px;
            width: 5px;
          }
          .crs_reviews_item::-webkit-scrollbar-thumb {
            border-radius: 3px;
            width: 5px;
            background: #DBE8F4;
          }
          .crs_reviews_item h4 {
            font-size: 16px;
            line-height: 24px;
            font-weight: 800;
            color: #0D3B5B;
          }
          .crs_reviews_item p:first-of-type {
            font-size: 16px;
            line-height: 24px;
            color: #49718C;
          }
          .crs_reviews_item p:last-of-type {
            font-size: 14px;
            line-height: 22px;
            color: #0D3B5B;
            font-weight: 800;
          }
          .crs_reviews_tp .slick-list {
            padding: 0;
          }
          .crs_reviews_tp .slick-slide {
            margin: 0 6px;
          }
          .crs_reviews_tp .slick-dots {
            margin-top: 20px;
          }
          .crs_reviews_tp .slick-dots li {
            background-color: #DBE8F4;
            border: none;
            height: 8px;
            width: 8px;
            transition: all 0.3s ease;
            position: absolute;
          }
          .crs_reviews_tp .slick-dots .slick-active{
            background-color: #09983F;
          }
          .crs_arrows {
            display: none;
          }
          .course-stats h3 {
            display: flex;
            align-items: center;
          }
          .course-stats h3 em {
            margin-top: 0;
          }
          @media (min-width: 769px) {
            .crs_reviews_tp {
              padding-left: 30px;
              padding-right: 30px;
              border-radius: 10px;
              border: 1px solid #DBE8F4;
              box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
              position: relative;
            }
            .crs_reviews_tp>p img {
              width: auto;
            }
            .crs_reviews_tp .slick-dots {
              height: 10px;
              width: 100%;  
              margin-top: 30px;
            }
            .crs_reviews_tp h3 {
              font-size: 24px;
              line-height: 1;
            }
            .crs_arrows {
              position: absolute;
              display: flex;
              align-items: center;
              right: 30px;
              bottom: 30px;
              column-gap: 30px;
            }
            .crs_reviews_item {
              height: 250px;
              overflow-y: auto;
            }
            .crs_arrows div {
              display: flex;
              justify-content: center;
              align-items: center;
              height: 48px;
              width: 48px;
              border-radius: 50%;
              border: 1px solid #DBE8F4;
              background:#FFF;
              box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
              cursor: pointer;
            }
            .crs_arrows div svg {
              fill: #0D3B5B;
            }
            .crs_arrows .slick-disabled svg {
              fill: #80858A;
            }
          }
        </style>
        <p>
          <img src="${git}/trustpilot_reviews2.svg" alt="trustpilot">
          <span></span>
          <img src="${git}/trustpilot_stars.svg" alt="stars">
          Excelent
        </p>
        <h3>More than 20,000 customers already trust us</h3>
        <div class="crs_reviews_slider">
          ${reviewsList}
        </div>
        <div class="crs_arrows">
          <div class="crs_prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5617 18.1533L14.582 16.133L8.44933 10.0003L14.582 3.86761L12.5617 1.8473L4.40872 10.0003L12.5617 18.1533Z"/>
            </svg>
          </div>
          <div class="crs_next">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43827 18.1533L5.41797 16.133L11.5507 10.0003L5.41797 3.86761L7.43827 1.8473L15.5913 10.0003L7.43827 18.1533Z"/>
            </svg>
          </div>
        </div>
      </div>
    `
    $el('.endorsements').insertAdjacentHTML('beforebegin', block)
    const checkSlick = setInterval(function () {
      if (typeof $('.crs_reviews_slider').slick == 'function') {
        clearInterval(checkSlick)
        $('.crs_reviews_slider').slick({
          dots: true,
          infinite: false,
          speed: 300,
          slidesToShow: 4,
          adaptiveHeight: true,
          arrows: true,
          prevArrow: $('.crs_prev'),
          nextArrow: $('.crs_next'),
          responsive: [
            {
              breakpoint: 768,
              settings: {
                centerMode: true,
                centerPadding: '20px',
                slidesToShow: 1,
                arrows: false
              }
            }
          ]
        })
        $('.crs_reviews_slider').on('afterChange', function () {
          pushDataLayer('exp_imp_home_trustp_slide', 'Change slide', 'Slider', ' Block reviews Trustpilot')
        })
        $('.crs_reviews_slider').on('beforeChange', function () {
          setTimeout(() => {
            changeDots()
          }, 10)
        })
        changeDots()
        function changeDots() {
          const dots = $('.crs_reviews_slider .slick-dots li')
          const dotActive = $('.crs_reviews_slider .slick-dots li.slick-active')
          const dotActiveIndex = dotActive.index()
          console.log(dotActiveIndex)
          dots.each((i, item) => {
            if (i < dotActiveIndex - 3 || i > dotActiveIndex + 3) {
              $(item).css('opacity', '0').css('transform', 'scale(0)')
            } else {
              $(item).css('opacity', '1')
              if (i == dotActiveIndex - 3 || i == dotActiveIndex + 3) {
                $(item).css('transform', `translateX(${i == dotActiveIndex - 3 ? '-' : ''}48px) scale(0.3)`)
              }
              if (i == dotActiveIndex - 2 || i == dotActiveIndex + 2) {
                $(item).css('transform', `translateX(${i == dotActiveIndex - 2 ? '-' : ''}32px) scale(0.8)`)
              }
              if (i == dotActiveIndex - 1 || i == dotActiveIndex + 1) {
                $(item).css('transform', `translateX(${i == dotActiveIndex - 1 ? '-' : ''}16px) scale(1)`)
              }
              if (i == dotActiveIndex) {
                $(item).css('transform', `scale(1)`)
              }
            }
          })
        }
      }
    }, 500)
  }

  mostSubscribed() {
    const style = /* html */ `
      <style>
        .top-courses__section h4,
        .top-courses__course p{
          display: none;
        }
        .top-courses__section-list {
          border-radius: 10px;
          box-shadow: 7px 7px 20px 0 rgba(7, 34, 52, 0.1);
        }
        .top-courses__course h5 {
          font-size: 16px;
          text-transform: none;
          text-decoration: underline;
          line-height: 1.5;
        }
        .top-courses__course a {
          background-position: center right;
          display: block;
          margin-bottom: 0;
        }
        @media (min-width: 769px) {
          .top-courses .container>.row {
            display: flex;
            justify-content: space-between;
          }
          .top-courses .top-courses__left {
            order: 1;
          }
          .top-courses .top-courses__left>.row>div:first-of-type {
            float: right;
          }
          .top-courses .top-courses__right {
            left: unset;
          }
        }
      </style>
    `

    $el('.top-courses').insertAdjacentHTML('afterbegin', style)
    $el('.top-courses__right h2').innerText = 'Our most popular courses'
  }

  lastBlock() {
    $el('.image-text__text').insertAdjacentHTML(
      'afterend',
      /* html */ `
      <div class="crs_links">
        <p>Skills Training Group also owns & operates <a href="https://solarpanelinstallation.co.uk/">Solar Panel Installation</a>, a solar & renewables blog and <a href="https://boilercoveruk.co.uk/">Boiler Cover UK</a>, a boiler cover comparsion website.</p>
      </div>`
    )
    const block = /* html */ `
      <div class="crs_reviews crs_bottom">
        <style>
          .crs_reviews.crs_bottom {
            width: 100%;
            margin: 30px auto 0;
            column-gap: 8px;
          }
          .crs_reviews.crs_bottom>div {
            background: none;
            border: 1px solid #DBE8F4;
            padding: 11px 6px;
            width: calc(50% - 4px);
          }
          .crs_reviews.crs_bottom>div>p {
            font-size: 13px;
            color: #49718C;
          }
        </style>
        <div class="crs_google">
          <img src="${git}/google_reviews1.svg" alt="google_reviews">
          <img src="${git}/google_stars.svg" alt="stars">
          <p>5.0 rating | 231 review</p>
        </div>
        <div class="crs_trustpilot">
          <img src="${git}/trustpilot_reviews1.svg" alt="trustpilot_reviews">
          <img src="${git}/trustpilot_stars.svg" alt="stars">
          <p>5.0 rating | 446 reviews</p>
        </div>
      </div>
    `
    $el('.image-text .crs_links').insertAdjacentHTML('afterend', block)
  }

  setVisibility() {
    checkFocusTime('header', 'exp_imp_home_firstnew_vis_foc', 'First screen new')
    checkFocusTime('.course-stats', 'exp_imp_home_unfind_vis_focus', 'Under Find a course that’s right for you')
    checkFocusTime('.endorsements', 'exp_imp_home_trust_vis_focus', 'Trust block and partners')
    checkFocusTime('.top-courses', 'exp_imp_home_popular_vis_focus', 'Popular Courses')
    checkFocusTime('.image-text__text', 'exp_imp_home_train_vis_foc', 'Our Popular First Aid Training Venues')
    checkFocusTime('.crs_reviews_tp', 'exp_imp_home_trustp_vis_foc', 'Block reviews Trustpilot')
    checkFocusTime(
      '.crs_reviews.crs_bottom',
      'exp_imp_home_googl_vis_foc',
      'Blocks Google and Trustpilot ratings Down the page'
    )

    $$el('.three-col-icons__block').forEach((item, i) => {
      checkFocusTime(
        `.three-col-icons__block:nth-of-type(${i + 1})`,
        `exp_imp_home_choose_vis_focben`,
        `Why do people choose Skills Training Group?`,
        item.querySelector('h3').innerText
      )
    })

    $$el('.facilities__block').forEach((item, i) => {
      checkFocusTime(
        `.facilities__block:nth-of-type(${i + 1})`,
        `exp_imp_home_review_vis_focrew`,
        `Reviews`,
        item.querySelector('h3').innerText
      )
    })
    $$el('.course_type .course_item_content').forEach((item, i) => {
      checkFocusTime(
        `.course_type:nth-of-type(${i + 1}) .course_item_content`,
        `exp_imp_home_open_vis_foc`,
        `Explore all courses Open courses`,
        item.closest('.course_type').querySelector('h3').innerText
      )
    })
  }
}

new NewHomePage(device)
