let styleQuiz = `
<style>
    /*quiz*/
    .quiz {
        background: #FFFFFF;
        border: 1px solid #D3D4D6;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.26);
        border-radius: 6px;
        padding: 32px 20px;
        font-family: 'Source Sans Pro', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 150%;
        color: #555555;
        position: relative;
        margin: 20px 0 40px 0;
    }
    .btn-back {
        font-size: 14px;
        line-height: 14px;
        color: #526EFF;
        border: none;
        background: transparent;
    }
    .btn-back.hide {
        display: none!important;
    }
    .btn-back svg {
        margin-right: 7px;
    }
    .quiz-back[href="#none"] {
        display: none!important;
    }
    .quiz h2 {
        font-family: 'Brandon Grotesque', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 34px;
        text-transform: capitalize;
        color: #555555;
        margin: 16px 0 4px;
    }
    .quiz p {
        margin: 0;
    }
    .btn-next {
        background: #526EFF;
        border-radius: 6px;
        height: 56px;
        width: 100%;
        font-weight: 600;
        border: none;
        font-family: 'Source Sans Pro', sans-serif;
        margin-top: 12px;
        color: #fff;
    }
    .btn-next svg {
        margin-left: 7px;
    }
    .step-count span {
        font-weight: 700;
        color: rgba(82, 110, 255, 1);
    }
    .anonymous {
        background: #F6F6F6;
        border-radius: 2px;
        padding: 10px 12px;
        font-size: 14px;
        margin: 8px 0 16px;
    }
    .anonymous svg {
        margin-right: 10px;
    }
    .quiz label {
        font-family: 'Brandon Grotesque', sans-serif;
        font-weight: 600;
        line-height: 24px;
        margin-bottom: 4px;
    }
    .quiz input, .quiz input[type='text'], .select-item {
        background: #FFFFFF;
        border: 1px solid #D3D4D6;
        border-radius: 4px;
        font-size: 16px;
        line-height: 26px;
        width: 100%;
        padding: 10px 12px;
        margin: 0;
    }
    .select-item {
        position: relative;
        cursor: pointer;
    }
    .select-item:after {
        content: '';
        position: absolute;
        top: 0;
        right: 12px;
        width: 12px;
        height: 100%;
        background: url("https://conversionratestore.github.io/projects/moneygeek/img/arr_down.svg") no-repeat center / 100%;
        transition: all 0.2s ease;
    }
    .select.active .select-item:after {
        transform: scaleY(-1);
    }
    .select.active .select-drop {
        padding: 4px 0;
        opacity: 1;
        pointer-events: auto;
    }
    .select-drop {
        position: absolute;
        top: calc(100% + 4px);
        left: 0;
        background: #FFFFFF;
        border: 1px solid #D3D4D6;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        z-index: 5;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
        list-style-type: none;
        width: 100%;
        margin: 0;
    }
    .select-drop > div {
        padding: 8px 12px;
        line-height: 26px;
        color: #333333;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    .select-drop > div.active, .select-drop > div:hover {
        background: #526EFF;
        color: #fff;
    }
    .quiz input::-webkit-input-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4;}
    .quiz input:-moz-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4; }
    .quiz input::-moz-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4;}
    .quiz input:-ms-input-placeholder {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 26px;
        color: #C4C4C4; }
    .error-message {
        font-size: 12px;
        line-height: 18px;
        color: #FF0000;
        display: none;
        margin-top: 4px;
    }
    .error input {
        border-color: #FF0000!important;
    }
    .error .error-message {
        display: block;
    }
    .quiz input.input-cash {
        padding-left: 25px;
    }
    .currency-cash {
        position: absolute;
        left: 12px;
        top: 0;
        line-height: 48px;
    }
    /*last step*/
    .my-answers {
        display: none;
    }
    .btn-answers {
        background: #FFFFFF;
        border: 1px solid #EFEFF1;
        border-radius: 3px;
        padding: 8px;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 14px;
        color: #526EFF;
    }
    .btn-answers svg {
        margin-left: 8px;
        transition: all 0.2s ease;
    }
    .my-answers_dropdown {
        position: absolute;
        top: 64px;
        left: 50%;
        transform: translateX(-50%);
        background: #FFFFFF;
        border: 1px solid #EFEFF1;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
        border-radius: 3px;
        padding: 16px;
        z-index: 3;
        display: none;
        width: max-content;
    }
    .my-answers_dropdown p:not(:last-child) {
        margin-bottom: 12px;
    }
    .my-answers.active .my-answers_dropdown {
        display: block;
    }
    .my-answers.active .btn-answers svg {
        transform: scaleY(-1);
    }
    .quiz h2.fs-24 {
        font-size: 24px;
        line-height: 26px;
        margin: 18.5px 0 0;
    }
    .quiz-block {
        border: 1px solid #D3D4D6;
        border-radius: 3px;
        margin-top: 12px;
        padding: 20px;
    }
    .quiz-block h3 {
        font-family: 'Brandon Grotesque', sans-serif;
        font-style: normal;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #555555;
        padding: 4px 0;
        margin-bottom: 12px;
        padding-right: 4px;
        position: relative;
        min-width: 46px;
    }
    .quiz-block h3:before {
        content: '';
        height: 2px;
        width: 40px;
        background: #526EFF;
        position: absolute;
        bottom: -2px;
        left: 0;
        pointer-events: none;
    }
    .text-res {
        height: 72px;
        overflow: hidden;
        position: relative;
    }
    .text-res.show {
        height: 100%;
    }
    .show-more {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 117px;
        background: #fff;
        z-index: 2;
        color: #555555;
        line-height: 150%;
        text-align: left;
    }
    .show-more span {
        color: #526EFF;
    }
    .tooltip-block {
        position: absolute;
        bottom: calc(100% + 15px);
        left: 0;
        transform: translateX(-45%);
        max-width: 308px;
        width: max-content;
        background: #FFFFFF;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.26);
        border-radius: 6px;
        padding: 20px;
        z-index: 5;
        opacity: 0;
        pointer-events: none;
        transition: all 0.2s ease;
    }
    .tooltip:hover .tooltip-block {
        opacity: 1;
    }
    .tooltip-block:after {
        content: '';
        position: absolute;
        top: 100%;
        left: calc(45% - 8px);
        z-index: 3;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 15px 16.5px 0 16.5px;
        border-color: #ffffff transparent transparent transparent;
    }
    .tooltip-block ul {
        background: #F3F3F3;
        border-radius: 4px;
        padding: 10px;
        margin: 0;
    }
    .tooltip-block li {
        margin-left: 26px;
        line-height: 150%;
        margin-bottom: 0;
    }
    /**/
    .weight-600 {
        font-weight: 600;
    }
    .relative {
        position: relative;
    }
    /*flex*/
    .flex {
        display: flex;
    }
    .items-center {
        align-items: center;
    }
    .justify-between {
        justify-content: space-between;
    }
    .justify-center {
        justify-content: center;
    }
    
    @media only screen and (max-width: 375px) {
        .anonymous {
            padding: 10px;
        }
        .anonymous svg {
            margin-right: 6px;
        }
        .quiz-block h3 {
            font-size: 19px;
        }
        .quiz {
            padding: 25px 15px;
        }
        .tooltip-block {
            max-width: 278px;
            padding: 15px;
        }
    }
    @media only screen and (max-width: 360px) {
        .quiz  {
            padding: 20px 10px;
        }
        .quiz > div > img {
            width: 95px;
        }
        .quiz-block {
            padding: 15px;
        }
        .quiz h2.fs-24 {
            font-size: 21px;
        }
        .my-answers_dropdown {
            top: 52px;
        }
        .show-more {
            width: 102px;
        }
        .required-level ~ .btn-next {
            font-size: 14px;
        }
        .anonymous svg {
            margin-right: 7px;
        }
        .tooltip-block {
            padding: 10px;
            transform: translateX(-38%);
        }
        .tooltip-block:after {
            left: calc(38% - 8px);
        }
    }
    @media only screen and (min-width: 768px) {
        .step-count, .btn-back {
            min-width: 50px;
        }
        .step-count {
            display: flex;
            justify-content: flex-end;
         }
        .step-count span {
            padding-right: 4px;
        }
        .quiz-footer > div:not(.quiz-result), .anonymous {
            max-width: 320px;
            margin: 0 auto;
        }
        .anonymous {
            margin: 12px auto 24px;
        }
        .btn-back.hide {
            display: block!important;
            opacity: 0;
            pointer-events: none;
        }
        .quiz {
            padding: 48px;
        }
        .quiz h2, .quiz-body > p {
            text-align: center;
        }
        .quiz h2 {
            margin-top: 28px;
        }
        .row-result {
            display: flex;
        }
        .quiz-block {
            width: calc(50% - 16px);
            margin-right: 32px;
            margin-top: 32px;
        }
        .quiz-block:last-child {
            margin-right: 0;
        }
        .quiz-result .btn-next {
            max-width: 340px;
            margin: 32px auto 0;
        }
        .show-more {
            width: 108px;
        }
        .my-answers {
            margin-right: auto;
            margin-left: 32px;
            position: relative;
        }
        .my-answers_dropdown {
            top: 100%;
            left: 0;
            transform: none;
        }
    }
</style>`

