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
        width: calc(100% - 16px);
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
    .quiz-result {
        margin-top: 14.5px;
    }
    .row-result {
        border: 1px solid #D3D4D6;
        border-bottom: none;
    }
    .quiz h2.fs-24 {
        font-size: 24px;
        line-height: 26px;
        margin: 18.5px 0 0;
    }
    .quiz-block {
        border-bottom: 1px solid #D3D4D6;
    }
    .quiz-block h3, .quiz-block_body ul span {
        font-family: 'Brandon Grotesque', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 24px;
        color: #555555;
    }
    .quiz-block h3 {
        padding: 0 0 2px 0;
        margin-bottom: 8px;
    }
    .quiz-block h3 span {
        position: relative;
        display: block;
        margin-bottom: 4px;
    }
    .quiz-block h3 span:before, .quiz-block_body ul span:before {
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
        display: none;
        padding-bottom: 8px;
    }
    .show .text-res {
        display: block;
    }
    .show span:after {
        transform: scaleY(-1);
    }
    .show-more {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 24px;
        padding: 8px 0;
        width: 100%;
        color: #526EFF;
    }
    .show-more span:after {
        content: '';
        margin-left: 4px;
        width: 9px;
        height: 6px;
        display: block;
        pointer-events: none;
        transition: all 0.3s ease;
        background: url('https://conversionratestore.github.io/projects/moneygeek/img/arrow-down.svg') no-repeat center / 100%;
    }
    .quiz-block_header {
        font-family: 'Brandon Grotesque', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        padding: 12px;
        border-bottom: 1px solid #D3D4D6;
    }
    .quiz-block_body {
        padding: 20px 20px 12px;
    }
    .quiz-block_body ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
    .quiz-block_body ul span {
        display: block;
        margin-bottom: 4px;
        position: relative;
    }
    .quiz-block_body li {
        font-family: 'Source Sans Pro', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        margin-bottom: 12px;
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
        .quiz h2.fs-24 {
            font-size: 21px;
        }
        .quiz-block_body {
            padding: 12px;
        }
        .my-answers_dropdown {
            top: 52px;
            width: 100%;
        }
        .row-result ~ .btn-next {
            font-size: 14px;
        }
        .anonymous svg {
            margin-right: 7px;
        }
        .tooltip-block {
            padding: 10px;
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
        .quiz-result {
            margin-top: 24.5px;
        }
        .row-result {
            display: flex;
        }
        .quiz-block {
            width: 100%;
            padding: 0 24px;
        }
        .required-level {
            border-right: 1px solid #D3D4D6;
        }
        .quiz-block_header {
            padding: 24px 0 8px;
        }
        .quiz-block_body {
            padding: 12px 0;
        }
        .quiz-block:last-child {
            margin-right: 0;
        }
        .quiz-result .btn-next {
            max-width: 340px;
            margin: 32px auto 0;
        }
        .show-more span:after {
            width: 10px;
            margin-left: 9px;
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
            width: max-content;
            padding: 20px;
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
                <p><span class="weight-600">ACV of Your Car: </span><span></span></p>
                <p><span class="weight-600">Net Worth: </span><span></span></p>
            </div>
        </div>
        <img src="https://conversionratestore.github.io/projects/moneygeek/img/logo.svg" alt="logo icon">
        <div class="step-count"><span data-step="1">1</span> | ${zipCode == '' ? '4' : '3'}</div>
    </div>
    <div class="quiz-body">
        <h2>Determine How Much Car Insurance You Need</h2>
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
            <div class="select relative" name="actual-cash">
                <div class="select-item">Less than $3,000</div>
                <div class="select-drop">
                    <div class="active">Less than $3,000</div>
                    <div>$3,000 to 10,000</div>
                    <div>More than $10,000</div>
                </div>
            </div>
            ${setBtn('Next')}
        </div>`,

    netWorthHTML = `
        <div>
            <label class="">Net Worth</label>
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
            <div class="row-result">
                <div class="coverage-type quiz-block">
                    <p class="quiz-block_header">Coverage Type</p>
                    <div class="quiz-block_body">
                        <h3 class="coverage-type-set"></h3>
                        <button type="button" class="show-more"><span class="flex items-center">Why you need this coverage type</span></button>
                        <p class="text-res"></p>
                    </div>
                </div>
                <div class="required-level quiz-block relative">
                    <p class="quiz-block_header">Recommended Level of Coverage</p>
                    <div class="quiz-block_body">
                        <ul></ul>
                        <button type="button" class="show-more"><span class="flex items-center">Why you need this level of coverage</span> </button>
                        <p class="text-res"></p>
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
        if (nameSelect == 'car ownership' && myAnswers[2] != '' || nameSelect == 'net worth' && myAnswers[4] != '' || nameSelect == 'actual cash' && myAnswers[3] != '') {
            child.classList.remove('active');
        } 
        if (myAnswers[4] == child.innerHTML || myAnswers[3] == child.innerHTML || myAnswers[2] == child.innerHTML) {
            child.classList.add('active');
            selector.innerHTML = child.innerHTML;
        } 

        child.addEventListener('click', (e) => {
            selector.innerHTML = child.innerHTML;
            child.parentElement.querySelector('.active').classList.remove('active');
            child.classList.add('active');
            selector.parentElement.classList.remove('active');
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

//scroll to
function scrollToElement(targetScroll, offsetTop) {
    const scrollTarget = targetScroll;
    const topOffset = offsetTop.offsetHeight;
    const elementPosition = scrollTarget.getBoundingClientRect().top;
    const offsetPosition = elementPosition - topOffset - 130;

    seamless.polyfill();
    seamless.scrollBy(window, { behavior: "smooth", top: offsetPosition, left: 0 });
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
        document.querySelector('#gatsby-focus-wrapper > div > main > div.css-1irxgwz.ead1i4x8 > div > div.css-1uj8m62.ead1i4x6 > div:nth-child(2)').insertAdjacentHTML('beforebegin', quizHTML)
    } else if (href.includes('insurance/how-to-get-car-insurance-before-buying-a-car/')) {
        document.querySelectorAll('.Spacing')[0].insertAdjacentHTML('beforebegin', quizHTML)
    }
    document.querySelector('#gatsby-focus-wrapper > div > main > div.css-1irxgwz.ead1i4x8 > div > div.css-1uj8m62.ead1i4x6 > div:nth-child(1) > p').innerHTML = `The minimum amount of car insurance necessary to meet your needs depends on several factors, including what state you live in, the value of your vehicle, your net worth and how much insurance you can afford. If you have a valuable car you should invest in a full coverage policy, and those who can afford it should consider greatly increasing their liability limits above state minimums.`
    
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
                selectChange('.select-item');
                document.querySelector('.btn-next').addEventListener('click', (e) => {
                    pushDataLayer(`Click on Next button (step - ${countStep.innerHTML})`,'');
                    myAnswers[3] = document.querySelector('[name="actual-cash"] .select-item').innerHTML;
                    changeContent('4')
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

                let cashIndex = myAnswers[3].includes('Less than $3,000') ? 0 : 1;
                let result = objQuiz[myAnswers[2]][cashIndex][myAnswers[4]];
           
                document.querySelector('.coverage-type .text-res').innerHTML = result[1];
                document.querySelector('.required-level .text-res').innerHTML = result[2];

                
                document.querySelector('.coverage-type-set').innerHTML = myAnswers[2] == 'Fully Owned' && cashIndex == 0 ? '<span>Liability Coverage only</span>' : '<span>Liability Coverage</span>and<span>Comprehensive/Collision</span>';

                for (let i = 0; i < objStateMinimum.length; i++) {
                    if (objStateMinimum[i].split(':')[0] == myAnswers[1]) {
                        let sptStateMinimum = objStateMinimum[i].split(':')[1].split('/'),
                            stateMinimum = '';

                        let typeOne = '', typeTwo = '' , typeTree = '';
                        if (result[0] == '') {
                            for (let j = 0; j < sptStateMinimum.length; j++) {
                                stateMinimum += sptStateMinimum[j] != '' ? j < 2 ? sptStateMinimum[j] + '/' : sptStateMinimum[j] : sptStateMinimum[j]
                            }

                            typeOne = sptStateMinimum[0] != '' ? `<li><span>$${sptStateMinimum[0]},000</span> in bodily injury insurance per person</li>` : '';
                            typeTwo = sptStateMinimum[1] != '' ? `<li><span>$${sptStateMinimum[1]},000</span> in bodily injury insurance per accident</li>` : '';
                            typeTree = sptStateMinimum[2] != '' ? `<li><span>$${sptStateMinimum[2]},000</span> in property damage insurance per accident</li>` : '';
                        } else {
                            typeOne = `<li><span>$${result[0].split('/')[0]},000</span> in bodily injury insurance per person</li>`;
                            typeTwo = `<li><span>$${result[0].split('/')[1]},000</span> in bodily injury insurance per accident</li>`;
                            typeTree = `<li><span>$${result[0].split('/')[2]},000</span> in property damage insurance per accident</li>`
                        }
                        if (sptStateMinimum[2] == '') {
                            stateMinimum = stateMinimum.slice(0, -1);
                        }
                        document.querySelector('.required-level ul').innerHTML = typeOne + typeTwo + typeTree
                    }
                }
                document.querySelectorAll('.show-more').forEach(button => {
                    button.addEventListener('click', (e) => {
                        if (!button.parentElement.classList.contains('show')) {
                            scrollToElement(button, button)
                        }
                        button.parentElement.classList.toggle('show');
                        pushDataLayer(`Click on ${button.innerText} button`,'');
                    })
                })
                document.querySelector('.btn-next').addEventListener('click', (e) => {
                    pushDataLayer(`Click on Compare Coverage Pricing & Quotes button`,'')
                    document.querySelector('form .chakra-form-control input').value = myAnswers[0];
                    document.querySelector('form .chakra-button').click();
                })
           
                document.addEventListener('click', (e) => {
                    if (!e.target.closest('.my-answers') && answers.classList.contains('active')) {
                       answers.classList.remove('active')
                    }
                 })
                break
        }
        if (document.querySelector('.quiz-footer input') != null) {
            clickOnEnter('.quiz-footer input', '.btn-next');
        }
        if (isScrolledIntoView(document.querySelector('.btn-next')) == true) {
            if (viewed == false) {
                viewed = true;
                let label = countStep.dataset.step == 5 ? 'Recommended Type and Level of Car Insurance Coverage' : document.querySelector('.quiz-footer label').innerText
                pushDataLayer('View on screen', `Step ${countStep.innerHTML}. ${label}`);
            }
        }  
        if (window.innerWidth <= 767) {
            document.querySelector('.btn-next').addEventListener('click', (e) => scrollToElement(document.querySelector('.quiz'), e.target));
        }
    }
    changeContent(zipCode == '' ? '1' : '2')

    window.addEventListener('scroll', () => {
        if (isScrolledIntoView(document.querySelector('.btn-next')) == true) {
            if (viewed == false) {
                viewed = true;
                let label = countStep.dataset.step == 5 ? 'Recommended Type and Level of Car Insurance Coverage' : document.querySelector('.quiz-footer label').innerText
                pushDataLayer('View on screen', `Step ${countStep.innerHTML}. ${label}`);
            }
        }   
    })

    //back step
    btnBack.addEventListener('click', () => {
        let step = +countStep.dataset.step - 1;
        changeContent(step.toString())
        pushDataLayer(`Click on back button (step - ${countStep.innerHTML})`,'')
    });

    //click on 'my Answers' button
   document.querySelector('.btn-answers').addEventListener('click', (e) => {
        answers.classList.toggle('active')
        pushDataLayer(`Click on my answers button`,'')
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
