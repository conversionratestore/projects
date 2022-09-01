const obj =  {
    '.de/': {
        'base': {
            'spanTitle': 'Du wirst weiter marschieren, als die 99% aller Menschen es je tun werden!',
            'btnMain': 'Strecke auswählen',
            'btnRegister': 'Anmelden',
            'titleText': 'Event-Infos',
            'modalTitle': 'Was ist Extremwandern?',
            'modalText': `Extremwandern steht vor allem für das Bezwingen langer Strecken zu Fuß. Es geht nicht um die Geschwindigkeit, sondern darum im Ziel anzukommen (bei uns nach 30 - 100 KM). </br> </br>Extremwandern ist Trendsport. Vor zehn Jahren hat noch niemand von Mammutmärschen gesprochen. Seitdem haben wir das Wandern schmerzhaft langer Strecken salonfähig gemacht.  </br></br>Deine Freunde werden dich für verrückt erklären, aber das macht es doch nur noch interessanter, oder? </br> </br> `,
            'modalBtn': 'Ich bin bereit!',
        },
        'mammutmarsch-dortmund': {
            'title': '30/55 KM Mammutmarsch Dortmund',
            'title2': 'Mammutmarsch Dortmund — 30/55 km',
            'date1': '8. Oktober 2022',
            'date2': '08/10/2022',
            'place': 'Phoenixplatz 4 , 44263 Dortmund (nahe Warsteiner Music Hall).',
            'dateInfo': '<p><b>Sonntag, 08. Oktober 2022</b></p><p>Startzeit: 07:30 - 09:00 Uhr <b>(55 km)</b></p><p>Startzeit: 09:30 - 11:30 Uhr <b>(30 km)</b></p><p class="text-up lh-20">Die Startgruppenauswahl beginnt wenige Wochen vor dem Event.</p>',
            'difficulty': '<p><b>Schwierigkeit</b></p><p>Challenger <b>(30 km)</b> Pro <b>(55 km)</b></p>',
            'route': '<p><b>30/55 KM</b></p><p> Eindrucksvolle Industrielandschaften und viel Natur</p>',
            'text': `Für uns war immer klar: Dortmund hat viel mehr zu bieten als den BVB. Als Ruhrgebietsstadt, gibt es hier Industriekultur ohne Ende umringt von wunderschöner Natur.</br></br>Nach zwei überrangenden Events war für uns klar: Wir kommen auch dieses Jahr nach Dortmund!</br></br>Mammutmarsch bedeutet immer auch Grenzerfahrung. Bei wanderst du eine Strecke, an die sich 99% aller Menschen in ihrem ganzen Leben nicht wagen werden. Und egal, wie anstrengend es wird, im Ziel bekommst du einen Heldenempfang inklusive Medaille und kühlem Finisher-Beer.`,
        }
    }
}

