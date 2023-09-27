let dir = `https://conversionratestore.github.io/projects/skillstg/img/`;

let arrlinks = [
    '/courses/one-day-emergency-first-aid-at-work-course/',
    '/courses/first-aid-at-work-course/',
    '/courses/construction-first-aid-course/',
    '/courses/emergency-paediatric-first-aid-course/',
    '/courses/paediatric-first-aid-course/'
];

let dataTrustpilor = [
    {
        'theme': 'Paediatric first aid training',
        'description':'I had my paediatric first aid training with Allan king. I thought the experience was excellent and very helpful. Allan couldn’t have been more helpful with any questions and managed to explain everything perfectly. Thank you again        ',
        'customer': 'Sophie',
        'date': '17 Jan 2023'
    },
    {
        'theme': 'First class service from everyone at…',
        'description':'First class service from everyone at the centre. Looking forward to doing more courses. Brilliant!!!',
        'customer': 'Craig',
        'date': '6 Jul 2023'
    },
    {
        'theme': 'Brilliant First Aid Training !',
        'description':'I did my First Aid Training in Coventry, and my trainer (Tony) was brilliant. It seemed like everyone enjoyed the whole course. I really liked the conversations and real life examples that Tony gave us.<br><br>I would do this training again and I highly recommend to everyone and anyone with various abilities and knowledge.',
        'customer': 'Paulina Llewellyn',
        'date': '6 Jun 2023'
    },
    {
        'theme': 'First Aid Courses',
        'description':'We had a few of our staff members go on the First Aid at Work and the Emergency First Aid course, all of which said how the courses were informative and engaging. Lauren was really helpful through the booking process too, thank you!!',
        'customer': 'Megan',
        'date': '7 Jun 2023'
    },
    {
        'theme': 'Informative & engaging First Aid Training',
        'description': `I did the Emergency First Aid Training course with Matt Hayes and I must say that it was the best first aid course I have ever done. The course content was in depth and varied (which can sometimes make for quite a heavy learning day) but it was really easy to follow thanks to Matt's informative and engaging teaching style.`,
        'customer': 'Rebecca Coughlan',
        'date': '18 May 2023'
    },
    {
        'theme': 'Professional',
        'description':'I recently completed a course with Skills Training Group and had a fantastic experience.(Emergency First Aid at Work). The staff were incredibly knowledgeable and friendly, and the course was well-delivered and informative. I gained a lot of confidence and knowledge in my field thanks to the hands-on experience and excellent instruction. The facilities were top-notch, and the pace of the course was just right. I highly recommend Skills Training Group to anyone looking to further their career or learn new skills. Thank you for a great experience!',
        'customer': 'KHaled Alazab',
        'date': '15 May 2023'
    },
    {
        'theme': 'My First Aid training was very detailed…',
        'description':'My First Aid training was very detailed and fun! I learned so much in just one day. Thanks for sharing your knowledge in an easy and interactive way, Bob!',
        'customer': 'Sophie Quinn',
        'date': '15 June 2023'
    },
    {
        'theme': 'Great experience at Emergency First Aid at Work',
        'description':'I recently did the Emergency First Aid at Work training delivered by Matt. It was a great course, Matt was very knowledgeable, friendly and approachable and the course was informative and enjoyable. I left feeling confident to be a First Aider at work.',
        'customer': 'Ishana',
        'date': '12 May 2023'
    },
    {
        'theme': 'First time attending Skills Training',
        'description':' First time attending Skills Training Group and can honestly say the course was very well organised and all staff are professional and knowledgeable. The centre was nice and warm. I will be using STG going forward and have recommended to colleagues for their gas and electrical training requirements. Thank you!',
        'customer': 'MKN P&H Engineers Ltd.',
        'date': '13 March 2023'
    },
    {
        'theme': 'Emergency First Aid at work',
        'description':'I did the Emergency First Aid at work course with Allan at Skills Training Group. Was something I expected to be boring, but the day flew in and I was pleasantly surprised to enjoy it. Allan was a knowledgeable and engaging trainer who managed to squeeze so much into one day! I’d recommend this course to anyone needing any first aid training.',
        'customer': 'Sarah Oneil',
        'date': '02 February 2023'
    },
    {
        'theme': 'First Aid at Work training',
        'description':'Excellent training all round. Very knowledgable and engaging instructor. Would really recommend to any employer looking for a first aid course in the North East.',
        'customer': 'Beatrice Lund',
        'date': '17 April 2023'
    },
    {
        'theme': 'Recently completed the 3 day First Aid…',
        'description':'Recently completed the 3 day First Aid at work course, Thought the course was ran very well , plenty of information and the instructor Allan delivered it to a high standard, very reasonably priced compared to similar courses in the area,<br><br>Will definitely be back when renewal is due 👍',
        'customer': 'Mark Suffredini',
        'date': '18 January 2023'
    },
    {
        'theme': 'Had first aid today with Allan King',
        'description':'Had first aid today with Allan King. Fantastic trainer and was great to have a course that was not only informative but interactive also. Knows his stuff and hope my next course in 3 years will be with the same team. Thanks guys ☺️                ',
        'customer': 'Stefini Barrowman',
        'date': '24 March 2023'
    },
    {
        'theme': 'Excellent emergency first aid at work…',
        'description':'Excellent emergency first aid at work course. Really informative and easy to follow. Great instruction from Allan                ',
        'customer': 'Sarah Tucker',
        'date': '01 March 2023'
    },
    {
        'theme': 'First aid',
        'description':'It was nice and relaxed and able to learn as the classroom was a nice size and instructor great and made it fun to learn                ',
        'customer': 'Mr A JOHNSON',
        'date': '01 March 2023'
    },
    {
        'theme': 'First aid',
        'description':'Thanks for an educational and insightful day Allan, feeling confident and more knowledgeable in terms of first aid & being able to administer this safely in the workplace.                ',
        'customer': 'Eliza',
        'date': '06 February 2023'
    }
]