let objQuiz = {
    'Fully Owned': {
        0: {
            '$50,000 or Less' : ['','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, and <b>given your indicated ACV we recommend you only buy liability coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you, and <b>given your indicated net worth we recommend you buy only the state minimum liability coverage.</b>'],
            '$50,000 to $100,000' : ['50/100/50','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, <b> and given your indicated ACV we recommend you only buy liability coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>50/100/50</span> liability coverage.</b>'],
            '$100,000 to $300,000': ['100/300/100','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, <b>and given your indicated ACV we recommend you only buy liability coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
            'More than $300,000': ['100/300/100','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, <b>and given your indicated ACV we recommend you only buy liability coverage. </b>',' Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you, <b>and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
        },
        1 : {
            '$50,000 or Less' : ['','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, <b>and given your indicated ACV we recommend you buy comprehensive and collision coverage. </b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the state minimum liability coverage.</b>'],
            '$50,000 to $100,000' : ['50/100/50','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, <b>and given your indicated ACV we recommend you buy comprehensive and collision coverage.</b> ','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you, <b>and given your indicated net worth we recommend you buy only the <span>50/100/50</span> liability coverage.</b>'],
            '$100,000 to $300,000': ['100/300/100','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, <b> and given your indicated ACV we recommend you buy comprehensive and collision coverage.</b> ','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you, <b>and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
            'More than $300,000': ['100/300/100','The way to calculate whether you need comprehensive/collision coverage is to weigh the actual cash value (ACV) of your vehicle against the average $ price for 5 years of comprehensive/collision coverage. If your vehicle is more expensive, then comprehensive/collision coverage becomes a cost-saving necessity - If cheaper, it’s unnecessary. We’ve already calculated this for you, <b>and given your indicated ACV we recommend you buy comprehensive and collision coverage.</b>',' Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you, <b>and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
        }
    },
    'Leased': {
        0: {
            '$50,000 or Less' : ['','You are obliged by law to cover a leased vehicle with a comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the state minimum liability coverage.</b>'],
            '$50,000 to $100,000' : ['50/100/50','Coverage type: You are obliged by law to cover a leased vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b>  and given your indicated net worth we recommend you buy only the <span>50/100/50</span> liability coverage.</b>'],
            '$100,000 to $300,000': ['100/300/100',' You are obliged by law to cover a leased vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>',' Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b>  and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
            'More than $300,000': ['100/300/100','You are obliged by law to cover a leased vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>',' Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b>  and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
        },
        1: {
            '$50,000 or Less' : ['','You are obliged by law to cover a leased vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the state minimum liability coverage.</b>'],
            '$50,000 to $100,000' : ['50/100/50','You are obliged by law to cover a leased vehicle with a comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>50/100/50</span> liability coverage.</b>'],
            '$100,000 to $300,000': ['100/300/100','You are obliged by law to cover a leased vehicle with a comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
            'More than $300,000': ['100/300/100','You are obliged by law to cover a leased vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
        }
    },
    'Financed Purchase': {
        0: {
            '$50,000 or Less' : ['','You are obliged by law to cover a financed purchase vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the state minimum liability coverage.</b>'],
            '$50,000 to $100,000' : ['50/100/50','You are obliged by law to cover a financed purchase vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>50/100/50</span> liability coverage.</b>'],
            '$100,000 to $300,000': ['100/300/100','You are obliged by law to cover a financed purchase vehicle with a comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
            'More than $300,000': ['100/300/100','You are obliged by law to cover a financed purchase vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
        },
        1: {
            '$50,000 or Less' : ['','You are obliged by law to cover a financed purchase vehicle with comprehensive/collision insurance. Given your indicated car ownership,<b> we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you, <b>and given your indicated net worth we recommend you buy only the state minimum liability coverage.</b>'],
            '$50,000 to $100,000' : ['50/100/50','You are obliged by law to cover financed purchase vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>50/100/50</span> liability coverage.</b>'],
            '$100,000 to $300,000': ['100/300/100','You are obliged by law to cover a financed purchase vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
            'More than $300,000': ['100/300/100',' You are obliged by law to cover a financed purchase vehicle with comprehensive/collision insurance. Given your indicated car ownership, <b>we recommend you to buy the comprehensive/collission coverage.</b>','Bodily injury liability insurance protects the assets you could lose if you injured someone in an accident and were forced to personally pay their financial costs. Therefore the higher your net worth, the more bodily injury liability insurance you need. We’ve already calculated this for you,<b> and given your indicated net worth we recommend you buy only the <span>100/300/100</span> liability coverage.</b>'],
        }
    }
}

let objStateMinimum = ['Alabama:25/50/25', 'Alaska:50/100/25', 'Arizona:15/30/10', 'Arkansas:25/50/25', 'California:15/30/5', 'Colorado:25/50/15', 'Connecticut:25/50/25', 'District of Columbia:25/50/10', 'Delaware:25/50/10', 'Florida://10', 'Georgia:25/50/25', 'Hawaii:20/40/10', 'Idaho:25/50/15', 'Illinois:25/50/20', 'Indiana:25/50/25', 'Iowa:20/40/15', 'Kansas:25/50/25', 'Kentucky:25/50/25', 'Louisiana:15/30/25', 'Maine:50/100/25', 'Maryland:30/60/15', 'Massachusetts:20/40/5', 'Michigan:20/40/', 'Minnesota:30/60/10', 'Mississippi:25/50/25', 'Missouri:25/50/25', 'Montana:25/50/20', 'Nebraska:25/50/25', 'Nevada:25/50/20', 'New Hampshire:25/50/25', 'New Jersey://5', 'New Mexico:25/50/10', 'New York:25/50/10', 'North Carolina:30/60/25', 'North Dakota:25/50/25', 'Ohio:25/50/25', 'Oklahoma:25/50/25', 'Oregon:25/50/20', 'Pennsylvania:15/30/5', 'Rhode Island:25/50/25', 'South Carolina:25/50/25', 'South Dakota:25/50/25', 'Tennessee:25/50/15', 'Texas:30/60/25', 'Utah:25/65/15', 'Vermont:25/50/10', 'Virginia:25/50/20', 'Washington:25/50/10', 'West Virginia:25/50/25', 'Wisconsin:25/50/10', 'Wyoming:25/50/20']

let myAnswers = ['','','','$',''] //my Answers array
let href = window.location.href; //location page

let zipCode = '';
if (href.includes('/insurance/auto/cheapest-car-insurance-texas/')) {
    zipCode = '77494';
    myAnswers[0] = '77494';
    myAnswers[1] = 'Texas';
} else if (href.includes('insurance/auto/cheapest-car-insurance-california/')) {
    zipCode = '90011';
    myAnswers[0] = '90011';
    myAnswers[1] = 'California';
}

// html
let quizHTML = `
<div class="quiz">
    <div class="flex justify-between">
        <button type="button" class="btn-back flex items-center weight-600">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.3346 5.33268H3.2213L6.94797 1.60602L6.0013 0.666016L0.667969 5.99935L6.0013 11.3327L6.9413 10.3927L3.2213 6.66602H11.3346V5.33268Z" fill="#526EFF"/>
            </svg>
            Back
        </button>
        <div class="my-answers">
            <button class="btn-answers flex items-center" type="button">My Answers
                <svg width="8" height="6" viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.94 0.226562L4 3.2799L7.06 0.226562L8 1.16656L4 5.16656L0 1.16656L0.94 0.226562Z" fill="#526EFF"/>
                </svg>
            </button>
            <div class="my-answers_dropdown">
                <p><span class="weight-600">State You Reside In: </span> <span></span></p>
                <p><span class="weight-600">Car Ownership: </span><span></span></p>
                <p><span class="weight-600">Actual Cash Value (ACV) of Your Car: </span><span></span></p>
                <p><span class="weight-600">Net Worth: </span><span></span></p>
            </div>
        </div>
        <img src="https://conversionratestore.github.io/projects/moneygeek/img/logo.svg" alt="logo icon">
        <div class="step-count"><span data-step="1">1</span> | ${zipCode == '' ? '4' : '3'}</div>
    </div>
    <div class="quiz-body">
        <h2>Determine How Much Car Insurance You need</h2>
        <p>Take our quiz to learn the required and optimal level of car insurance for you.</p>
        <div class="anonymous flex items-center">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.26189 0.625C6.03876 0.6252 5.8327 0.744294 5.72114 0.9375L3.01489 5.625H0.883576C0.531264 5.62 0.244639 5.90759 0.250076 6.25611C0.256326 6.60463 0.538889 6.87972 0.883576 6.875H17.1161C17.9613 6.88694 17.9613 5.61304 17.1161 5.625H14.9861L12.2798 0.9375C12.168 0.743907 11.9614 0.62475 11.7378 0.625H6.26189Z" fill="#555555"/>
                <path d="M4.625 8.125C2.9065 8.125 1.5 9.53151 1.5 11.25C1.5 12.9685 2.9065 14.375 4.625 14.375C5.95231 14.375 7.08563 13.5323 7.53638 12.3584C7.96219 12.0495 8.47131 11.875 9 11.875C9.52856 11.875 10.0377 12.0506 10.4636 12.3596C10.9146 13.5329 12.048 14.375 13.375 14.375C15.0934 14.375 16.5 12.9685 16.5 11.25C16.5 9.53151 15.0934 8.125 13.375 8.125C11.7915 8.125 10.4754 9.31995 10.2781 10.852C9.87094 10.7042 9.43937 10.625 9 10.625C8.56069 10.625 8.12894 10.7042 7.72188 10.852C7.5245 9.31995 6.20844 8.125 4.625 8.125ZM4.625 9.375C5.66794 9.375 6.5 10.2071 6.5 11.25C6.5 12.2929 5.66794 13.125 4.625 13.125C3.58206 13.125 2.75 12.2929 2.75 11.25C2.75 10.2071 3.58206 9.375 4.625 9.375ZM13.375 9.375C14.4179 9.375 15.25 10.2071 15.25 11.25C15.25 12.2929 14.4179 13.125 13.375 13.125C12.3321 13.125 11.5 12.2929 11.5 11.25C11.5 10.2071 12.3321 9.375 13.375 9.375Z" fill="#555555"/>
            </svg>
            <p>Your information is anonymous and secure</p>
       </div>
   </div>
   <div class="quiz-footer"> </div>
</div>`

function setBtn(text) {
    return `<button type="button" class="btn-next flex items-center justify-center" >
                ${text} 
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.665365 5.33268H8.7787L5.05203 1.60602L5.9987 0.666016L11.332 5.99935L5.9987 11.3327L5.0587 10.3927L8.7787 6.66602H0.665365V5.33268Z" fill="white"/>
                </svg>
            </button>`
}
// html
let zipCodeHTML = `
        <div>
            <label class="">Your Zip Code</label>
            <input type="number" placeholder="Your Zip Code" class="input-zip">
            <p class="error-message">You must provide a valid zip code</p>
            ${setBtn('Next')}
        </div>`,

    carOwnershipHTML = `
        <div>
            <label class="">Car Ownership</label>
            <div class="select relative" name="car-ownership">
                <div class="select-item">Fully Owned</div>
                <div class="select-drop">
                    <div class="active">Fully Owned</div>
                    <div>Leased</div>
                    <div>Financed Purchase</div>
                </div>
            </div>
            ${setBtn('Next')}
        </div>`,

    cashValueHTML = `
        <div>
            <label class="">Actual Cash Value (ACV) of Your Car</label>
            <div class="relative">
                <p class="currency-cash">$</p>
                <input type="text" class="input-cash" onkeyup="formatCash(this)" onkeypress="return onlyNumberKey(event)">
            </div>
            <p class="error-message">Please enter your car's actual cash value</p>
            ${setBtn('Next')}
        </div>`,

    netWorthHTML = `
        <div>
            <label class="">Net worth</label>
            <div class="select relative" name="net-worth">
                <div class="select-item">$50,000 or Less</div>
                <div class="select-drop">
                    <div class="active">$50,000 or Less</div>
                    <div>$50,000 to $100,000</div>
                    <div>$100,000 to $300,000</div>
                    <div>More than $300,000</div>
                </div>
            </div>
            ${setBtn('View Your Recommended Coverage')}
        </div>`,

    resultHTML = `
        <div class="quiz-result">
            <h2 class="fs-24">Recommended Type and Level of Car Insurance Coverage:</h2>
            <div class="row-result">
                <div class="coverage-type quiz-block">
                    <p>Coverage Type:</p>
                    <h3>Comprehensive and Collision</h3>
                    <p class="weight-600">Explanation:</p>
                    <div class="text-res">
                        <p></p>
                        <button type="button" class="show-more">.... <span class="weight-600">See more</span></button>
                    </div>
                </div>
                <div class="required-level quiz-block">
                    <p>Required Level of Coverage:</p>
                    <div class="flex">
                        <h3></h3>
                        <div class="tooltip relative">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.9987 1.33301C6.68016 1.33301 5.39123 1.724 4.2949 2.45654C3.19857 3.18909 2.34409 4.23028 1.8395 5.44845C1.33492 6.66663 1.2029 8.00707 1.46013 9.30028C1.71737 10.5935 2.35231 11.7814 3.28466 12.7137C4.21701 13.6461 5.40489 14.281 6.6981 14.5382C7.99131 14.7955 9.33175 14.6635 10.5499 14.1589C11.7681 13.6543 12.8093 12.7998 13.5418 11.7035C14.2744 10.6071 14.6654 9.31822 14.6654 7.99967C14.6654 7.1242 14.4929 6.25729 14.1579 5.44845C13.8229 4.63961 13.3318 3.90469 12.7127 3.28563C12.0937 2.66657 11.3588 2.17551 10.5499 1.84048C9.74109 1.50545 8.87418 1.33301 7.9987 1.33301ZM7.9987 13.333C6.94387 13.333 5.91272 13.0202 5.03566 12.4342C4.1586 11.8481 3.47501 11.0152 3.07134 10.0407C2.66768 9.06611 2.56206 7.99376 2.76785 6.95919C2.97363 5.92463 3.48158 4.97432 4.22746 4.22844C4.97334 3.48256 5.92365 2.97461 6.95822 2.76882C7.99278 2.56303 9.06514 2.66865 10.0397 3.07232C11.0142 3.47598 11.8472 4.15957 12.4332 5.03663C13.0192 5.91369 13.332 6.94484 13.332 7.99967C13.332 9.41416 12.7701 10.7707 11.7699 11.7709C10.7697 12.7711 9.41319 13.333 7.9987 13.333Z" fill="#555555"/>
                                <path d="M7.9987 6.00033C8.36689 6.00033 8.66536 5.70185 8.66536 5.33366C8.66536 4.96547 8.36689 4.66699 7.9987 4.66699C7.63051 4.66699 7.33203 4.96547 7.33203 5.33366C7.33203 5.70185 7.63051 6.00033 7.9987 6.00033Z" fill="#555555"/>
                                <path d="M7.9987 6.66699C7.82189 6.66699 7.65232 6.73723 7.52729 6.86225C7.40227 6.98728 7.33203 7.15685 7.33203 7.33366V10.667C7.33203 10.8438 7.40227 11.0134 7.52729 11.1384C7.65232 11.2634 7.82189 11.3337 7.9987 11.3337C8.17551 11.3337 8.34508 11.2634 8.4701 11.1384C8.59513 11.0134 8.66536 10.8438 8.66536 10.667V7.33366C8.66536 7.15685 8.59513 6.98728 8.4701 6.86225C8.34508 6.73723 8.17551 6.66699 7.9987 6.66699Z" fill="#555555"/>
                            </svg>
                            <div class="tooltip-block">
                                <ul></ul>
                            </div>
                        </div>
                    </div>
                    <p class="weight-600">Explanation:</p>
                    <div class="text-res">
                        <p></p>
                        <button type="button" class="show-more">.... <span class="weight-600">See more</span></button>
                    </div>
                </div>
            </div>
            ${setBtn('Compare Coverage Pricing & Quotes')}
        </div>
       `

//change for selects
function selectChange(currency) {
    let selector = document.querySelector(currency);
    let nameSelect = selector.parentElement.getAttribute('name').split('-').join(' ');
    let childs = selector.nextElementSibling.querySelectorAll('div');

    selector.addEventListener('click', () => {
        selector.parentElement.classList.toggle('active')
        pushDataLayer(`Click on ${nameSelect} select`)
    })

    childs.forEach(child => {
        if (nameSelect == 'car ownership' && myAnswers[2] != '' || nameSelect == 'net worth' && myAnswers[4] != '') {
            child.classList.remove('active');
        } 
        if (myAnswers[4] == child.innerHTML || myAnswers[2] == child.innerHTML) {
            child.classList.add('active');
            selector.innerHTML = child.innerHTML;
        } 

        child.addEventListener('click', (e) => {
            selector.innerHTML = child.innerHTML;
            selector.parentElement.classList.remove('active');
            e.target.parentElement.querySelector('div.active').classList.remove('active');
            e.target.classList.add('active');
            pushDataLayer(`${child.innerHTML} selected (${nameSelect})`)
        })
    })
}

//api zip code
function apiZipCode(value) {
    return new Promise((resolve, reject) => {
        fetch(`https://api.zippopotam.us/us/${value}`, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            method: 'GET',
        }).then(res => res.json()).then(data => {
            resolve(data)
        }).catch((error) => {
            console.error('Error:', error);
        });
    })
}
//click on Enter
function clickOnEnter(input, button) {
    document.querySelector(input).addEventListener('keyup' , (e) => {
        if (e.keyCode == 13) {
            document.querySelector(button).click();
        }
    })
}
//format cash
function formatCash(input){
    let nStr = input.value + '';
    nStr = nStr.replace( /\,/g, "");
    let x = nStr.split( '.' );
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while ( rgx.test(x1) ) {
        x1 = x1.replace( rgx, '$1' + ',' + '$2' );
    }
    input.value = x1 + x2;
}
//only number key
function onlyNumberKey(evt) {
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
        return false;
    return true;
}

//push dataLayer
function pushDataLayer(action, label) {
    console.log(action + " : " + label)
    window.dataLayer = window.dataLayer || [];
    if (label != '') {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: The Quiz',
            'eventAction': action,
            'eventLabel': label
        });
    } else {
        dataLayer.push({
            'event': 'event-to-ga',
            'eventCategory': 'Exp: The Quiz',
            'eventAction': action
        });
    }
}

//comes into view
function isScrolledIntoView(el) {
    let rect = el.getBoundingClientRect(),
        elemTop = rect.top,
        elemBottom = rect.bottom;

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);

    return isVisible;
}
let viewed = false;

window.onload = function() {
    document.body.insertAdjacentHTML('afterbegin', styleQuiz) //add style quiz

    //add quiz on page
    if (href.includes('insurance/auto/how-much-car-insurance-do-you-need/')) {
        if (window.innerWidth > 767) {
            document.querySelector('#gatsby-focus-wrapper > div > main > div.css-1irxgwz.ead1i4x8 > div > div.css-1uj8m62.ead1i4x6 > div:nth-child(1)').insertAdjacentHTML('beforebegin', quizHTML)
        } else {
            document.querySelector('#gatsby-focus-wrapper > div > main > div.css-1irxgwz.ead1i4x8 > div > div.css-1wbld27.ead1i4x7 > div.spacing').insertAdjacentHTML('afterend', quizHTML)
        }
    } else if (href.includes('insurance/how-to-get-car-insurance-before-buying-a-car/')) {
        document.querySelectorAll('.Spacing')[0].insertAdjacentHTML('beforebegin', quizHTML)
    }

    let footerQuiz = document.querySelector('.quiz-footer'), //footer quiz
        countStep = document.querySelector('.step-count span'), //step count
        btnBack = document.querySelector('.btn-back'), //back button
        bodyQuiz = document.querySelector('.quiz-body'), //container quiz
        answers = document.querySelector('.my-answers'); //my answers quiz

    //change content/logic for each stage
    function changeContent(count) {
        switch (count) {
            case '1':
                viewed = false;
                footerQuiz.innerHTML = zipCodeHTML;
                countStep.innerHTML = '1';
                countStep.dataset.step = '1';
                btnBack.classList.add('hide');
                document.querySelector('.input-zip').value = myAnswers[0];
                //event
                document.querySelector('.input-zip').addEventListener('click', () => pushDataLayer(`Click on Your Zip Code input`))
                //click next button
                document.querySelector('.btn-next').addEventListener('click', (e) => {
                    pushDataLayer(`Click on Next button (step - 1)`,'')
                    let value = document.querySelector('.quiz-footer input').value;
                    if (value != '') {
                        apiZipCode(value).then(data => {
                            console.log(data)
                            if (Object.keys(data).length > 0) {
                                document.querySelector('.error-message').parentElement.classList.remove('error');
                                myAnswers[0] = value;
                                myAnswers[1] = data['places'][0]['state'];
                                changeContent('2')
                            } else {
                                document.querySelector('.error-message').parentElement.classList.add('error');
                            }
                        })
                    } else {
                        document.querySelector('.error-message').parentElement.classList.add('error');
                    }
                })
                break
            case '2':
                viewed = false;
                footerQuiz.innerHTML = carOwnershipHTML;
                if (zipCode == '') {
                    btnBack.classList.remove('hide');
                    countStep.innerHTML = '2';
                } else {
                    btnBack.classList.add('hide');
                    countStep.innerHTML = '1';
                }
                countStep.dataset.step = '2';

                selectChange('.select-item');
                document.querySelector('.btn-next').addEventListener('click', (e) => {
                    pushDataLayer(`Click on Next button (step - ${countStep.innerHTML})`,'')
                    myAnswers[2] = document.querySelector('[name="car-ownership"] .select-item').innerHTML;
                    changeContent('3')
                })
                break
            case '3':
                viewed = false;
                footerQuiz.innerHTML = cashValueHTML;
                countStep.innerHTML = zipCode == '' ? '3' : '2';
                btnBack.classList.remove('hide');
                countStep.dataset.step = '3';
                let cash = document.querySelector('.input-cash');
                cash.value = myAnswers[3].replace('$','');
                document.querySelector('.btn-next').addEventListener('click', (e) => {
                    pushDataLayer(`Click on Next button (step - ${countStep.innerHTML})`,'')
                    if (cash.value != '' && cash.value != 0 && cash.value != '00' && cash.value != '0,000') {
                        document.querySelector('.error-message').parentElement.classList.remove('error')
                        myAnswers[3] = '$' + cash.value;
                        changeContent('4')
                    } else {
                        document.querySelector('.error-message').parentElement.classList.add('error')
                    }
                })
                break
            case '4':
                viewed = false;
                footerQuiz.innerHTML = netWorthHTML;
                countStep.innerHTML = zipCode == '' ? '4' : '3';
                countStep.dataset.step = '4';
                countStep.parentElement.style.display = '';
                bodyQuiz.style = '';
                answers.style.display = 'none';
                selectChange('.select-item');
                document.querySelector('.btn-next').addEventListener('click', (e) => {
                    myAnswers[4] = document.querySelector('[name="net-worth"] .select-item').innerHTML;
                    pushDataLayer(`Click on View Your Recommended Coverage button (step - ${countStep.innerHTML})`,'')
                    changeContent('5')
                })
                break
            case '5':
                viewed = false;
                footerQuiz.innerHTML = resultHTML;
                countStep.innerHTML = zipCode == '' ? '5' : '4';
                countStep.dataset.step = '5';
                countStep.parentElement.style.display = 'none';
                bodyQuiz.style.display = 'none';
                answers.style.display = 'block';
                document.querySelectorAll('.my-answers_dropdown > p > span:last-child').forEach((item, index) => {
                    item.innerHTML = myAnswers[index + 1]
                })
                let cashIndex = +(myAnswers[3].split('$')[1].split(',').join('')) > 3000 ? 1 : 0;
                let result = objQuiz[myAnswers[2]][cashIndex][myAnswers[4]];
           
                document.querySelector('.coverage-type .text-res > p').innerHTML = result[1];
                document.querySelector('.required-level .text-res > p').innerHTML = result[2];

                document.querySelector('.coverage-type h3').innerHTML = myAnswers[2] == 'Fully Owned' && cashIndex == 0 ? 'Liability coverage only' : 'Comprehensive and collision';

                
                for (let i = 0; i < objStateMinimum.length; i++) {
                    if (objStateMinimum[i].split(':')[0] == myAnswers[1]) {
                        let sptStateMinimum = objStateMinimum[i].split(':')[1].split('/'),
                            stateMinimum = '';

                        let typeOne = '', typeTwo = '' , typeTree = '';
                        if (result[0] == '') {
                            for (let j = 0; j < sptStateMinimum.length; j++) {
                                stateMinimum += sptStateMinimum[j] != '' ? j < 2 ? sptStateMinimum[j] + '/' : sptStateMinimum[j] : sptStateMinimum[j]
                            }

                            typeOne = sptStateMinimum[0] != '' ? `<li>$${sptStateMinimum[0]},000 in bodily injury insurance per person</li>` : '';
                            typeTwo = sptStateMinimum[1] != '' ? `<li>$${sptStateMinimum[1]},000 in bodily injury insurance per accident</li>` : '';
                            typeTree = sptStateMinimum[2] != '' ? `<li>$${sptStateMinimum[2]},000 in property damage insurance per accident</li>` : '';
                        } else {
                            typeOne = `<li>$${result[0].split('/')[0]},000 in bodily injury insurance per person</li>`;
                            typeTwo = `<li>$${result[0].split('/')[1]},000 in bodily injury insurance per accident</li>`;
                            typeTree = `<li>$${result[0].split('/')[2]},000 in property damage insurance per accident</li>`
                        }
                        if (sptStateMinimum[2] == '') {
                            stateMinimum = stateMinimum.slice(0, -1);
                        }
                        document.querySelector('.required-level h3').innerHTML = result[0] == '' ? stateMinimum : result[0];
                        document.querySelector('.tooltip-block ul').innerHTML = typeOne + typeTwo + typeTree
                    }
                }
                document.querySelectorAll('.show-more').forEach(button => {
                    button.addEventListener('click', () => {
                        button.parentElement.classList.add('show');
                        pushDataLayer(`Click on show more button (${button.closest('.quiz-block').querySelector('p').innerHTML.replace(':','')})`,'');
                        button.remove();
                    })
                })
                document.querySelector('.btn-next').addEventListener('click', (e) => {
                    pushDataLayer(`Click on Compare Coverage Pricing & Quotes button`,'')
                    document.querySelector('form .chakra-form-control input').value = myAnswers[0];
                    document.querySelector('form .chakra-button').click();
                })
                document.querySelector('.tooltip').addEventListener('click', (e) =>  pushDataLayer(`Click on tooltip`,''))
                break
        }
        if (document.querySelector('.quiz-footer input') != null) {
            clickOnEnter('.quiz-footer input', '.btn-next');
        }
        if (isScrolledIntoView(document.querySelector('.btn-next')) == true) {
            if (viewed == false) {
                viewed = true;
                pushDataLayer('View on screen', `Step ${countStep.innerHTML}. ${document.querySelector('.quiz-footer label').innerText}`);
            }
        }  
    }
    changeContent(zipCode == '' ? '1' : '2')

    window.addEventListener('scroll', () => {
        if (isScrolledIntoView(document.querySelector('.btn-next')) == true) {
            if (viewed == false) {
                viewed = true;
                pushDataLayer('View on screen', `Step ${countStep.innerHTML}. ${document.querySelector('.quiz-footer label').innerText}`);
      
            }
        }   
    })

    //back step
    btnBack.addEventListener('click', () => {
        let step = +countStep.dataset.step - 1;
        changeContent(step.toString())
        pushDataLayer(`Click on back button (step - ${countStep.innerHTML})`,'')
    });
    if (window.innerWidth <= 767) {
        document.querySelector('.btn-next').addEventListener('click', (e) => {
            seamless.polyfill();
            seamless.scrollIntoView(document.querySelector(".quiz"), {
                behavior: "smooth",
                block: "center",
                inline: "center",
            });
        });
    }

    //click on 'my Answers' button
    document.querySelector('.btn-answers').addEventListener('click', (e) => {
        answers.classList.toggle('active')
        pushDataLayer(`Click on my answers button`,'')
    })

    document.addEventListener('click', (e) => {
        if (!e.target.closest('.my-answers') && answers.classList.contains('active')) {
            answers.classList.remove('active')
        }
    })
};

pushDataLayer('loaded','') //loaded event

//clarify
let isClarify = setInterval(() => {
    if(typeof clarity == 'function') {
        clearInterval(isClarify)
        clarity("set", "quiz", "variant_1");
    }
}, 100)