let style = `
<style>
    /*base*/
    .wrapper-event * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        font-family: 'Roboto', sans-serif;
    }
    .wrapper-event {
        margin-top: -40px;
        color: #111111;
    }
    .wrapper-event .date {
        letter-spacing: 0.5px;
        text-transform: uppercase;
        margin: 4px 0;;
    }
    .wrapper-event h1 {
        font-size: 35px;
        line-height: 40px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
        margin-bottom: 4px;
        font-family: 'Bebas Neue', sans-serif;
    }
    .wrapper-event .btn {
        background: #FCE300;
        border-radius: 20px;
        padding: 0 42px;
        line-height: 40px;
        border: none;
        font-size: 16px;
        letter-spacing: 0.02em;
        color: #111111;
        font-weight: 700;
    }
    .wrapper-event .link {
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        display: block;
        color: #111111;
        margin-bottom: 0;
        cursor: pointer;
    }
    .wrapper-event b {
        font-weight: 500;
    }
    /*event section*/
    .event-section {
        background: url("https://conversionratestore.github.io/projects/mammutmarsch/img/image-main.png") no-repeat center / cover;
        padding: 28px 16px 40px;
        color: #FFFFFF;
    }
    .event-section .date {
        color: #CCCCCC;
        text-align: center;
    }
    .event-section .btn {
        margin: 14px 0;
        width: 100%;
    }
    .event-section .link {
        opacity: 0.8;
        color: #fff;
    }
    /*info section*/
    .info-section {
        padding: 16px;
        background: #FFFFFF;
    }
    .info-section .date {
        color: #333333;
    }
    .info-section .tab {
        border-radius: 4px;
        padding: 6px 8px;
        margin-left: 4px;
        font-size: 12px;
        line-height: 20px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
        color: #FFFFFF;
    }
    .info-section .tab p {
        margin-left: 4px;
    }
    .info-section h2 {
        margin: 32px 0 20px;
        font-size: 30px;
        line-height: 36px;
        text-transform: uppercase;
        font-weight: 400;
        color: #333333;
        font-family: 'Bebas Neue', sans-serif;
    }
    .info-section .list li{
        margin-bottom: 16px;
        color: #111111;
    }
    .info-section .list p {
           margin-bottom: 4px;
    }
    .info-section .list p.text-up {
        padding-top: 4px;
    }
    .info-section .list svg {
        margin-right: 12px;
    }
    /*modal*/
    .modal-m {
        position: fixed;
        left: 0;
        bottom: 0;
        opacity: 0;
        pointer-events: none;
        color: #333333;
        transform: translateY(100px);
        transition: all 0.3s ease;
    }
    .modal-m.active {
        opacity: 1;
        pointer-events: auto;
        transform: translateY(0);
    }
    .modal-m .container {
        background: #FFFFFF;
        border-radius: 20px 20px 0 0;
        padding: 16px 16px 20px;
        transition: all 0.3s ease;
        overflow-y: auto;
    }
    .modal-close {
        display: block;
        margin-left: auto;
        height: 16px;
        margin-bottom: 16px;
    }
    .modal-m img {
        width: 100%;
        margin-bottom: 20px;
    }
    .modal-m h1 {
        color: #111111
    }
    .modal-m .btn {
        margin: 0 auto;
        display: block;
    }
    /*text transform*/
    .text-up {
        text-transform: uppercase;
    }
    .text-center {
        text-align: center;
    }
    .lh-20 {
        line-height: 20px;
    }
    /*color*/
    .bg-green {
        background-color: #008001;
    }
    .bg-red {
        background-color: #E32D33;
    }
    .c-dark-charcoal {
        color: #333333;
    }
    /*flex*/
    .flex {
        display: flex;
    }
    .items-center {
        align-items: center;
    }
    .flex-center-between {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .shrink-0 {
        flex-shrink: 0;
    }
    #main > div > div > div > h2, #main > div > div > div > div.row, .single-product-content > div > div.cshero-product-images-wrap.col-lg-3.col-md-3.col-sm-6.col-xs-12, div.single-product-content > div > div.entry-summary.col-lg-9.col-md-9.col-sm-6.col-xs-12 {
        display: none;
    }
</style>`