let data = [
    {
        'navContent': {
            'Modules breakdown': {
                'list': [
                    'Minor cuts, grazes, splinters, and burns', 
                    'Choking',
                    'Shock',
                    'Wounds and bleeding',
                    'Diabetes',
                    'Asthma',
                    'Fractures',
                    'Strokes',
                    'Anaphylactic shock',
                    'Heart attacks and angina',
                    'Unconscious colleagues',
                    'AED (external defibrillator)',
                    'Illnesses',
                    'Bruises, sprains, strains',
                    'Scalds'
                ],
                'description': [
                    'The course will also educate employees on how to handle a wide range of specific work-related situations, as well as teaching them cardiopulmonary resuscitation (CPR).'
                ]
            },
            'EFAW exams and assessment': {
                'description': [
                    'Candidates will be assessed by their trainer throughout the data to ensure that all learning outcomes are achieved.',
                    '<b>Successful learners will receive an FAIB-accredited emergency first aid at work qualification.</b>'
                ]
            },
            'Entry requirements': {
                'description': [
                    'There are no entry requirements for this emergency first aid at work course.',
                    'However, candidates must be physically able to carry out the procedures required to meet HSE assessment criteria.'
                ]
            },
            'Course overview': {
                'description': [
                    'This course complies with Health and Safety (first aid) Regulations 1981 and updates learners of any change in practice and guidelines.',
                    'It is suitable for both those who require first aid training for the workplace and also those who require basic first aid skills outwith the workplace. <b>You don’t need to work for a company to undertake this course.</b>',
                    '<span>Our Emergency First Aid at Work Course (EFAW) runs from <b>9:00 – 16:00.</b></span>',
                    'The EFAW training syllabus covers some important general first aid topics, including:'
                ],
                'list': [
                    'What are the roles and responsibilities of the first aider?',
                    'How should incidents be recorded and reported using a reporting of injuries, diseases and dangerous occurrences regulations (riddor) form?',
                    'What should a first aid kit contain?',
                    'In a first aid emergency, how should you assess the situation and respond.'
                ]
            }
        },
        'bookOnsite': 'We also offer the <a href="/courses/first-aid-at-work-course/">3 Day First Aid at Work Course</a>',
        'needDifferent': {
            'linkText':'View all our First Aid Qualifications',
            'description': 'For group bookings, we can deliver these courses onsite at your venue. Our inhouse first aid training is fully accredited by the First Aid Industry Body (FAIB).'
        }
       
    },
    {
        'navContent': {
            'Modules breakdown': {
                'description': [
                    'A 3-day First Aid at Work Course covers comprehensive training for people to become a qualified first-aider at work.',
                    '<b>Some of the topics that may be covered in this course include:</b>'
                ],
                'list': [
                    'Understanding the role of a first-aider in the workplace',
                    'Basic life support (bls) including cpr (cardiopulmonary resuscitation)',
                    'Management of an unresponsive casualty',
                    'Use of an AED (automated external defibrillator)',
                    'Dealing with choking, bleeding, cuts, bruises, burns, shock, and other common workplace injuries',
                    'Understanding of the principles of first aid and the importance of recording accidents and incidents',
                    'Recognition and management of poisoning, stings, and bites',
                    'Recognition and management of concussion, fractures, dislocations, sprains, and strains',
                    'Understanding of the types of cardiac emergencies and how to recognize and manage them',
                    'Recognition and management of seizures and epilepsy',
                    'Recognition and management of diabetes and hypoglycemia',
                    'Recognition and management of asthma and other respiratory emergencies',
                    'Recognition and management of fainting'
                ],
                'description2': [
                    'In addition, participants will learn practical skills such as bandaging, splinting, and immobilising an injured limb.',
                    'The course will also cover topics such as communication with emergency services, understanding of different types of ambulance services and their roles, and the importance of regular checks and maintenance of first aid equipment.'
                ]
            },
            'FAW exams and assessment': {
                'description': [
                    'As well as being assessed by the trainer throughout the three-day first aid at work course, learners will take a final assessment. Successful candidates will receive an FAIB certificate.',
                    'The First Aid Industry Body (FAIB) Approve, Monitor and Regulate its Training Providers and Trainers/Assessors. Consequently, the First Aid certificates that are issued under FAIB are recognised, acknowledged and accepted by the Health and Safety Executive (HSE) and the Department for Education (DfE).'
                ]
            },
            'Entry requirements': {
                'description': [
                    'There are no requirements for this first aid at work course.',
                    'However, learners must be physically able to carry out the procedures required to meet HSE assessment criteria.'
                ]
            }, 
            'First Aid at Work Qualification': {
                'description': [
                    'The First Aid at Work Qualifications required in the workplace will depend entirely on the level of risks your team encounters. Most office-based businesses, for instance, may not require more than EFAW qualifications. A high-risk environment, such as the construction sector, will benefit from FAW training.',
                    'Participants are assessed during the session and can receive their qualifications at the end of the training as long as they can demonstrate what they have learnt.'
                ]
            }, 
            'Course overview': {
                'description': [
                    'This course complies with Health and Safety (first aid) Regulations 1981 and updates learners of any change in practice and guidelines.',
                    'Our Blended First Aid at Work course combines 2 Days of hands-on training with 6 hours of eLearning at home or work.',
                    'Prior to the practical day, you will complete our web-based, interactive, and user-friendly eLearning module. Learners can access the module as many times as they need to using a computer, laptop, tablet, or phone.',
                    'The face-to-face training day lasts 2 days and is designed to maximise recall and provide learners with the skills, knowledge, and confidence to act effectively in first aid emergencies.',
                    '<b>Why undertake blended learning?</b>',
                    'Online blended learning allows the learner to undertake small modules during any downtime they have at work which reduces their classroom based training to 2 days, meaning less time off work which is more efficient for employers.',
                    '<span>Our First Aid at Work Course runs from <b>9:00 – 16:00.</b></span>',
                    'The FAW training syllabus covers some important general first aid topics, including:'
                ],
                'list': [
                    'What are the roles and responsibilities of the first aider?',
                    'How should incidents be recorded and reported using a reporting of injuries, diseases and dangerous occurrences regulations (riddor) form?',
                    'What should a first aid kit contain?',
                    'In a first aid emergency, how should you assess the situation and respond?'
                ]
            }
        },
        'bookOnsite': 'We also offer the <a href="/courses/one-day-emergency-first-aid-at-work-course/">Emergency First Aid at Work Course</a>, as well as a <a href="/category/first-aid-training-courses/">Range of First Aid Courses.</a>'
      
    },
    {
        'navContent': {
            'Modules breakdown': {
                'description': [
                    'The course will also educate employees on how to handle a wide range of specific work-related situations, as well as teaching them <b>cardiopulmonary resuscitation (CPR) for adults, children, and babies</b>. Over the course of the three days, they will be taught how to deal with:'
                ],
                'list': [
                    'Minor cuts, grazes, splinters, and burns',
                    'Choking',
                    'Shock',
                    'Wounds and bleeding',
                    'Diabetes',
                    'Asthma',
                    'Fractures',
                    'Strokes',
                    'Anaphylactic shock',
                    'Heart attacks and angina',
                    'Asthma',
                    'Unconscious colleagues',
                    'Sudden poisoning',
                    'Eye injuries',
                    'Injuries to bones, muscles and joints',
                    'Spine, head, neck injuries',
                    'Chest injuries',
                    'Workers, accident, response'
                ]
            },
            'Construction FAW exams and assessment': {
                'description': [
                    'During the three-day first aid at work course, students will be evaluated by the instructor as well as in a final exam. The FAIB will accredit the successful candidates with a FAW qualification.'
                ]
            },
            'Entry requirements': {
                'description': [
                    'There are no requirements for this construction first aid course.',
                    'However, learners must be physically able to carry out the procedures required to meet HSE assessment criteria.'
                ]
            },
            'Course overview': {
                'description': [
                    'This course complies with Health and Safety (first aid) Regulations 1981 and updates learners of any change in practice and guidelines.',
                    '<span>Our Construction First Aid Course runs from <b>9:00 – 16:00</b>.</span>',
                    'The Construction FAW training syllabus covers some important general & building site first aid topics, including:'
                ],
                'list': [
                    'What are the roles and responsibilities of the first aider?',
                    'How should incidents be recorded and reported using a reporting of injuries, diseases and dangerous occurrences regulations (riddor) form?',
                    'What should a first aid kit contain?',
                    'In a first aid emergency, how should you assess the situation and respond?'
                ]
            }
        },
        'bookOnsite': 'The construction first aid course is a <a href="/courses/first-aid-at-work-course/">First Aid at Work Course</a>. Click here if you require our <a href="/courses/one-day-emergency-first-aid-at-work-course/">1-Day Emergency First Aid at Work Course</a>.',
        'needDifferent': {
            'linkText':'View all our First Aid Qualifications',
            'description': 'For group bookings, we can deliver these <a href="/courses/on-site-first-aid-training/">courses on site at your venue</a>.'
        },
        'trustpilot': [
            {
                'theme': '',
                'description':'',
                'customer': '',
                'date': ''
            }
        ]
    },
    {
        'navContent': {
            'Modules breakdown': {
                'description': [
                    'An Emergency Paediatric First Aid Course typically covers a range of topics related to providing immediate care for infants and children in emergency situations.',
                    '<b>Some of the topics that may be covered in such a course include:</b>'
                ],
                'list': [
                    'CPR (cardiopulmonary resuscitation) for infants and children',
                    'Use of AED (automated external defibrillator) for infants and children',
                    'Choking and airway obstruction management in infants and children',
                    'Bleeding control and management of shock in infants and children',
                    'Treatment of burns, including electrical burns and chemical burns in infants and children',
                    'Recognition and management of head injury and concussion in infants and children',
                    'Recognition and management of spinal injury in infants and children',
                    'Treatment of fractures and broken bones in infants and children',
                    'Recognition and management of bites and stings in infants and children',
                    'Recognition and management of poisoning and overdose in infants and children',
                    'Recognition and management of anaphylaxis and allergic reactions in infants and children',
                    'Recognition and management of asthma and other respiratory emergencies in infants and children',
                    'Recognition and management of diabetes emergencies in infants and children',
                    'Recognition and management of seizures and febrile convulsions in infants and children',
                    'Recognition and management of meningitis and other serious infections in infants and children',
                    'Recognition and management of croup and pneumonia in infants and children',
                    'Recognition and management of dehydration and gastroenteritis in infants and children'
                ],
                'description2': [
                    'The course will also cover basic first aid skills and protocols for providing care in emergency situations, including how to assess a scene, how to prioritise care, and how to communicate with emergency services.'
                ]
            },
            'Exams and assessment': {
                'description': [
                    'Candidates will be assessed by their trainer throughout the data to ensure that all learning outcomes are achieved.',
                    '<b>Successful learners will receive an FAIB-accredited emergency first aid at work qualification.</b>'
                ]
            },
            'Entry requirements': {
                'description': [
                    'Learners who take this course should be 16 or over.'
                ]
            },
            'Course overview': {
                'description': [
                    '<b>Emergency First Aid at Work for Babies and Children includes the following range of topics:</b>',
                    '1. Making emergency preparations. What would you do if a child in your care was injured or ill?',
                    '2. Do you have someone who can look after your children if you have to leave them?',
                    '3. Do you have an easily accessible fully equipped first aid kit?',
                    '4. Have you completed record forms for the children in your care so that you can take them with you to the hospital?',
                    '5. Do you have an escape plan in case of a fire?',
                    '6. Do parents understand what to expect in the event of an emergency?',
                    '7. Create a list of important phone numbers that are easily accessible: parents’ contact information, General Practitioner, Health Visitor, and Social Services. Emergency back-up person for NHS 24, 0845 242424.'
                ]
            }
        },
        'bookOnsite': 'For group bookings, we can <a href="/courses/on-site-first-aid-training/">deliver this course in-house</a> for up to 12 learners.<br><br>We also offer the <a href="/courses/emergency-paediatric-first-aid-course/">Emergency Paediatric First Aid Course.</a>',
        'needDifferent': {
            'linkText':'View all of our first aid certification courses'
        },
        'trustpilot': [
            {
                'theme': '',
                'description':'',
                'customer': '',
                'date': ''
            }
        ]
    },
    {
        'navContent': {
            'Modules breakdown': {
                'description': [
                    'Our Level 3 Paediatric First Aid Course covers more advanced skills and knowledge to provide effective emergency care for infants and children.',
                    '<b>Topics covered in this course include:</b>'
                ],
                'list': [
                    'Emergency care and management of infants and children',
                    'CPR (cardiopulmonary resuscitation) for infants and children',
                    'Use of AED (automated external defibrillator) for infants and children',
                    'Choking and airway obstruction management in infants and children',
                    'Bleeding control and management of wounds in infants and children',
                    'Treatment of burns, including electrical burns and chemical burns in infants and children',
                    'Recognition and management of fractures, dislocations, and sprains in infants and children',
                    'Recognition and management of head injury and concussion in infants and children',
                    'Recognition and management of spinal injury in infants and children',
                    'Recognition and management of fever and temperature control in infants and children',
                    'Recognition and management of poisoning and overdose in infants and children',
                    'Recognition and management of bites and stings in infants and children',
                    'Recognition and management of anaphylaxis and allergic reactions in infants and children',
                    'Recognition and management of asthma and other respiratory emergencies in infants and children',
                    'Recognition and management of seizures and epilepsy in infants and children',
                    'Recognition and management of diabetes and hypoglycemia in infants and children',
                    'Recognition and management of sickle cell crisis in infants and children',
                    'Recognition and management of meningitis and other serious infections in infants and children',
                    'Recognition and management of sepsis and septic shock in infants and children'
                ],
                'description2': [
                    'The course will also cover more advanced first aid skills and protocols, such as how to use advanced first aid equipment and how to communicate effectively with emergency services.'
                ]
            },
            'Exams and assessment': {
                'description': [
                    'As well as being assessed by the trainer throughout the course, learners will take a final assessment. ',
                    '2 x Multi-choice theory assessments & 7 x Practical demonstrations.',
                    'Successful candidates will receive a Level 3 Certificate from Qualsafe Awards.'
                ]
            },
            'Entry requirements': {
                'description': [
                    'Learners who take this course should be 16 or over.'
                ]
            },
            'Course overview': {
                'description': [
                    'Our 12 Hour Paediatric First Aid course is made up of 6 hours of hands-on training and 6 hours of at-home online learning. Our eLearning curriculum, which is web-based, interactive, and user-friendly, must be completed prior to the practical day. Learners may access the course materials as many times as they want via a computer/laptop/tablet or phone. The classroom training session lasts for 6 hours and is delivered by a trainer who will teach you the skills, knowledge, and confidence to respond effectively when pediatric emergencies occur.',
                    '<b>EYFS 2021 Update – Blended First Aid meets full guidance.</b>',
                    'The Department of Education recognises Blended First Aid in the New EYFS Framework, which will come into effect on September 1st 2021, and that you may rest confident that Skills Training Group meets all of the requirements.',
                    'This blended course includes all components of the Emergency Paediatric Course, with a trainer-led practical day and our eLearning module containing only the additional material needed to acquire your Full Paediatric First Aid Certification.'
                ]
            }
        },
        'bookOnsite': 'For group bookings, we can <a href="/courses/on-site-first-aid-training/">deliver this course in-house</a> for up to 12 learners.<br><br>We also offer the <a href="/courses/paediatric-first-aid-course/">Level 3 Paediatric First Aid Course.</a>',
        'needDifferent': {
            'linkText':'View all of our first aid certification courses'
        },
        'trustpilot': [
            {
                'theme': '',
                'description':'',
                'customer': '',
                'date': ''
            }
        ]
    }

]
    
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

let style = `
<style>
/* base */
nav {
    z-index: 12;
}
.container {
    width: 100%;
    padding: 0 20px;
}
.course-form-mobile,
header.course.is-course-form,
.course-overview,
.image-text,
footer .accreditations,
.embedsocial-hashtag,
.course-table {
    display: none;
}
footer .footer-logo {
    border-top: none;
    padding-top: 0;
}
b {
    font-weight: 600;
}
.text-center {
    text-align: center;
}
ul {
    padding-left: 20px;
}
footer ul {
    padding-left: 0;
}

h2 {
    color: var(--Blue-dark, #0D3B5B);
    font-weight: 700;
    line-height: 24px; 
    text-align: left;
}
.btn {
    margin: 0;
    width: 100%;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: normal;
    line-height: 14px;
    padding: 17px 24px;
}
.underline {
    text-decoration-line: underline;
}
p, a, li {
    font-family: 'museo-sans', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    color: var(--Blue-dark, #0D3B5B);
}
.mr-10 {
    margin-right: 10px;
}
.mr-8 {
    margin-right: 8px;
}
.d-none {
    display: none;
}
/* flex */
.flex-center {
    display: flex;
    justify-content: center;
    align-items: center;
}
.d-flex {
    display: flex;
} 
.justify-between {
    justify-content: space-between;
}
.items-center {
    align-items: center;
}
.flex-wrap {
    flex-wrap: wrap;
}
.column-reverse {
    flex-direction: column-reverse;
}
.row-reverse {
    flex-direction: row-reverse;
}
/* offer section*/
.offer_section {
    background: var(--BG, #EAF5FE);
    position: relative;
    margin: 57px 0 0 0;
    z-index: 2;
}
.offer_section * {
    z-index: 1;
    position: relative;
}
.offer_section .container {
    max-width: 944px;
}
.offer_section .main {
    border-radius: 10px;
    background: var(--Blue-dark, #0D3B5B);
    padding: 15px;
    width: 100%;
    margin: 20px 0 15px;
}
.offer_section .main h1 {
    color: #FFF;
    font-family: 'museo-sans', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px; 
    margin-bottom: 0;
}
.offer_section .main p.day {
    border-radius: 4px;
    background: var(--BG, #EAF5FE);
    padding: 0 10px;
    line-height: 28px;
    margin: 10px 0;
    width: fit-content;
    white-space: nowrap;
    ${window.location.href.includes(arrlinks[1]) ? 'text-transform: lowercase;':''}
}
.offer_section .main p.pr {
    color: var(--BG, #EAF5FE);
    font-size: 24px;
    font-weight: 700;
}
.offer_section .main p.pr span:not(.course-cost__currency) {
    font-size: 16px;
    font-weight: 400;
}

.offer_section > div > p {
    color: var(--Body-text, #49718C);
}
.offer_certificate {
    margin: 0 -20px 15px;
}
.offer_certificate, 
.course_approval {
    background: #FFF;
    padding: 10px;
}
.course_approval {
    padding: 10px 10px 4px 10px;
}
.course_approval p {
    margin-bottom: 6px;
}
.course_approval img.img-ofsted {
    margin-top: -9px;
}
.or {
    font-size: 14px;
    line-height: 28px; /* 200% */
}
.review_item {
    border: 1px solid #DBE8F4;
    background: #FFF;
    padding: 10px 16px;
    width: calc(50% - 8px);
    text-align: center;
    color: #49718C;
    height: fit-content;s
}
.review_item p {
    font-size: 12px;
    line-height: normal;
}
.review_item img {
    margin: 0 auto 8px;
}
.bg-icon {
    pointer-events: none;
    position: absolute;
    top: 144px;
    left: 0;
    width: 100%;
    height: auto;
    z-index: 0;
}

.swiper_course {
    padding: 0 20px 50px;
    overflow: hidden;
    position: relative;
}
.swiper-pagination {
    bottom: 30px!important;
}
// .swiper_course .swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic, 
// .swiper_course .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
//     z-index: 0;
// }
// .swiper_course .swiper-horizontal>.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet, 
// .swiper_course .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {
//     width: 8px;
//     height: 8px;
//     transform: none;
//     background: #EAF5FE;
// }
.swiper-pagination-bullet-active {
    background: #09983F;
}
.navigation_content {
    background: #F8F8F8;
    padding: 20px;
    border-radius: 10px;
}
.navigation_content ul {
    padding-top: 5px;
}
.navigation_content a {
    font-size: 14px;
    line-height: 32px; 
    letter-spacing: 0.14px;
    text-decoration-line: underline;
}

.course_approval img {
    height: auto;
    width: auto;
}
.accordion {
    border-radius: 4px;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    padding: 0 15px;
    margin-bottom: 20px;
}
.accordion_current {
    font-size: 20px;
    line-height: 24px;
    padding: 15px 0 10px;
    cursor: pointer;
    border-bottom: 1px solid #DBE8F4;
}
.accordion_current * {
    pointer-events: none;
}
.accordion_current.is-hide {
    border-bottom: none;
}
.accordion_current.is-hide svg {
    transform: scaleY(-1);
}
.accordion_current.is-hide + .accordion_drop {
    display: none;
}
.accordion_drop li {
    color: var(--Body-text, #49718C);
}
.accordion_drop {
    padding-top: 10px;
    max-width: 700px;
}
.accordion_drop p, 
.accordion_drop ul {
    padding-bottom: 10px;
    color: var(--Body-text, #49718C);
}
.accordion_drop p b,
.accordion_drop ul b {
    color: var(--Blue-dark, #0D3B5B);
}
.accordion_drop p span {
    margin: 0 -15px;
    background: var(--BG, #EAF5FE);
    padding: 10px 15px;
    color: var(--Body-text, #49718C);
    display: block;
}
.accordion_drop p span b {
    color: var(--Blue-dark, #0D3B5B);
}
.highlighted {
    border-radius: 4px;
    background: var(--Blue-dark, #0D3B5B);
    padding: 15px 15px 20px;
}
.highlighted * {
    color: #FFF;
}
.highlighted a {
    text-decoration-line: underline;
    font-weight: 700;
}
.highlighted img {
    width: 70px;
    height: auto;
    margin-right: 10px;
    padding-right: 10px;
    flex-shrink: 0;
    border-right: 1px solid #49718C;
}
.for_qroup {
    background: var(--BG, #EAF5FE);
    padding: 15px;
    color: var(--Body-text, #49718C);
    line-height: 24px; 
}
.for_qroup a {
    color: var(--Blue-dark, #0D3B5B);
}
.need_different {
    background-color: #EAF5FE;
    margin: 40px 0 0px;
}
.need_different_content {
    padding: 20px 20px 30px;
}
.need_different svg {
    flex-shrink: 0;
}
.view-all {
    border-radius: 4px;
    background: #FFF;
    padding: 7px;
    margin: 15px 0;
}
.view-all a {
    text-decoration-line: underline;
    margin-left: 10px;
}
.need_different .btn {
    margin-top: 15px;
}
.need_different > img {
    width: 100%;
    object-fit: cover;
}
.trainers {
    padding: 30px 0 10px;
}
.trainers > p {
    margin: 15px 0;
    color: var(--Body-text, #49718C);
    max-width: 603px;
}
.trainers img {
    width: 44px;
    height: 44px;
}
.item {
    width: calc(50% - 12px);
    margin-right: 24px;
    margin-bottom: 20px;
}
.item:nth-child(2n+2) {
    margin-right: 0;
}
.item .title {
    margin: 5px 0 3px;
}
.item p:not(.title) {
    border-radius: 2px;
    background: var(--BG, #EAF5FE);
    padding: 2px 4px;
    color: var(--Body-text, #49718C);
    font-size: 14px;
    line-height: normal;
    width: fit-content;
}

.need_course_content {
    padding: 20px 20px 30px;
}
.need_course p {
    color: var(--Body-text, #49718C);
    margin-top: 10px;
}
.need_course h2 {
    padding-bottom: 5px;
}
.need_course a {
    color: var(--Blue-dark, #0D3B5B);
}
.trustpilot {
    background: #F8F8F8;
    padding: 30px 20px 0;
    position: relative;
    overflow: hidden;
    margin-bottom: 30px;
}
.slider_trustpilot {
    overflow: hidden;
    margin-top: 12px;
    transition: all 0.2s ease;
}
.trustpilot > img {
    width: auto;
    height: auto;
    margin-bottom: 12px;
}
.trustpilot .swiper-slide > div {
    border-radius: 10px;
    border: 1px solid var(--Border, #DBE8F4);
    background: #FFF;
    padding: 15px;
}
.trustpilot .info {
    font-size: 14px;
}
.trustpilot .text {
    margin: 5px 0;
    color: var(--Body-text, #49718C);
}
.swiper-pagination {
    overflow: visible;
}
.swiper-pagination-bullet {
    transform: scale(.5);
    opacity: 0;
    background: #DBE8F4;
}
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main{
    background: #09983F;
}
span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev,
span.swiper-pagination-bullet.swiper-pagination-bullet-active-next,
.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {
    transform: scale(1);
    opacity: 1;
}
span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev,
span.swiper-pagination-bullet.swiper-pagination-bullet-active-next-next {
    transform: scale(.75);
    opacity: 1;
}
span.swiper-pagination-bullet.swiper-pagination-bullet-active-next-next + .swiper-pagination-bullet,
.swiper-pagination-bullet.siblingsPrev {
    opacity: 1;
}
.testimonial {
    margin: 55px 0 30px;
}
.brands {
    padding: 30px 20px;
    background: var(--BG, #EAF5FE);
}
.brands h2 {
    margin-bottom: 20px;
}
.related_courses h2 {
    margin: 30px 0 20px;
}
.card { 
    margin-bottom: 30px;
}
.card p {
    color: var(--Body-text, #49718C);
}
.card p.tag {
    font-size: 12px;
    line-height: 26px;
    margin-top: 15px;
    text-transform: uppercase;
}
.card p.title {
    color: var(--Blue-dark, #0D3B5B);
    line-height: 24px; 
    text-transform: uppercase;
    margin-bottom: 10px;
}
.card .btn {
    border-radius: 4px;
    background: var(--Blue, #26AAE1);
    padding: 15px 24px;
    width: fit-content;
    margin-top: 15px;
}
.faqs {
    margin: 0 0 30px 0;
}
.faqs .container {
    padding: 0;
}
.faqs__list {
    margin-top: 20px;
}
.course-form {
    display: block;
    padding: 30px 20px;
}
.course-form h2 {
    font-size: 20px;
    line-height: 24px;
}
.course-form form {
    margin-top: 20px;
}
.course-form h2 span {
    margin-top: 10px;
    display: block;
    font-size: 16px;
    font-weight: 400;
    color: var(--BG, #EAF5FE);
}
.course-form input {
    padding: 10px !important;
    height: auto;
    margin: 0;
}
.course-form label {
    font-size: 14px!important;
    font-style: normal;
    line-height: normal;
    margin-bottom: 10px !important;
}
.course-form button {
    margin-top: 0;
    padding: 10px 24px!important;
    font-size: 16px;
    font-weight: 600!important;
    line-height: 24px!important;
}
.accreditations_block {
    background: #EAF5FE;
    padding: 20px;
}
.accreditations_block img {
    margin-top: 20px;
    max-width: 775px;
}
.work_certificate {
    background: var(--BG, #EAF5FE);
    padding: 30px 20px;
}
.work_certificate h2 {
    margin-bottom: 15px;
}
.work_certificate p {
    color: var(--Body-text, #49718C);
}
@media (max-width: 991px) {
    .offer_section .btn {
        margin-top: 15px;
    }
    .course_approval img {
        max-height: 21px;
        object-fit: contain;
        width: auto;
    }
    .review_item img {
        max-height: 48px;
    }
    .review_block {
        margin: 20px -20px 0;
        padding: 20px;
        background: #fff;
    }
    .navigation_content, .need_course, .trustpilot, .accreditations_block, .course-form, .brands {
        margin: 0 -20px;
    }
    .course_approval {
        margin: 10px -20px 0;
    }
    .need_different {
        margin: 30px -20px 0px;
    }
    .need_different > img {
        max-height: 62.66vw;
    }
    .work_certificate {
        margin: 0 -20px 30px;
    }
    .work_certificate img {
        max-width: ${window.location.href.includes(arrlinks[4]) ? '40px' : '104px'};
        margin-bottom: 10px;
        ${window.location.href.includes(arrlinks[4]) ? 'margin-right: 10px;' : ''}
    }
    .sticky_btn {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        padding: 15px 20px;
        border-top: 1px solid var(--Border, #DBE8F4);
        background: var(--FFFFFF, #FFF);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        z-index: 11;
        opacity: 0;
        pointer-events: none;
        transform: translateY(100px);
        transition: all 0.2s ease;
    }
    .sticky_btn.active {
        pointer-events: auto;
        opacity: 1;
        transform: translateY(0);
    }
    .trustpilot {
        padding-bottom: 54px;
    }
    .swiper_course .swiper-pagination-bullets {
        height: 8px;
    }
}
@media (min-width: 992px) {
    .review-item {
        padding: 15px 10px;
    }
    .flex-lg-row {
        flex-direction: row;
    }
    .d-lg-flex {
        display: flex;
    }
    .d-lg-none {
        display: none;
    }
    .d-lg-block {
        display: block;
    }
    .navigation_content {
        height: fit-content;
        position: sticky;
        top: 60px;
        min-width: 315px;
    }
    .course_approval .mr-8 {
        margin-right: 20px;
    }
    .highlighted {
        padding: 30px 50px;
        border-radius: ${window.location.href.includes(arrlinks[1]) ? '10px 10px 0 0' : '10px'};
    }
    .highlighted img {
        width: 184px;
        margin-right: 30px;
        padding-right: 30px;
    }
    .highlighted p, .highlighted a {
        font-size: 24px;
        line-height: normal;
    }
    .for_qroup {
        border-radius: 0 0 10px 10px;
    }
    .navigation_content {
        margin: 60px 0 0 30px;
        border: 1px solid var(--Border, #DBE8F4);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    }
    h2, .large-title {
        font-size: 24px;
    }

    .offer_block {
        border-radius: 10px;
        background: #FFF;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        overflow: hidden;
    }
    .offer_block > div {
        padding: 30px 50px;
    }
    .offer_block > .course_approval {
        padding: 10px;
        background: var(--BG, #EAF5FE);
    }
    .review_block {
        width: calc(100% - 312px);
        padding-left: 30px;
    }
    .review_item {
        border-radius: 4px;
    }
    .form_course .review_item {
        width: 260px;
        padding: 30px;
        margin: 20px auto;
    }
    .form_course .review_item img {
       display: none;
    }
    .form_course .review_item img.d-none {
        display: block;
    }
    .offer_block {
        margin: 20px 0 -133px;
    }
    .offer_section {
        margin: 0;
        padding-top: 96px;
    }
    .offer_section .main h1 {
        font-size: 36px;
        line-height: 42px
    }
    .bg-icon {
        top: -80px;
        left: 50%;
        z-index: 0;
        max-width: 941px;
        transform: translateX(-50%);
    }
    .offer_section .main {
        margin: 40px 0 20px;
        padding: 25px 50px;
        ${window.location.href.includes(arrlinks[1]) || window.location.href.includes(arrlinks[2]) || window.location.href.includes(arrlinks[3]) ? 'border-radius: 10px 10px 0 0;' :''}
    }
    .offer_section > div > p {
        padding-left: 50px;
        max-width: 757px;
    }
    .offer_section .main p.pr {
        text-align: right;
        font-size: 36px;
        line-height: 42px;
    }
    .offer_certificate {
        border-radius: 0 0 10px 10px;
        margin: -20px 0 20px;
    }
    .swiper_course {
        padding: 193px 0 128px 45px;
        background: #F8F8F8;
    }

    .swiper_course .swiper-pagination {
        bottom: 75px!important;
    }
    .slider_trustpilot .swiper-pagination {
        bottom: 53px!important;
    }
    .swiper-btns {
        position: absolute;
        right: 50px;
        bottom: 60px;
        z-index: 11;
    }
    .slider_trustpilot .swiper-btns {
        bottom: 30px;
    }
    .swiper-btns button {
        border-radius: 100px;
        border: 1px solid var(--Border, #DBE8F4);
        background: #FFF;
        margin-left: 30px;
        width: 48px;
        height: 48px;
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
        cursor: pointer;
    }
    .swiper-btns button.swiper-button-disabled svg path {
        fill: #80858A;
    }
    .swiper-btns button svg {
        margin: auto;
    }
    .accordion {
        padding: 0 50px;
    }
    .accordion_current {
        padding: 30px 0 15px;
        font-size: 24px;
    }
    .accordion_drop {
        padding: 15px 0;
    }
    .accordion_drop p span {
        margin: 0 -50px;
        padding: 15px 50px;
        width: 890px;
    }
    .accordion_drop p, .accordion_drop ul {
        padding-bottom: 15px;
    }
    .accordion_drop li {
        width: calc(50% - 20px);
        margin-right: 40px;
    }
    .accordion_drop li:nth-child(2n+2) {
        margin-right: 0;
    }
    .left_content {
        max-width: 890px;
        margin-left: auto;
        padding-top: 60px;
    }
    .navigation_content a.btn {
        margin-top: 15px;
        font-size: 16px;
        line-height: 24px;
        text-decoration: none;
        padding: 10px 20px;
    }

    .need_different {
        border-radius: 10px;
        overflow: hidden;
    }
    .need_different > img {
        max-height: ${ window.location.href.includes(arrlinks[3]) || window.location.href.includes(arrlinks[4]) ? '250px': '291px'};
        width: 49%;
    }
    .need_different_content {
        padding: 30px;
        width: 51%;
    }
    .item .title {
        margin: 0 5px 0 10px;
    }
    .trainers {
        padding-bottom: 40px;
    }
    .trainers .item {
        margin-bottom: 20px;
    }
    .trainers > p {
        margin: 10px 0 20px;
    }
    .need_course_content {
        max-width: 460px;
        padding: 0 30px 0 0;
    }
    .need_course {
        flex-direction: row-reverse;
        margin-bottom: 60px;
    }
    .need_course img {
        max-width: 430px;
    }
    .trustpilot {
        padding: 30px 0 98px 30px;
        margin-bottom: 60px;
        border-radius: 10px;
        border: 1px solid var(--Border, #DBE8F4);
        box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.15);
    }
    .trustpilot > img {
        margin-bottom: 5px;
    }
    .slider_trustpilot {
        margin-top: 20px;
    }
    .testimonial {
        margin: 108px 0 60px;
    }
    .testimonial .container {
        padding: 0 0 0 72px;
    }
    .testimonial .container::before {
        left: 0;
    }
    .testimonial h2 {
        font-size: 36px;
        line-height: 42px;
    }
    .brands {
        border-radius: 10px;
        padding: 30px;
    }
    .brands img {
        max-width: 787px;
    }
    .card {
        width: calc(50% - 15px);
        margin-right: 30px;
    }
    .card:nth-child(2n+2) {
        margin-right: 0;
    }
    .card > img {
        height: 240px;
        object-fit: cover;
        border-radius: 10px;
    }
    .card p.tag, .card .btn {
        margin-top: 20px;
    }
    .faqs {
        padding: 30px 0 14px;
    }
    .course-form {
        max-width: 430px;
        border-radius: 10px;
        padding: 30px;
    }
    .course-form h2 {
        font-size: 24px;
    }
    .form_course {
        padding: 16px 0;
        background: url(${dir}logo_opacity.svg) no-repeat right center / 420.836px 482.878px;
        margin-bottom: 44px;
    }
    .accreditations_block {
        margin-bottom: 87px;
        padding: 30px;
    }
    .work_certificate {
        border-radius: 10px;
        padding: 30px;
        margin-bottom: 40px;
    }
    .work_certificate img {
        width: ${window.location.href.includes(arrlinks[4]) ? '110px' : '222px'};
        flex-shrink: 0;
        padding-right: 30px;
        margin-right: 30px;
        border-right: 1px solid #49718C;
    }
    .work_certificate > div:first-child {
        flex-shrink: 0;
    }
    .related_courses h2 {
        margin-top: 60px;
    }
    .faqs__entry h5 {
        padding: 20px 30px;
        font-size: 14px;
        font-weight: 600;
        line-height: normal;
    }
}
</style>`;