for (const key in obj) {
    if (location.href.includes(`${key}`)) {
        for (const keyPlace in obj[key]) {
            if (location.href.includes(`${keyPlace}`)) {
                let cityObj = obj[key][keyPlace],
                    base = obj[key]['base'];

                const page = `
                <div class="wrapper-event">
                    <section class="event-section">
                        <p class="date lh-20">${cityObj.date1}</p>
                        <h1>${cityObj.title}</h1>
                        <p class="text-center lh-20">${base.spanTitle}</p>
                        <button type="button" class="btn">${base.btnMain}</button>
                        <p class="link">${base.modalTitle}</p>
                    </section>
                    <div class="info-section">
                        <div class="flex-center-between">
                            <p class="date">${cityObj.date2}</p>
                            <div class="flex">
                                <div class="tab bg-green flex items-center">
                                    <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.26646 9.962C2.02417 10.094 1.74923 9.86267 1.79819 9.56735L2.31919 6.41412L0.10775 4.17686C-0.0987689 3.96753 0.00857047 3.58488 0.285393 3.54355L3.35994 3.07956L4.73088 0.194994C4.85454 -0.0649978 5.18911 -0.0649978 5.31277 0.194994L6.6837 3.07956L9.75825 3.54355C10.0351 3.58488 10.1424 3.96753 9.93527 4.17686L7.72445 6.41412L8.24545 9.56735C8.29442 9.86267 8.01948 10.094 7.77718 9.962L5.02088 8.45805L2.26584 9.962H2.26646Z" fill="white"/>
                                        <path d="M16.2593 8.01919L13.8187 9.35153L14.2905 6.49563L14.3321 6.24401L14.1528 6.06262L12.1108 3.99678L14.9126 3.57397L15.1755 3.5343L15.2896 3.29419L16.4998 0.747634L17.7101 3.29419L17.8242 3.5343L18.0871 3.57397L20.8884 3.99671L18.8468 6.06267L18.6676 6.24405L18.7092 6.49563L19.1811 9.35199L16.7384 8.01914L16.4989 7.88843L16.2593 8.01919Z" stroke="white"/>
                                        <path d="M27.7378 8.01919L25.2972 9.35153L25.769 6.49563L25.8106 6.24401L25.6313 6.06262L23.5893 3.99678L26.3911 3.57397L26.654 3.5343L26.7681 3.29419L27.9784 0.747634L29.1886 3.29419L29.3028 3.5343L29.5656 3.57397L32.3669 3.99671L30.3253 6.06267L30.1461 6.24405L30.1877 6.49563L30.6596 9.35199L28.2169 8.01914L27.9774 7.88843L27.7378 8.01919Z" stroke="white"/>
                                    </svg>
                                    <p>Challenger</p>
                                </div>
                                <div class="tab bg-red flex items-center">
                                    <svg width="33" height="10" viewBox="0 0 33 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.26646 9.962C2.02417 10.094 1.74923 9.86267 1.79819 9.56735L2.31919 6.41412L0.10775 4.17686C-0.0987689 3.96753 0.00857047 3.58488 0.285393 3.54355L3.35994 3.07956L4.73088 0.194994C4.85454 -0.0649978 5.18911 -0.0649978 5.31277 0.194994L6.6837 3.07956L9.75825 3.54355C10.0351 3.58488 10.1424 3.96753 9.93527 4.17686L7.72445 6.41412L8.24545 9.56735C8.29442 9.86267 8.01948 10.094 7.77718 9.962L5.02088 8.45805L2.26584 9.962H2.26646Z" fill="white"/>
                                        <path d="M13.7445 9.962C13.5022 10.094 13.2273 9.86267 13.2762 9.56735L13.7972 6.41412L11.5858 4.17686C11.3793 3.96753 11.4866 3.58488 11.7634 3.54355L14.838 3.07956L16.2089 0.194994C16.3326 -0.0649978 16.6671 -0.0649978 16.7908 0.194994L18.1617 3.07956L21.2363 3.54355C21.5131 3.58488 21.6204 3.96753 21.4133 4.17686L19.2025 6.41412L19.7235 9.56735C19.7724 9.86267 19.4975 10.094 19.2552 9.962L16.4989 8.45805L13.7439 9.962H13.7445Z" fill="white"/>
                                        <path d="M27.7378 8.01919L25.2972 9.35153L25.769 6.49563L25.8106 6.24401L25.6313 6.06262L23.5893 3.99678L26.3911 3.57397L26.654 3.5343L26.7681 3.29419L27.9784 0.747634L29.1886 3.29419L29.3028 3.5343L29.5656 3.57397L32.3669 3.99671L30.3253 6.06267L30.1461 6.24405L30.1877 6.49563L30.6596 9.35199L28.2169 8.01914L27.9774 7.88843L27.7378 8.01919Z" stroke="white"/>
                                    </svg>
                                    <p>Pro</p>
                                </div>
                            </div>
                        </div>
                        
                        <h2>${cityObj.title2}</h2>
                        <ul class="list">
                            <li class="flex">
                                <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 14C13.6569 14 15 12.6569 15 11C15 9.34315 13.6569 8 12 8C10.3431 8 9 9.34315 9 11C9 12.6569 10.3431 14 12 14Z" stroke="#111111" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M12 3C9.87827 3 7.84344 3.84285 6.34315 5.34315C4.84285 6.84344 4 8.87827 4 11C4 12.892 4.402 14.13 5.5 15.5L12 23L18.5 15.5C19.598 14.13 20 12.892 20 11C20 8.87827 19.1571 6.84344 17.6569 5.34315C16.1566 3.84285 14.1217 3 12 3V3Z" stroke="#111111" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <div class="lh-20">${cityObj.place}</div>
                            </li>
                            <li class="flex">
                                <svg class="shrink-0" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7231 21.7777C19.5335 21.7777 20.3107 21.4558 20.8837 20.8828C21.4568 20.3097 21.7787 19.5325 21.7787 18.7221C21.7787 17.9118 21.4568 17.1346 20.8837 16.5615C20.3107 15.9885 19.5335 15.6666 18.7231 15.6666C17.9127 15.6666 17.1355 15.9885 16.5625 16.5615C15.9895 17.1346 15.6675 17.9118 15.6675 18.7221C15.6675 19.5325 15.9895 20.3097 16.5625 20.8828C17.1355 21.4558 17.9127 21.7777 18.7231 21.7777ZM18.7231 22.9999C19.8577 22.9999 20.9457 22.5493 21.748 21.747C22.5502 20.9448 23.0009 19.8567 23.0009 18.7221C23.0009 17.5876 22.5502 16.4995 21.748 15.6973C20.9457 14.895 19.8577 14.4443 18.7231 14.4443C17.5886 14.4443 16.5005 14.895 15.6983 15.6973C14.896 16.4995 14.4453 17.5876 14.4453 18.7221C14.4453 19.8567 14.896 20.9448 15.6983 21.747C16.5005 22.5493 17.5886 22.9999 18.7231 22.9999Z" fill="#111111"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7232 16.5837C18.8853 16.5837 19.0407 16.6481 19.1553 16.7627C19.2699 16.8773 19.3343 17.0327 19.3343 17.1948V18.4696L19.7664 18.9017C19.8777 19.0169 19.9393 19.1713 19.9379 19.3315C19.9365 19.4918 19.8722 19.645 19.7589 19.7583C19.6456 19.8716 19.4923 19.9359 19.3321 19.9373C19.1719 19.9387 19.0175 19.8771 18.9022 19.7658L18.1121 18.9756V17.1948C18.1121 17.0327 18.1765 16.8773 18.2911 16.7627C18.4057 16.6481 18.5611 16.5837 18.7232 16.5837ZM5.88977 11.3892H4.66754V12.6115H5.88977V11.3892ZM4.66754 10.167C4.34339 10.167 4.03251 10.2958 3.8033 10.525C3.57408 10.7542 3.44531 11.0651 3.44531 11.3892V12.6115C3.44531 12.9356 3.57408 13.2465 3.8033 13.4757C4.03251 13.7049 4.34339 13.8337 4.66754 13.8337H5.88977C6.21393 13.8337 6.52481 13.7049 6.75402 13.4757C6.98323 13.2465 7.112 12.9356 7.112 12.6115V11.3892C7.112 11.0651 6.98323 10.7542 6.75402 10.525C6.52481 10.2958 6.21393 10.167 5.88977 10.167H4.66754ZM10.7787 11.3892H9.55646V12.6115H10.7787V11.3892ZM9.55646 10.167C9.23231 10.167 8.92143 10.2958 8.69222 10.525C8.463 10.7542 8.33423 11.0651 8.33423 11.3892V12.6115C8.33423 12.9356 8.463 13.2465 8.69222 13.4757C8.92143 13.7049 9.23231 13.8337 9.55646 13.8337H10.7787C11.1028 13.8337 11.4137 13.7049 11.6429 13.4757C11.8722 13.2465 12.0009 12.9356 12.0009 12.6115V11.3892C12.0009 11.0651 11.8722 10.7542 11.6429 10.525C11.4137 10.2958 11.1028 10.167 10.7787 10.167H9.55646ZM15.6676 11.3892H14.4454V12.6115H15.6676V11.3892ZM14.4454 10.167C14.1212 10.167 13.8103 10.2958 13.5811 10.525C13.3519 10.7542 13.2232 11.0651 13.2232 11.3892V12.6115C13.2232 12.9356 13.3519 13.2465 13.5811 13.4757C13.8103 13.7049 14.1212 13.8337 14.4454 13.8337H15.6676C15.9918 13.8337 16.3026 13.7049 16.5319 13.4757C16.7611 13.2465 16.8898 12.9356 16.8898 12.6115V11.3892C16.8898 11.0651 16.7611 10.7542 16.5319 10.525C16.3026 10.2958 15.9918 10.167 15.6676 10.167H14.4454ZM5.88977 16.2781H4.66754V17.5004H5.88977V16.2781ZM4.66754 15.0559C4.34339 15.0559 4.03251 15.1847 3.8033 15.4139C3.57408 15.6431 3.44531 15.954 3.44531 16.2781V17.5004C3.44531 17.8245 3.57408 18.1354 3.8033 18.3646C4.03251 18.5938 4.34339 18.7226 4.66754 18.7226H5.88977C6.21393 18.7226 6.52481 18.5938 6.75402 18.3646C6.98323 18.1354 7.112 17.8245 7.112 17.5004V16.2781C7.112 15.954 6.98323 15.6431 6.75402 15.4139C6.52481 15.1847 6.21393 15.0559 5.88977 15.0559H4.66754ZM10.7787 16.2781H9.55646V17.5004H10.7787V16.2781ZM9.55646 15.0559C9.23231 15.0559 8.92143 15.1847 8.69222 15.4139C8.463 15.6431 8.33423 15.954 8.33423 16.2781V17.5004C8.33423 17.8245 8.463 18.1354 8.69222 18.3646C8.92143 18.5938 9.23231 18.7226 9.55646 18.7226H10.7787C11.1028 18.7226 11.4137 18.5938 11.6429 18.3646C11.8722 18.1354 12.0009 17.8245 12.0009 17.5004V16.2781C12.0009 15.954 11.8722 15.6431 11.6429 15.4139C11.4137 15.1847 11.1028 15.0559 10.7787 15.0559H9.55646Z" fill="#111111"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.22223 4.66635C2.22223 4.50428 2.28662 4.34884 2.40122 4.23423C2.51583 4.11962 2.67127 4.05524 2.83335 4.05524H5.88892V2.83301H2.83335C2.34711 2.83301 1.88079 3.02616 1.53697 3.36998C1.19316 3.7138 1 4.18012 1 4.66635V19.3331C1 19.8193 1.19316 20.2857 1.53697 20.6295C1.88079 20.9733 2.34711 21.1665 2.83335 21.1665H15.2115C14.9509 20.7932 14.7518 20.3805 14.6218 19.9442H2.83335C2.67127 19.9442 2.51583 19.8798 2.40122 19.7652C2.28662 19.6506 2.22223 19.4952 2.22223 19.3331V4.66635ZM18.1112 14.487C18.5166 14.429 18.9281 14.429 19.3335 14.487V4.66635C19.3335 4.18012 19.1403 3.7138 18.7965 3.36998C18.4527 3.02616 17.9863 2.83301 17.5001 2.83301H15.6668V4.05524H17.5001C17.6622 4.05524 17.8176 4.11962 17.9322 4.23423C18.0468 4.34884 18.1112 4.50428 18.1112 4.66635V14.487ZM7.11115 4.05524H13.5664V2.83301H7.11115V4.05524Z" fill="#111111"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.4418 2.83301H7.10843V4.66635C7.10843 4.82843 7.04405 4.98387 6.92944 5.09848C6.81484 5.21308 6.6594 5.27747 6.49732 5.27747C6.33524 5.27747 6.1798 5.21308 6.0652 5.09848C5.95059 4.98387 5.8862 4.82843 5.8862 4.66635V2.83301H2.83063C2.50647 2.83301 2.19559 2.96178 1.96638 3.19099C1.73717 3.4202 1.6084 3.73108 1.6084 4.05524V7.11081C1.6084 7.43497 1.73717 7.74585 1.96638 7.97506C2.19559 8.20427 2.50647 8.33304 2.83063 8.33304H17.4974C17.8215 8.33304 18.1324 8.20427 18.3616 7.97506C18.5909 7.74585 18.7196 7.43497 18.7196 7.11081V4.05524C18.7196 3.73108 18.5909 3.4202 18.3616 3.19099C18.1324 2.96178 17.8215 2.83301 17.4974 2.83301H15.664V4.66635C15.664 4.82843 15.5997 4.98387 15.4851 5.09848C15.3704 5.21308 15.215 5.27747 15.0529 5.27747C14.8909 5.27747 14.7354 5.21308 14.6208 5.09848C14.5062 4.98387 14.4418 4.82843 14.4418 4.66635V2.83301Z" fill="#111111"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3358 8.33356H2.22461V7.11133H19.3358V8.33356Z" fill="#111111"/>
                                    <path d="M4.66699 1.61112C4.66699 1.44904 4.73138 1.2936 4.84598 1.17899C4.96059 1.06439 5.11603 1 5.27811 1C5.44019 1 5.59562 1.06439 5.71023 1.17899C5.82484 1.2936 5.88922 1.44904 5.88922 1.61112V4.05558C5.88922 4.21765 5.82484 4.37309 5.71023 4.4877C5.59562 4.60231 5.44019 4.66669 5.27811 4.66669C5.11603 4.66669 4.96059 4.60231 4.84598 4.4877C4.73138 4.37309 4.66699 4.21765 4.66699 4.05558V1.61112ZM13.2226 1.61112C13.2226 1.44904 13.287 1.2936 13.4016 1.17899C13.5162 1.06439 13.6716 1 13.8337 1C13.9958 1 14.1512 1.06439 14.2658 1.17899C14.3804 1.2936 14.4448 1.44904 14.4448 1.61112V4.05558C14.4448 4.21765 14.3804 4.37309 14.2658 4.4877C14.1512 4.60231 13.9958 4.66669 13.8337 4.66669C13.6716 4.66669 13.5162 4.60231 13.4016 4.4877C13.287 4.37309 13.2226 4.21765 13.2226 4.05558V1.61112Z" fill="#111111"/>
                                </svg>
                                <div>${cityObj.dateInfo}</div>
                            </li>
                            <li class="flex">
                                <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.2969 22.5938H18.3281V11.1291C19.1465 10.8388 19.7344 10.0573 19.7344 9.14062C19.7344 7.97752 18.7881 7.03125 17.625 7.03125H14.0449L11.335 5.22469C12.1539 4.73245 12.7031 3.83555 12.7031 2.8125C12.7031 1.26169 11.4414 0 9.89062 0C8.33981 0 7.07812 1.26169 7.07812 2.8125C7.07812 3.54698 7.36144 4.21636 7.82419 4.71783C7.73588 4.79292 7.65347 4.87556 7.57781 4.96537C7.07625 4.5023 6.40669 4.21875 5.67188 4.21875C4.12106 4.21875 2.85938 5.48044 2.85938 7.03125V13.3594C2.85938 14.5225 3.80564 15.4688 4.96875 15.4688H6.375C6.62152 15.4688 6.85805 15.4259 7.07812 15.3478V16.9437L4.61737 20.7244C4.24327 21.2884 4.16859 21.9736 4.38628 22.5938H0.703125C0.314812 22.5938 0 22.9086 0 23.2969C0 23.6852 0.314812 24 0.703125 24H23.2969C23.6852 24 24 23.6852 24 23.2969C24 22.9086 23.6852 22.5938 23.2969 22.5938ZM9.89062 1.40625C10.666 1.40625 11.2969 2.03709 11.2969 2.8125C11.2969 3.58791 10.666 4.21875 9.89062 4.21875C9.11522 4.21875 8.48438 3.58791 8.48438 2.8125C8.48438 2.03709 9.11522 1.40625 9.89062 1.40625ZM4.26562 7.03125C4.26562 6.25584 4.89647 5.625 5.67188 5.625C6.44728 5.625 7.07812 6.25584 7.07812 7.03125V8.4375H4.26562V7.03125ZM6.375 14.0625H4.96875C4.58105 14.0625 4.26562 13.7471 4.26562 13.3594V9.84375H7.07812V13.3594C7.07812 13.7471 6.7627 14.0625 6.375 14.0625ZM6.37359 22.5937C5.81573 22.5938 5.47898 21.9674 5.79005 21.5005C5.79145 21.4984 5.79286 21.4963 5.79422 21.4942L8.37052 17.536C8.44481 17.4218 8.48438 17.2886 8.48438 17.1524V15.4257L9.89062 16.3632V17.5781C9.89062 17.7173 9.8498 17.8522 9.7725 17.9681C9.77119 17.9701 9.76987 17.9721 9.76856 17.974L6.9585 22.2828C6.82739 22.4775 6.609 22.5937 6.37359 22.5937ZM8.43464 22.5938L10.9448 18.7448C11.1751 18.3979 11.2969 17.9946 11.2969 17.5781V21.8906C11.2969 22.1371 11.3398 22.3737 11.4178 22.5938H8.43464ZM16.9219 22.5938H15.3947C15.4727 22.3737 15.5156 22.1371 15.5156 21.8906V16.1719C15.5156 15.465 15.1645 14.8089 14.5763 14.4168L11.2969 12.2305V10.2695L12.2362 10.8957C12.5839 11.1275 12.9885 11.25 13.4062 11.25H16.9219V22.5938ZM17.625 9.84375H13.4062C13.267 9.84375 13.1321 9.80292 13.0162 9.72563C12.613 9.4568 11.3845 8.6378 10.9838 8.37066C10.5172 8.05959 9.89067 8.39639 9.89067 8.9557V8.95781C9.89067 8.95875 9.89067 8.95969 9.89067 8.96058V12.6068C9.89067 12.8419 10.0082 13.0614 10.2038 13.1918L13.7963 15.5869C13.9924 15.7176 14.1095 15.9363 14.1095 16.1719V21.8906C14.1095 22.2783 13.794 22.5938 13.4063 22.5938C13.0186 22.5938 12.7032 22.2783 12.7032 21.8906V16.9245C12.7032 16.6894 12.5857 16.4698 12.3901 16.3394C12.3322 16.3008 8.916 14.0233 8.79755 13.9444C8.60147 13.8136 8.48442 13.595 8.48442 13.3594C8.48442 13.0661 8.48442 6.62358 8.48442 6.32812C8.48442 6.32803 8.48442 6.32794 8.48442 6.32784C8.48442 6.32775 8.48442 6.32766 8.48442 6.32756C8.48386 5.76764 9.11063 5.43136 9.57755 5.74312L13.442 8.31942C13.5575 8.39639 13.6932 8.4375 13.832 8.4375H17.625C18.0127 8.4375 18.3281 8.75292 18.3281 9.14062C18.3281 9.52833 18.0127 9.84375 17.625 9.84375Z" fill="#111111"/>
                                </svg>
                                <div>${cityObj.difficulty}</div>
                            </li>
                            <li class="flex">
                               <svg class="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.8693 10.5C17.5949 10.5023 15.7462 12.3656 15.7485 14.6541C15.7495 15.9042 16.3724 17.3292 17.6001 18.8902C18.4762 20.0044 19.3443 20.7788 19.3809 20.8111C19.6657 21.064 20.0945 21.0623 20.3774 20.8102C20.414 20.7778 21.2807 20.0016 22.1549 18.8859C23.0928 17.6886 23.9985 16.1613 23.9985 14.6461C23.9966 12.3621 22.1618 10.5 19.8693 10.5ZM19.8778 19.2113C18.8531 18.1706 17.2499 16.2122 17.2485 14.6527C17.2471 13.1911 18.4237 12.0014 19.8707 12C21.3258 12 22.4966 13.1849 22.4985 14.6475C22.4999 16.207 20.9001 18.1692 19.8778 19.2113Z" fill="#111111"/>
                                    <path d="M19.8734 13.5C18.8806 13.5 18.3664 14.7094 19.0784 15.4214C19.643 15.9847 20.6055 15.798 20.9136 15.0548C21.2186 14.319 20.6747 13.5 19.8734 13.5Z" fill="#111111"/>
                                    <path d="M3.6277 10.3106C3.9119 10.5629 4.33963 10.5633 4.62426 10.3106C4.66082 10.2783 5.52848 9.50297 6.40363 8.38828C7.62941 6.82594 8.25098 5.40047 8.25098 4.14984C8.25098 1.86187 6.40035 0 4.12598 0C1.8516 0 0.000976562 1.86187 0.000976562 4.14984C0.000976562 5.40047 0.622539 6.82594 1.84832 8.38828C2.72348 9.50297 3.59113 10.2783 3.6277 10.3106ZM4.12598 1.5C5.57348 1.5 6.75098 2.68875 6.75098 4.14984C6.75098 5.70984 5.14879 7.67063 4.12551 8.71172C3.10176 7.6725 1.50098 5.71453 1.50098 4.14984C1.50098 2.68875 2.67848 1.5 4.12598 1.5Z" fill="#111111"/>
                                    <path d="M4.12598 5.25C4.7473 5.25 5.25098 4.74632 5.25098 4.125C5.25098 3.50368 4.7473 3 4.12598 3C3.50466 3 3.00098 3.50368 3.00098 4.125C3.00098 4.74632 3.50466 5.25 4.12598 5.25Z" fill="#111111"/>
                                    <path d="M21.0061 22.8738C21.0069 23.899 19.7328 24.3939 19.0435 23.6247H3.37598C1.51504 23.6247 0.000976562 22.1107 0.000976562 20.2497C0.000976562 18.3888 1.51504 16.8747 3.37598 16.8747H10.8994C11.9204 16.8747 12.751 16.0441 12.751 15.0232C12.751 14.0022 11.9204 13.1716 10.8994 13.1716H4.96457C4.26941 13.9387 3.00177 13.4495 3.00098 12.4225C2.99938 11.3943 4.26552 10.9047 4.96457 11.6716H10.8994C12.7477 11.6716 14.251 13.1749 14.251 15.0232C14.251 16.8714 12.7477 18.3747 10.8994 18.3747H3.37598C2.34191 18.3747 1.50098 19.2157 1.50098 20.2497C1.50098 21.2838 2.34191 22.1247 3.37598 22.1247H19.043C19.7407 21.3547 21.0046 21.8524 21.0061 22.8738Z" fill="#111111"/>
                                </svg>
                
                                <div>${cityObj.route}</div>
                            </li>
                        </ul>
                        <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/reviewG.svg" alt="review icons">
                        <h2>${base.titleText}</h2>
                        <p class="lh-20 c-dark-charcoal">${cityObj.text}</p>
                    </div>
                    <div class="modal-m">
                        <div class="container">
                            <button type="button" class="modal-close">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.3337 2.66699L2.66699 13.3337M13.3337 13.3337L2.66699 2.66699L13.3337 13.3337Z" stroke="#111111" stroke-linecap="round"/>
                                </svg>
                            </button>
                            <img src="https://conversionratestore.github.io/projects/mammutmarsch/img/image-modal.png" alt="image">
                            <h2>${base.modalTitle}</h2>
                            <p class="lh-20">${base.modalText}</p>
                            <button type="button" class="btn">${base.modalBtn}</button>
                        </div>
                    </div>
                </div>`
                document.body.insertAdjacentHTML('afterbegin', style)
                document.querySelector('#main').insertAdjacentHTML('afterbegin', page)

                let btnYellow = document.querySelector('.event-section .btn'),
                    linkModal = document.querySelector('.event-section .link'),
                    btnModal = document.querySelector('.modal-m .btn'),
                    modal = document.querySelector('.modal-m');

                function hideModal() {
                    modal.classList.remove('active')
                }

                //scroll to packets
                btnYellow.addEventListener('click', (e) => {
                    console.log(e.target)
                    let current_position = document.querySelector('.variations').pageYOffset;
                    console.log(current_position)
                    document.querySelector('.variations').scrollTo({ top: current_position, behavior: 'smooth' });
                })
                //click "What is extreme hiking?" button
                linkModal.addEventListener('click', (e) => {
                    modal.classList.add('active')
                })

                btnModal.addEventListener('click', (e) => {
                    hideModal()
                })
                document.addEventListener('click', (e) => {
                    if ((!e.target.closest('.modal-m') && !e.target.classList.contains('link')) || e.target.classlist.contains('btn')) {
                        hideModal()
                    }
                })
            }
        }
    }
}