let trainersObj = {
    'Allan King': '1862 students trained',
    'Ruth Webster':'826 students trained',
    'Bob Adam':'1604 students trained',
    'Anthony Wallace':'738 students trained',
    'Katie Campbell':'1038 students trained',
    'Andrew Mellars':'642 students trained'
}

let reviewBlock = (classes = '') => `
<div class="${classes} d-flex justify-between review_block">
    <div class="review_item">
        <img src="${dir}google-rating.svg" style="max-width: 89px">
        <img src="${dir}google-rating_2.svg" style="max-width: 127px" class="d-none">
        <p>5.0 rating | 231 review</p>
    </div>
    <div class="review_item">
        <img src="${dir}transpilot-rating.svg" style="max-width: 105px">
        <img src="${dir}transpilot-rating_2.svg" style="max-width: 170px" class="d-none">
        <p>5.0 rating | 455 review</p>
    </div>
</div>`;

let media = window.matchMedia("(min-width: 992px)").matches;

let courseInit = (course) =>  {
    //slider
    let slides = '';
    let numberImage = course.index == 0 ? ' 0-4' : 
                        course.index == 1 ? '2, 4-8' : 
                        course.index == 2 ? '3,4, 9-14' : 
                        course.index == 3 ? ' 15-20' : 
                        '15, 17-21';

    let arrQuat = numberImage.split(',');

    for (let q = 0; q < arrQuat.length - 1; q++) {
        slides += `<div class="swiper-slide"><img src="${dir}slider/slider_${arrQuat[q]}.png" alt="image"></div>`;
    }
    
    let splTo = +(numberImage.split('-')[0].split(' ')[1]);
    let splFrom = +(numberImage.split('-')[1]);

    for (let s = splTo; s <= splFrom; s++) {
        slides += `<div class="swiper-slide"><img src="${dir}slider/slider_${s}.png" alt="image"></div>`;
    }

    //accordion
    let contentObj = data[course.index]['navContent'];

    let accordion = '';

    for (const key in contentObj) {
        accordion += `
            <div class="accordion" id="${key.split(' ').join('-').toLowerCase()}">
                <p class="accordion_current d-flex items-center justify-between" onclick="event.target.classList.toggle('is-hide')">
                    <b>${key}</b>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 9.5L7 4.5L12 9.5" stroke="#0D3B5B" stroke-width="2"/>
                    </svg>
                </p>
                <div class="accordion_drop">`;

        let accordionContent = contentObj[key];

        for (const keyContent in accordionContent) {
         
            if (keyContent == 'description' || keyContent == 'description2') {
                let arrText = accordionContent[keyContent]
                for (let i = 0; i < arrText.length; i++) {
                    accordion += `<p>${arrText[i]}</p>`;
                }
            }
            if (keyContent == 'list') {
                let arrList = accordionContent[keyContent]
                for (let i = 0; i < arrList.length; i++) {
                    accordion += `${i == 0 ? '<ul class="d-lg-flex flex-wrap">' : ''}<li>${arrList[i]}</li>${i == arrList.length - 1 ? '</ul>' : ''}`;
                }
            }
            
        }
        accordion += `</div></div>`;
    }

    //Need a different course?
    let needDifferentHtml = course.index != 1 ? `
    <div class="need_different d-lg-flex items-center">
        <img src="${dir}image-1.png" alt="image">
        <div class="need_different_content">
            <h2>Need a different course?</h2>
            <div class="d-flex items-center view-all">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M3.57812 24.8587V25.7969C3.57812 26.0507 3.78209 26.2501 4.03137 26.2501H10.1366C10.1264 25.9349 10.144 25.1646 10.1366 24.8587C9.5286 24.8579 4.01117 24.8592 3.57812 24.8587Z" fill="#0D3B5B"/>
                    <path d="M13.3132 23.4766H11.0469C11.0469 23.4766 11.0468 25.785 11.0469 26.2504H13.8616C15.2977 25.666 14.8842 23.4807 13.3132 23.4766Z" fill="#0D3B5B"/>
                    <path d="M21.9474 21.2373C18.7569 21.2862 18.5301 25.0225 21.9475 25.1579C25.2471 25.0683 25.2419 21.326 21.9474 21.2373Z" fill="#0D3B5B"/>
                    <path d="M17.6994 17.4072C17.4005 17.9936 16.3125 20.3126 16.3125 20.3126C17.3595 20.6298 18.2343 21.3052 18.7646 22.1845C19.0111 21.6249 19.4559 21.1782 19.9838 20.8565L17.6994 17.4072Z" fill="#0D3B5B"/>
                    <path d="M12.899 7.96603C14.6123 7.96603 16.0128 6.56549 16.0128 4.84769C15.8526 0.716688 9.94184 0.718172 9.78516 4.84773C9.78516 6.56549 11.1812 7.96603 12.899 7.96603Z" fill="#0D3B5B"/>
                    <path d="M15.4034 20.1308L18.0866 14.5967L16.7314 13.876L14.4244 19.1744C14.3409 19.4147 14.0191 19.4645 13.8125 19.5325C13.901 19.7029 13.9287 19.9094 13.9213 20.1081C13.9213 20.1081 15.2584 20.1172 15.4034 20.1308Z" fill="#0D3B5B"/>
                    <path d="M8.08657 17.4072L6.30078 20.1086C6.98063 20.1086 8.73646 20.1086 9.43724 20.1086C9.13181 19.4994 8.38896 17.9952 8.08657 17.4072Z" fill="#0D3B5B"/>
                    <path d="M7.28806 13.7859L8.68407 13.0471L7.9362 11.3293C7.7115 10.7764 8.52256 10.4223 8.77019 10.9668C8.77019 10.9667 12.1061 18.6266 12.1061 18.6266L12.8993 18.8759L13.6789 18.6266L17.0147 10.9667C17.1144 10.7356 17.3819 10.6313 17.613 10.731C17.8397 10.8307 17.9484 11.0982 17.8442 11.3293L17.0963 13.0426L18.4969 13.7859L19.5076 11.7645C20.1357 10.5635 19.5825 8.96178 18.3473 8.40589C18.3473 8.40588 16.0629 7.31808 16.0629 7.31808C14.5783 9.3719 11.2167 9.36243 9.73107 7.31348C9.73107 7.31357 7.43764 8.40588 7.43764 8.40588C6.83028 8.69597 6.37252 9.2036 6.15494 9.84267C5.93285 10.4772 5.9782 11.1616 6.27733 11.7645L7.28806 13.7859Z" fill="#0D3B5B"/>
                    <path d="M13.0164 20.1085C13.0272 19.9907 13.0019 19.8543 12.8714 19.8184C12.8448 19.8079 11.6386 19.4286 11.6386 19.4286C11.5116 19.3923 11.4119 19.2972 11.3576 19.1793L9.04598 13.8809L7.69531 14.597L10.3785 20.1085H13.0164Z" fill="#0D3B5B"/>
                    <path d="M17.7738 22.3472C17.1288 21.5042 16.0328 21.0115 14.9546 21.0147C14.473 21.0168 4.03137 21.0147 4.03137 21.0147C3.78209 21.0147 3.57812 21.2186 3.57812 21.4679V23.9517C4.78721 23.9514 8.85611 23.9519 10.1366 23.9517C10.1366 23.9517 10.1366 23.0225 10.1366 23.0225C10.1352 22.7791 10.3376 22.5673 10.5899 22.5693H13.3094C13.6901 22.5693 14.0527 22.6599 14.3699 22.8276C15.6072 23.3994 16.0606 25.1504 15.2356 26.2497C15.2356 26.2496 16.2011 26.2496 16.2011 26.2496C18.3539 26.2346 19.0317 23.8648 17.7738 22.3472Z" fill="#0D3B5B"/>
                </svg>
                <a href="/category/first-aid-training-courses/"><b>${data[course.index]['needDifferent']['linkText']}</b></a>
            </div>
            ${data[course.index]['needDifferent']['description'] ? '<p>'+data[course.index]['needDifferent']['description']+'</p>' : ''}

            ${course.index == 0 ? '<a href="/courses/on-site-first-aid-training/" class="btn btn--green">Book onsite</a>' : ''}
        </div>
    </div>
    ` : '';


    let itemsTrainers = ''
    for (const key in trainersObj) {
        itemsTrainers +=  ` 
        <div class="item d-lg-flex items-center">
            <img src="${dir}logo-2.png" alt="logo">
            <p class="title"><b>${key}</b></p>
            <p>${trainersObj[key]}</p>
        </div>`
    }

    //Do my employees need this course?
    let needCourse = course.index == 0 || course.index == 1 ? `
        <div class="need_course d-lg-flex items-center">
            <img src="${dir}image-2.png" alt="image">
            <div class="need_course_content">
                <h2>Do my employees need this course?</h2>
                ${course.index == 0 ? '<p>Some companies only require emergency training following a first aid risk assessment – in such cases, our 1-day emergency first aid at work course is sufficient and first aiders only need to receive the EFAW qualification.</p>'+ 
                    '<p>Depending on the outcome of the assessment, other businesses may need more extensive training for the <a href="/courses/first-aid-at-work-course/" class="underline"><b>first aid at work (FAW) qualification.</b></a></p>'+
                    '<p>SIA Badge holders should now hold an Emergency First Aid at Work Qualification. This course is accepted by SIA.</p>' : 
                    '<p>Your employees need the full FAW qualification if the outcome of your first aid risk assessment determines that you require first aiders with more than emergency first aid skills. For less risky business environments, you may only need your first aiders to have received the <a href="/courses/one-day-emergency-first-aid-at-work-course/"><b>EFAW qualification</b></a>.</p>'}
            </div>
        </div>` : ''

    let slidesTrustpilot = '';
    for (let i = course.index == 0 || course.index == 1 ? 1 : 0; i < dataTrustpilor.length; i++) {
        slidesTrustpilot += `
            <div class="swiper-slide">
                <div>
                    <p><b>${dataTrustpilor[i].theme}</b></p>
                    <p class="text">${dataTrustpilor[i].description}</p>
                    <p class="info"><b>${dataTrustpilor[i].customer} | ${dataTrustpilor[i].date}</b></p>
                </div>
            </div>`;

    }

    return `
        <div class="sticky_btn d-lg-none">
            <a href="${course.linkStart}" class="btn btn--green">VIEW START DATES & VENUES</a>
        </div>
        <section class="offer_section">
            <svg class="bg-icon" width="375" height="214" viewBox="0 0 375 214" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.08" clip-path="url(#clip0_1105_4147)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M125.321 -201.879C144.128 -214.382 161.605 -226 179.149 -226C195.914 -226 217.793 
                    -212.962 241.842 -198.63C244.549 -197.017 247.284 -195.387 250.042 -193.758C282.69 
                    -174.469 317.51 -154.053 333.805 -145.593C334.343 -145.318 334.908 -145.033 335.496 -144.737C348.947 
                    -137.947 374.398 -125.103 374.398 -88.8705C374.398 -51.0547 342.914 -34.1384 319.745 -34.1384C303.277 
                    -34.1384 281.929 -46.7263 259.589 -59.899C256.903 -61.483 254.202 -63.0754 251.494 -64.6557C238.816 
                    -72.0527 226.235 -79.5762 215.178 -86.1877C195.338 -98.0523 180.405 -106.982 178.622 -106.982C177.721 
                    -106.982 171.317 -103.121 161.555 -97.2353C155.743 -93.7312 148.74 -89.5086 140.999 -84.9564C138.628 
                    -83.5618 136.144 -82.1399 133.623 -80.6963C117.727 -71.5967 100.338 -61.6432 100.338 -52.3157C100.338 
                    -42.586 114.393 -35.5717 132.851 -26.3596C137.049 -24.2647 141.475 -22.0554 146.015 -19.6756C162.563 
                    -11 179.122 -2.29175 191.957 5.53473C202.595 12.024 211.098 17.3219 211.098 26.765C211.098 34.5927 207.007 
                    44.9423 193.937 44.9423C184.496 44.9423 143.78 21.0565 116.824 5.24202C106.463 -0.836044 98.1356 -5.72208 94.3971 
                    -7.60052C80.9326 -14.3674 64.8268 -26.9729 64.8268 -51.9177C64.8268 -76.5457 77.953 -86.5584 81.4617 -89.2352C81.5068 
                    -89.2697 81.5502 -89.3029 81.5923 -89.3344C84.8921 -91.8557 151.032 -132.192 157.764 -136.039C164.497 
                    -139.888 169.382 -142.276 180.472 -142.276C189.985 -142.276 202.998 -134.461 214.091 -127.8C215.926 -126.698 217.709
                     -125.627 219.415 -124.628C229.824 -118.534 275.324 -92.5168 292.867 -82.4852C295.57 -80.9394 297.609 
                     -79.7734 298.754 -79.1184C299.942 -78.4386 301.067 -77.7818 302.141 -77.1547C308.826 -73.2514 313.549 
                     -70.4942 319.349 -70.4942C326.081 -70.4942 339.019 -76.0661 339.019 -89.8654C339.019 -101.858 329.199 
                     -107.336 321.298 -111.744C320.107 -112.408 318.961 -113.048 317.897 -113.682C315.454 -115.14 305.119 
                     -120.978 291.516 -128.662C259.916 -146.512 210.677 -174.327 201.725 -180.356C188.92 -188.98 182.979 
                     -190.904 179.217 -190.904C176.214 -190.904 173.674 -189.362 169.397 -186.766C168.315 -186.11 167.122 
                     -185.386 165.783 -184.602C161.45 -182.067 119.418 -156.064 88.2484 -136.781C71.702 -126.544 58.2169 
                     -118.202 55.0581 -116.27C53.781 -115.488 52.4753 -114.751 51.1744 -114.017C43.1967 -109.514 35.3955 
                     -105.11 35.3955 -91.1923V-20.2066C35.3955 6.06635 0.00842425 6.56348 0.00842425 -20.2066V-86.4151C0.00842425 
                     -86.7931 0.00653926 -87.1935 0.00455261 -87.615C-0.0486119 -98.9063 -0.174599 -125.661 33.8026 -146.191C40.0286 
                     -149.951 47.4538 -154.318 55.6213 -159.121C72.7572 -169.197 93.1607 -181.195 112.616 -193.559C116.926 
                     -196.298 121.156 -199.11 125.321 -201.879ZM183.044 -27.5347C172.405 -34.0235 163.903 -39.3232 163.903 
                     -48.7638C163.903 -56.5927 167.995 -66.9423 181.064 -66.9423C190.504 -66.9423 231.219 -43.0565 258.175 -27.2426C268.536 -21.164 276.864 -16.2779 280.603 -14.3995C294.069 -7.63258 310.173 4.9729 310.173 29.9177C310.173 54.5457 297.047 64.5584 293.538 67.2352L293.408 67.3344C290.108 69.8557 223.968 110.192 217.236 114.04C210.503 117.888 205.618 120.276 194.529 120.276C185.012 120.276 171.995 112.458 160.901 105.796C159.069 104.695 157.289 103.626 155.585 102.628C145.111 96.4969 99.1077 70.1914 81.8078 60.299C79.2664 58.8463 77.3445 57.7468 76.246 57.1184C75.0572 56.438 73.9322 55.7812 72.8577 55.1535C66.174 51.2508 61.4518 48.493 55.6516 48.493C48.919 48.493 35.9811 54.0661 35.9811 67.8654C35.9811 79.8576 45.8013 85.3363 53.702 89.744C54.8925 90.408 56.0395 91.0479 57.1027 91.6823C59.5445 93.1386 69.8674 98.9699 83.4583 106.647C115.056 124.497 164.321 152.325 173.276 158.356C186.081 166.981 192.021 168.904 195.784 168.904C198.786 168.904 201.326 167.362 205.602 164.767C206.683 164.11 207.876 163.386 209.217 162.603C213.546 160.069 255.518 134.104 286.681 114.825C303.259 104.568 316.779 96.2049 319.942 94.2696C321.22 93.4876 322.526 92.7503 323.828 92.0161C331.805 87.5129 339.606 83.1095 339.606 69.1923V-1.79341C339.606 -28.0651 374.992 -28.5635 374.992 -1.79341V64.4151C374.992 64.7931 374.993 65.1935 374.995 65.6156C375.049 76.9069 375.175 103.662 341.198 124.191C334.963 127.957 327.527 132.33 319.347 137.14C302.219 147.213 281.828 159.204 262.385 171.559C258.073 174.299 253.841 177.112 249.674 179.882C230.868 192.383 213.394 204 195.851 204C179.086 204 157.208 190.962 133.159 176.63C130.452 175.017 127.717 173.387 124.959 171.758C92.3102 152.469 57.4917 132.053 41.1953 123.593C40.6567 123.318 40.092 123.033 39.5044 122.737C26.0527 115.948 0.601926 103.103 0.601926 66.8705C0.601926 29.0553 32.0872 12.1384 55.2556 12.1384C71.7231 12.1384 93.0686 24.7245 115.407 37.8966C118.095 39.4812 120.796 41.0747 123.506 42.6556C136.183 50.0515 148.761 57.5738 159.817 64.1847C179.66 76.0511 194.595 84.9819 196.378 84.9819C197.279 84.9819 203.688 81.1186 213.456 75.2286C219.267 71.7257 226.265 67.5061 234.002 62.9564C236.373 61.5611 238.858 60.1393 241.379 58.6957C257.275 49.5961 274.662 39.6432 274.662 30.3157C274.662 20.5859 260.605 13.5711 242.146 4.35783C237.949 2.26347 233.524 0.0548096 228.985 -2.32501C212.437 -11.0006 195.878 -19.7083 183.044 -27.5347Z" fill="#57C3D8"/>
                </g>
                <defs>
                    <clipPath id="clip0_1105_4147">
                        <rect width="375" height="214" fill="white"/>
                    </clipPath>
                </defs>
            </svg>
            <div class="container">
                <div class="main d-lg-flex justify-between items-center">
                    <h1>${course.title}</h1>
                    <div>
                        <p class="day"><b>${course.day} ${course.index == 2 ? 's' : ''} </b> 
                            ${course.index == 0 || course.index == 2 || course.index == 3 ? '(9am to 4pm)' : ''}
                        </p>
                        <p class="pr">${course.price}</p>
                    </div>
                </div>

                ${course.index == 1 || course.index == 2 ? '<div class="flex-center offer_certificate">'+
                '<svg class="mr-10" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">'+
                '<path d="M18.75 8.125C18.4688 7.90625 18.0938 7.59375 18.0625 7.40625C18 7.1875 18.125 6.71875 18.2188 6.34375C18.375 5.625 18.5938 4.8125 18.125 4.15625C17.6562 3.5 16.8125 3.4375 16.0312 3.375H16C15.625 3.34375 15.1562 3.3125 15 3.1875C14.8125 3.0625 14.625 2.53125 14.5 2.28125C14.2188 1.625 13.9062 0.78125 13.0938 0.53125C12.9375 0.5 12.8125 0.46875 12.6562 0.46875C12.0625 0.46875 11.5 0.8125 11 1.125C10.6875 1.3125 10.25 1.59375 10.0312 1.59375C9.8125 1.59375 9.40625 1.34375 9.09375 1.15625L9.0625 1.125C8.5625 0.8125 8 0.46875 7.40625 0.46875C7.25 0.46875 7.09375 0.5 6.96875 0.53125C6.1875 0.78125 5.875 1.5625 5.5625 2.28125C5.4375 2.625 5.25 3.0625 5.0625 3.1875C4.90625 3.3125 4.4375 3.34375 4.0625 3.375H4C3.25 3.4375 2.4375 3.5 1.96875 4.15625C1.5 4.8125 1.6875 5.65625 1.875 6.375V6.40625C1.96875 6.78125 2.0625 7.21875 2 7.4375C1.9375 7.625 1.59375 7.90625 1.3125 8.15625L1.25 8.125C0.6875 8.59375 0 9.1875 0 10C0 10.8438 0.65625 11.375 1.25 11.875C1.53125 12.0938 1.90625 12.4062 1.9375 12.5938C2 12.7812 1.90625 13.25 1.8125 13.625V13.6562C1.625 14.375 1.4375 15.2188 1.90625 15.8438C2.375 16.5 3.21875 16.5625 3.9375 16.625H3.96875C4.34375 16.6562 4.84375 16.6875 5 16.8125C5.15625 16.9375 5.34375 17.375 5.5 17.75C5.78125 18.4375 6.125 19.25 6.90625 19.4688C7.0625 19.5 7.1875 19.5312 7.34375 19.5312C7.9375 19.5312 8.5 19.1875 9 18.875C9.34375 18.6562 9.75 18.4062 10 18.4062C10.2188 18.4062 10.6875 18.6875 10.9688 18.875C11.4375 19.1562 12.0313 19.5312 12.625 19.5312C12.7812 19.5312 12.9375 19.5 13.0625 19.4688C13.8438 19.2188 14.1875 18.375 14.4688 17.7188C14.5938 17.4375 14.7812 16.9375 14.9688 16.8125C15.125 16.6875 15.625 16.6562 16.0312 16.625C16.7812 16.5625 17.625 16.5 18.0938 15.8438C18.5625 15.1875 18.375 14.375 18.1875 13.625C18.0938 13.2812 17.9688 12.7812 18.0625 12.5625C18.125 12.375 18.5 12.0625 18.75 11.8438C19.3438 11.3438 20 10.7812 20 9.96875C20 9.15625 19.3438 8.59375 18.75 8.125ZM15.8438 10C15.8438 13.2188 13.2188 15.8438 10 15.8438C6.78125 15.8438 4.15625 13.2188 4.15625 10C4.15625 6.78125 6.78125 4.15625 10 4.15625C13.2188 4.15625 15.8438 6.78125 15.8438 10Z" fill="#0D3B5B"/>'+
                ' <path d="M10 4.9375C7.21875 4.9375 4.9375 7.21875 4.9375 10C4.9375 12.7812 7.21875 15.0625 10 15.0625C12.7812 15.0625 15.0625 12.7812 15.0625 10C15.0625 7.21875 12.7812 4.9375 10 4.9375ZM8.96875 12.125C8.875 12.125 8.75 12.0938 8.6875 12L7.28125 10.625C7.125 10.4688 7.125 10.2188 7.28125 10.0625C7.34375 10 7.46875 9.9375 7.5625 9.9375C7.65625 9.9375 7.75 9.96875 7.84375 10.0625L8.96875 11.1875L12.1875 7.96875C12.25 7.90625 12.3438 7.84375 12.4688 7.84375C12.5938 7.84375 12.6562 7.875 12.75 7.96875C12.9062 8.125 12.9062 8.375 12.75 8.53125L9.25 12.0312C9.15625 12.0938 9.0625 12.125 8.96875 12.125Z" fill="#0D3B5B"/></svg>'+
                ' <p>First Aid at Work Certificate is provided</p> </div>': ''}
            
                <p>${course.index == 3 ? course.textOffer.replace('Book now by calling our office on 0141 889 4516.', '') : course.textOffer}</p>
                <div class="d-lg-flex column-reverse offer_block">
                    <div class="course_approval ${course.index != 0 && course.index != 3 ? 'd-none' : ''}" >
                    ${course.index == 0 ? 
                        '<p class="flex-center"><span class="mr-8"> This course is approved by</span>  <img src="' + dir + 'faib.png" alt="image" class="mr-8"><span class="mr-8">and</span> <img src="' + dir + 'sia.png" alt="image"> </p>' :
                        course.index == 3 ?
                        '<p class="flex-center"><span class="mr-8">This course is approved by</span> <img src="' + dir + 'ofsted.png" class="img-ofsted" alt="image"> </p><p class="flex-center"><span class="mr-8">and accredited by</span><img src="' + dir + 'qualsafe.png" alt="image"></p>' : 
                        ''
                    }
                    </div>
                    <div class="d-lg-flex">
                        <div>
                            <a href="${course.linkStart}" class="btn btn--green">VIEW START DATES & VENUES</a>
                            <p class="or text-center">or</p>
                            <a href="/courses/on-site-first-aid-training/" class="flex-center book_onsite underline">
                                <svg class="mr-10" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <g clip-path="url(#clip0_1105_4162)">
                                        <path d="M18.2941 14.0222C18.0104 13.8664 17.6542 13.9701 17.4984 14.2537C17.3426 14.5373 17.4462 14.8935 17.7298 15.0493C18.4278 15.4328 18.8281 15.8578 18.8281 16.2156C18.8281 16.6531 18.2082 17.3312 16.4682 17.9224C14.7493 18.5064 12.4521 18.828 10 18.828C7.54785 18.828 5.2507 18.5064 3.53176 17.9224C1.7918 17.3313 1.17188 16.6531 1.17188 16.2156C1.17188 15.8578 1.57219 15.4328 2.27016 15.0493C2.55379 14.8935 2.65738 14.5372 2.50156 14.2536C2.34574 13.97 1.98961 13.8664 1.7059 14.0222C0.927695 14.4497 0 15.1773 0 16.2156C0 17.0114 0.547344 18.1461 3.15477 19.032C4.99195 19.6562 7.42297 19.9999 10 19.9999C12.577 19.9999 15.008 19.6562 16.8452 19.032C19.4527 18.1461 20 17.0114 20 16.2156C20 15.1773 19.0723 14.4497 18.2941 14.0222Z" fill="#0D3B5B"/>
                                        <path d="M5.57586 17.0755C6.76531 17.4115 8.33637 17.5966 9.99961 17.5966C11.6629 17.5966 13.2339 17.4115 14.4234 17.0755C15.8786 16.6644 16.6164 16.0693 16.6164 15.3069C16.6164 14.5445 15.8786 13.9495 14.4234 13.5384C14.1003 13.4471 13.749 13.3671 13.3755 13.2988C13.1726 13.6493 12.9601 14.01 12.7379 14.3812C13.1513 14.4432 13.5395 14.5193 13.892 14.6091C14.9629 14.8818 15.3541 15.1889 15.4346 15.307C15.3541 15.425 14.9629 15.7321 13.892 16.0048C12.8784 16.263 11.5742 16.4103 10.2007 16.4234C10.1341 16.4284 10.0671 16.4311 9.99961 16.4311C9.93207 16.4311 9.86508 16.4284 9.79852 16.4234C8.42496 16.4103 7.12082 16.263 6.10719 16.0048C5.03625 15.7321 4.64504 15.425 4.56461 15.307C4.64504 15.1889 5.03629 14.8818 6.10723 14.6091C6.45973 14.5193 6.84789 14.4432 7.26137 14.3812C7.03914 14.0101 6.8266 13.6493 6.62375 13.2988C6.25023 13.3671 5.89887 13.4471 5.57586 13.5384C4.12066 13.9495 3.38281 14.5445 3.38281 15.3069C3.38281 16.0693 4.12066 16.6644 5.57586 17.0755Z" fill="#0D3B5B"/>
                                        <path d="M10.0016 15.2591C10.5232 15.2591 10.997 14.9934 11.2691 14.5482C13.1757 11.4288 15.4484 7.31758 15.4484 5.44684C15.4484 2.44344 13.005 0 10.0016 0C6.99813 0 4.55469 2.44344 4.55469 5.44684C4.55469 7.31758 6.82746 11.4288 8.73406 14.5482C9.00617 14.9934 9.48 15.2591 10.0016 15.2591ZM7.81223 5.07285C7.81223 3.8657 8.79437 2.88359 10.0016 2.88359C11.2088 2.88359 12.1909 3.8657 12.1909 5.07285C12.1909 6.28004 11.2088 7.26215 10.0016 7.26215C8.79437 7.26215 7.81223 6.28008 7.81223 5.07285Z" fill="#0D3B5B"/>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1105_4162">
                                            <rect width="20" height="20" fill="white"/>
                                        </clipPath>
                                    </defs>
                                </svg>
                                Book this course onsite at your venue
                            </a>
                        </div>
                        ${reviewBlock()}
                    </div>
                </div>
            </div>
        </section>
        <div class="swiper_course swiper-l">
            <div class="swiper-wrapper">${slides}</div>
            <div class="swiper-pagination"></div>
            <div class="d-lg-flex d-none swiper-btns">
                <button type="button" class="swiper-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="46" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5617 18.1533L14.582 16.133L8.44933 10.0003L14.582 3.86761L12.5617 1.8473L4.40872 10.0003L12.5617 18.1533Z" fill="#0D3B5B"/>
                    </svg>
                </button>
                <button type="button" class="swiper-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="46" viewBox="0 0 20 20" fill="none">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43827 18.1533L5.41797 16.133L11.5507 10.0003L5.41797 3.86761L7.43827 1.8473L15.5913 10.0003L7.43827 18.1533Z" fill="#0D3B5B"/>
                    </svg>
                </button>
            </div>
        </div>
        <div class="d-flex column-reverse flex-lg-row container">
            <div class="left_content">
                ${course.index != 1 ? `
                <div class="work_certificate d-lg-flex">
                    <div class="${course.index == 4 ? 'd-flex items-center' : ''}">
                        <img src="${dir}${course.index == 4 ? 'certification' : 'faib2'}.svg" alt="faib">
                        <h2 class="${course.index == 4 ? 'd-lg-none' : 'd-none'}">Certification</h2>
                    </div>
                    <div>
                        <h2 class="${course.index == 4 ? 'd-lg-block d-none' : ''}">
                            ${course.index == 4 ? 'Certification' : 
                              course.index == 3 ? 'Emergency Paediatric First Aid Certification' : 
                                'First Aid at Work Certificate'
                            }
                        </h2>
                        <p>${course.index == 3 ? 'Upon completion of the course, participants will receive a first aid certificate from the FAIB indicating that they have completed the training and are qualified to provide emergency first aid care for infants and children.' : 
                            course.index == 4 ? 
                                'Successful candidates will receive a personalised QA Level 3 Award in Paediatric First Aid (RQF) e-Certificate as soon as their results are submitted.' : 
                                'Our First Aid at Work Certificate is accredited by the First Aid Industry Body (FAIB), so you can rest assured you and your team are in good hands.'}
                        </p>
                    </div>
                </div>`: ''}
               
                <div class="content">${accordion}</div>
                <div class="highlighted d-flex items-center">
                    <img src="${dir}logo.svg" alt="logo">
                    <p>${data[course.index]['bookOnsite']}</p>
                </div>
                ${course.index == 1 ? '<div class="for_qroup">For group bookings, we can deliver this course <a href="/courses/on-site-first-aid-training/" class="underline"><b>on site at your venue</b></a>.</div>':''}
            
                ${needDifferentHtml}
                <div class="trainers" id="trainers">
                    <h2>Meet our qualified trainers</h2>
                    <p>All our trainers obtain FAW certificates, as well as Teaching and Assessing Qualifications from City and Guilds, TQUK, Highfield, SQA, etc.</p>
                    <div class="d-flex flex-wrap">${itemsTrainers}</div>
                </div>
                ${needCourse}
                <div class="trustpilot" id="reviews">
                    <img src="${dir}trustpilot.svg" alt="trustpilot">
                    <h2>More than 20,000 customers already trust us</h2>
                    <div class="slider_trustpilot swiper-l">
                        <div class="swiper-wrapper">${slidesTrustpilot}</div>
                        <div class="swiper-pagination"></div>

                        <div class="d-lg-flex d-none swiper-btns">
                            <button type="button" class="swiper-prev">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="46" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5617 18.1533L14.582 16.133L8.44933 10.0003L14.582 3.86761L12.5617 1.8473L4.40872 10.0003L12.5617 18.1533Z" fill="#0D3B5B"/>
                                </svg>
                            </button>
                            <button type="button" class="swiper-next">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="46" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.43827 18.1533L5.41797 16.133L11.5507 10.0003L5.41797 3.86761L7.43827 1.8473L15.5913 10.0003L7.43827 18.1533Z" fill="#0D3B5B"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="brands">
                    <h2>Clients who trust us with their training</h2>
                    <img src="${dir}${window.matchMedia("(min-width: 992px)").matches ? 'brands-desk' : 'brands'}.png">
                </div>
                <div class="related_courses">
                    <h2>Related Courses</h2>
                    <div class="d-lg-flex flex-wrap">
                        ${course.index == 0 ? 
                            '<div class="card">'+
                                '<img src="'+dir+'slider/slider_5.png" alt="image">'+
                                '<p class="tag"><b>Online & Classroom</b> </p>'+
                                '<p class="title"><b>First aid at work course</b> </p>'+
                                '<p><b> Level:</b> Beginner</p>'+
                                '<p><b> Length:</b> 6 hours e-learning + 2 days practical</p>'+
                                '<a href="/courses/first-aid-at-work-course/" class="btn">Learn more</a>'+
                            '</div>' : ''
                        }
                        ${course.index == 1 || course.index == 2 ? 
                            '<div class="card">'+
                                '<img src="'+dir+'slider/slider_0.png" alt="image">'+
                                '<p class="tag"><b>Classroom</b> </p>'+
                                '<p class="title"><b>1-Day Emergency First Aid at Work Course (EFAW) </b> </p>'+
                                '<p><b> Level:</b> Beginner</p>'+
                                '<p><b> Length:</b> 1 day</p>'+
                                '<a href="/courses/one-day-emergency-first-aid-at-work-course/" class="btn">Learn more</a>'+
                            '</div>' : ''
                        }
                        
                        ${course.index == 3 ? 
                            '<div class="card">'+
                                '<img src="'+dir+'slider/slider_21.png" alt="image">'+
                                '<p class="tag"><b>Classroom + E-learning</b> </p>'+
                                '<p class="title"><b>Paediatric first aid course (12 hour) Level 3</b> </p>'+
                                '<p><b> Level:</b> Beginner</p>'+
                                '<p><b> Length:</b> 1 day practical + 1 day e-learning</p>'+
                                '<a href="/courses/paediatric-first-aid-course/" class="btn">Learn more</a>'+
                            '</div>' : ''
                        }
                        ${course.index == 4 ? 
                            '<div class="card">'+
                                '<img src="'+dir+'slider/slider_16.png" alt="image">'+
                                '<p class="tag"><b>Classroom</b> </p>'+
                                '<p class="title"><b>Emergency Paediatric First Aid Course</b> </p>'+
                                '<p><b> Level:</b> Beginner</p>'+
                                '<p><b> Length:</b> 1 day</p>'+
                                '<a href="/courses/emergency-paediatric-first-aid-course/" class="btn">Learn more</a>'+
                            '</div>' : ''
                        }
                        <div class="card">
                            <img src="${dir}image-3.png" alt="image">
                            <p class="tag"><b>Classroom</b> </p>
                            <p class="title"><b>On Site First Aid Training Nationwide</b> </p>
                            <p><b> Level:</b> Beginner</p>
                            <p><b> Length:</b> Varies</p>
                            <a href="/courses/on-site-first-aid-training/" class="btn">Learn more</a>
                        </div>
                    </div>
                </div>
                <div class="accreditations_block">
                    <h2>Our accreditations</h2>
                    <img src="${dir}accreditations${media ? '3' : ''}.svg" alt="accreditations">
                </div>
            </div>
            <div class="navigation_content">
                <p><b>Content</b></p>
                <ul>
                    <li><a href="#modules-breakdown">Modules breakdown</a></li>
                    ${
                        course.index == 3 || course.index == 4 ? 
                        '<li><a href="#exams-and-assessment">Exams and assessment</a></li>' : 
                        course.index == 2 ? '<li><a href="#construction-faw-exams-and-assessment">Construction FAW exams and assessment</a></li>' :
                        '<li><a href="#efaw-exams-and-assessment">EFAW exams and assessment</a></li>'
                    }
                    
                    <li><a href="#entry-requirements">Entry requirements</a></li>
                    ${
                        course.index == 1 ? 
                        '<li><a href="#first-aid-at-work-qualification">First Aid at Work Qualification</a></li>' : ''
                    }
                    
                    <li><a href="#course-overview">Course overview</a></li>
                    <li><a href="#trainers">Trainers</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href=".faqs">FAQ</a></li>
                </ul>
                <a href="${course.linkStart}" class="btn btn--green d-lg-block d-none">VIEW START DATES & VENUES</a>
            </div>
        </div>
       
        
     `
}


let init = setInterval(() => {
    for (let i = 0; i < arrlinks.length; i++) {
        if (window.location.href.includes(arrlinks[i]) && 
            document.querySelector('section.banner h1') &&
            document.querySelector('header.course .course-buttons .simple-btn') &&
            document.querySelector('#course-form') &&
            (document.querySelector('.faqs') || i == 3) &&
            document.querySelector('.accreditations__container')
        ) {
            clearInterval(init)


            //add script/link Swiper slider
            let scriptSwiper = document.createElement('script');
            scriptSwiper.src = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js';
            document.body.appendChild(scriptSwiper);

            let linkSwiper = document.createElement('link');
            linkSwiper.href = 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css';
            linkSwiper.rel = 'stylesheet';
            document.head.appendChild(linkSwiper);


            let scriptSeamless = document.createElement('script');
            scriptSeamless.async = true;
            scriptSeamless.src = 'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js';
            document.body.appendChild(scriptSeamless)

            let course = {};

            course.title = document.querySelector('section.banner h1').innerText;
            course.day = document.querySelector('header.course .course-length').innerText;
            course.price = document.querySelector('header.course .course-cost').innerHTML;
            course.index = i;
            course.textOffer = document.querySelector('header.course .course-intro').innerText.replace('Emergency First Aid at Work (EFAW) qualification','<b>Emergency First Aid at Work (EFAW) qualification</b>')
            course.linkStart = document.querySelector('header.course .course-buttons .btn').href;
        
            document.body.insertAdjacentHTML('afterbegin', style)
            document.querySelector('header.course.is-course-form').insertAdjacentHTML('beforebegin', courseInit(course))
            

            if (!media) {

                const offerBtn = document.querySelector('.offer_section .btn');
                const stickyBtn = document.querySelector('.sticky_btn');

                function addActiveClass() {
                    if (offerBtn.getBoundingClientRect().bottom <= 0) {
                        stickyBtn.classList.add('active');
                    } else {
                        stickyBtn.classList.remove('active');
                    }
                }
            }

            // Додаємо прослуховувач подій для виклику функції при прокрутці
            window.addEventListener('scroll', addActiveClass);

            if (i != 3) {
                document.querySelector('.related_courses').after(document.querySelector('.faqs'))
            } else {
                document.querySelector('.related_courses').insertAdjacentHTML('afterend', `
                <section class="faqs">
                    <div class="container">
                        <h2>Frequently Asked Questions</h2>    
                        <div class="faqs__list"> 
                            ${i == 3 ? `
                                <div class="faqs__entry">
                                    <h5 class="is-open">Can you take this class online?</h5>
                                    <p style="display: block;">You can’t take this class online. It’s a 1-day practical training course with a practical assessment.</p>
                                </div>
                                <div class="faqs__entry">
                                    <h5 class="">Is this OFSTED approved?</h5>
                                    <p>If you want an OFSTED approved course, you should undertake our <a href="https://www.skillstg.co.uk/courses/paediatric-first-aid-course/" class="underline"><b>2-day Level 3 Award Blended Paediatric First Aid Course.</b></a></p>
                                </div>
                                <div class="faqs__entry">
                                    <h5 class="">Who is this course suitable for?</h5>
                                    <p>This course is suitable for people who work with children or minors such as nannies or workers / teachers at schools. Child minders or those working alone on the Compulsory Ofsted Register must take the Full Paediatric First Aid qualification.</p>
                                </div>
                            ` : 
                            i == 4 ? `
                            <div class="faqs__entry">
                                <h5 class="is-open">Which Course Do I Need?</h5>
                                <p style="display: block;">Our Emergency Paediatric First Aid Course is generally suitable for nannies, childminders, au pairs and nursery staff who work in Scotland.<br><br>
                                    Our Combined Emergency Paediatric First Aid Course & Emergency First Aid at Work Course is suitable for primary school and highschool staff.<br><br>
                                    For those who need OFSTED Approval, such as some nannies or nursery staff in England or Wales, you’ll require our OFSTED approved 2-Day Blended Paediatric First Aid Course.
                                </p>
                            </div>
                            `: ''}   
                        </div>
                    </div>
                </section>`)

                var question = $('.faqs__entry h5');
                var answer = $('.faqs__entry p');
                question.on('click', function() {
                    var thisQuestion = $(this);
                    var thisAnswer = thisQuestion.siblings('p');
                    var isOpen = thisQuestion.hasClass('is-open');
                    question.removeClass('is-open');
                    answer.slideUp(300);
                    if (!isOpen) {
                        thisQuestion.addClass('is-open');
                        thisAnswer.slideDown(300)
                    }
                });
                
            }

            document.querySelector('.faqs').insertAdjacentHTML('afterend', `
            <div class="d-lg-flex items-center form_course">
                ${reviewBlock('d-lg-block')}
            </div>`)
           

            document.querySelector('.form_course .review_block').before(document.querySelector('#course-form'))
            
            document.querySelector('.course-form h2').innerHTML = `Any unanswered questions? <span>Don't hesitate to ask for a call, and we'll be delighted to provide a consultation</span>`
            document.querySelectorAll('.navigation_content ul a').forEach(item => {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    let hrefSpt = item.href.split('/');
                    let query = hrefSpt[hrefSpt.length - 1];

                    const topOffset = e.target.offsetHeight;
                    const elementPosition = document.querySelector(query).getBoundingClientRect().top;
                    const offsetPosition = elementPosition - topOffset - (!media ? 57 : 0);

                    seamless.polyfill();
                    seamless.scrollBy(window, { behavior: "smooth", top: offsetPosition, left: 0 });
                    
                })
            })
            //init Swiper slider
            const waitSwiper = setInterval(() => {
                if(typeof Swiper == 'function') {
                    clearInterval(waitSwiper)

                    new Swiper(document.querySelector('.swiper_course'), {
                        // loop: true,
                        slidesPerView: 1,
                        spaceBetween: 5,
                        mousewheel:  {
                            enabled: true,
                            eventsTarget: '.swiper_course .swiper-wrapper', 
                            releaseOnEdges: true, 
                        },
                        pagination: {
                            el: ".swiper_course .swiper-pagination",
                            dynamicBullets: true,
                            clickable: true
                        },
                        breakpoints: {
                            992: {
                                slidesPerView: 2.6,
                                spaceBetween: 29,
                                navigation: {
                                    nextEl: '.swiper_course .swiper-next',
                                    prevEl: '.swiper_course .swiper-prev',
                                }
                            },
                            1600: {
                                slidesPerView: 3.6,
                                spaceBetween: 29,
                                navigation: {
                                    nextEl: '.swiper_course .swiper-next',
                                    prevEl: '.swiper_course .swiper-prev',
                                }
                            }
                        }

                    });
                    new Swiper(document.querySelector('.slider_trustpilot'), {
                        slidesPerView: 1,
                        // spaceBetween: 5,
                        // centeredSlides: true,
                        mousewheel:  {
                            enabled: true,
                            eventsTarget: '.slider_trustpilot .swiper-wrapper', 
                            releaseOnEdges: true, 
                        },
                        pagination: {
                            el: ".slider_trustpilot .swiper-pagination",
                            dynamicBullets: true,
                            clickable: true
                        },
                        breakpoints: {
                            992: {
                                slidesPerView: 2.5,
                                spaceBetween: 5,
                                navigation: {
                                    nextEl: '.slider_trustpilot .swiper-next',
                                    prevEl: '.slider_trustpilot .swiper-prev',
                                }
                            }
                        }
                    })
    
                    
                    if (!media) {
                        document.querySelectorAll('.slider_trustpilot .swiper-slide').forEach(item => {
                            item.setAttribute('data-height', item.clientHeight + 54 + 'px');
                        })
                        
                        document.querySelector('.slider_trustpilot').style = 'height: ' +  document.querySelectorAll('.slider_trustpilot .swiper-slide')[0].dataset.height;
                    }

                   
                }
            });
            if (document.querySelector('.exp-loading')) {
                document.querySelector('.exp-loading').remove()
            }
        }  
    }
})

let testimonial = setInterval(() => {
    if (document.querySelector('.testimonial') &&
        document.querySelector('.trustpilot')
    ) {
        clearInterval(testimonial)
        document.querySelector('.trustpilot').after(document.querySelector('.testimonial'))
    }
});

let optionMut = {
    childList: true,
    subtree: true,
    attributes: true
}

//add class for prev-prev-prev bullet
let mut = new MutationObserver(function (muts) {
    if (document.querySelectorAll('.swiper-l span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev')) {
        mut.disconnect()
        
        document.querySelectorAll('.swiper-l span.swiper-pagination-bullet.swiper-pagination-bullet-active-prev-prev').forEach(item => {
            if (item.previousElementSibling) {
               
                if (item.parentElement.querySelector('.swiper-pagination-bullet.siblingsPrev')) {
                    item.parentElement.querySelector('.swiper-pagination-bullet.siblingsPrev').classList.remove('siblingsPrev')
                }
                item.previousElementSibling.classList.add('siblingsPrev')
            }
        });
    }
    mut.observe(document, optionMut)
})
mut.observe(document, optionMut)

const record = setInterval(() => {
    if (typeof clarity === "function") {
      clearInterval(record);
      clarity("set", "exp_improvements_course_page", "variant_1");
    }
}, 100);