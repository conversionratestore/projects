window.onload = function () {
  let paymentFlowStyle = /*html*/ `
        <style>        

            #hubspot-messages-iframe-container iframe{
                top: -145px !important;
            }
    
            #paymentForm >.row{
                display: none;
            }
    
            #paymentForm >:nth-child(2){
                display: none;
            }
            #hubspot-messages-iframe-container {
                z-index: 0 !important;
            }

            body{
                padding-bottom: 95px;
            }  
    
            .payment-flow-section{
                position: fixed;
                bottom: 0;
                display: block;
                width: 100%;
                background: #000000;
                box-shadow: 0px 0px 22px rgba(0, 0, 0, 0.25);
                border-radius: 10px;
                z-index: 2147483649 !important;
                padding: 7px 16px 16px;
                font-family: 'Poppins', sans-serif;
            }
    
            .payment-wrapper{
                width: unset;
                text-align: end;
            }
    
            .payment-block-discount{
                display: flex;
                align-items: baseline;
                justify-content: space-between;
                margin: 0;
            }
    
            .payment-title{
                font-family: 'Poppins', sans-serif;
                font-weight: 500;
                font-size: 18px;
                line-height: 27px;
                color: #FFFFFF;
                margin-bottom: 0;         
            }
    
            .discount{
                padding: 0 4px;
                font-weight: 400;
                font-size: 12px;
                line-height: 18px;
                color: #FFFFFF;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 5px;
            }
    
            .payment-text{
                display: flex;
                float: left;
                font-weight: 300;
                font-size: 10px;
                line-height: 21px;
                color: rgba(255, 255, 255, 0.6);
                align-items: stretch;
            }
    
            .payment-box-price{
                display: flex;
                align-items: center;
                justify-content: flex-end;
                margin-bottom: 5px;
            }
    
            .crossed-price-flow{
                font-weight: 500;
                font-size: 14px;
                line-height: 21px;
                text-decoration-line: line-through;
                color: #9C9C9C;
                margin: 0 7px 0 0;
            }
    
            .price-flow{
                font-weight: 600;
                font-size: 14px;
                line-height: 21px;
                color: #F85736;
            }
    
            .payment-btn-box{
                width: unset;
                display: flex;
                align-items: center;
                justify-content: space-around;
                
            }
    
            .payment-btn{
                display: inline-flex;
                width: 100%;
                max-width: 95px;
                height: 36px;
                align-items: center;
                justify-content: center;
                border-radius: 70px;
                cursor: pointer;
                outline: none;
                border: none;
            }
    
            .payment-btn:not(:last-child){
                margin: 0 9px 0 0;
            }
    
            .apple-pay-btn{
                background: #FFFFFF;
            }
    
            .pall-pay-btn{
                background: #FFC439;
            }
    
            .card-pay-btn{
                background: #F85736;          
            }
    
            .card-pay-text{
                font-family: 'Roboto', sans-serif;
                font-weight: 500;
                font-size: 13px;
                line-height: 15px;
                color: #FFFFFF;
                margin-right: 4px;
            }
    
            .google-pay-btn{
                background: #FFFFFF;
            }
    
            @media (min-width: 768px) {
                #hubspot-messages-iframe-container iframe{
                    top: -110px !important;
                }
    
                .payment-flow-section{
                    padding: 20px 30px;
                }

                .fix-width-block{
                    display: flex;
                    width: 870px;
                    margin: auto;
                }
    
                .payment-wrapper{
                    width: calc(100% / 2);
                    text-align: unset;
                }
    
                .payment-block-discount{
                    display: inline-flex;
                    align-items: center;
                    margin: 0 20px 0 0;
                    height: unset;
                }
    
                .payment-title{
                    font-size: 24px;
                    line-height: 36px;
                    margin: 0 10px 0 0;            
                }
    
                .discount{
                    padding: 0 4px;
                    font-size: 14px;
                    line-height: 21px;
                }
    
                .payment-box-price{
                    margin-bottom: 0;
                    justify-content: start;
                }
    
                .payment-btn-box{
                    width: calc(100% / 2);
                    display: flex;
                    align-items: center;
                    justify-content: flex-end;
                }
    
                .payment-text{
                    display: inline-block;
                    float: unset;
                    line-height: 1;
                    max-width: 131px;
                    font-size: 12px;
                }
    
                .crossed-price-flow{
                    font-size: 18px;
                    line-height: 27px;
                    margin: 0 7px 0 0;
                }
    
                .price-flow{
                    font-weight: 600;
                    font-size: 18px;
                    line-height: 27px;
                }
    
                .payment-btn{
                    max-width: 130px;
                }
    
                .payment-btn:not(:last-child){
                    margin: 0 14px 0 0;
                }
    
                .card-pay-text{
                    font-size: 15px;
                    line-height: 18px;
                    margin-right: 9px;
                }
    
            }
    
    
    
        </style>
    `

  let paymentFlow = /*html*/ `
        <div class="payment-flow-section">
            <div class="fix-width-block">
                <div class="payment-wrapper">
                    <div class="payment-block-discount">
                        <p class="payment-title">Get Samcart</p>
                        <span class="discount">40% OFF</span>
                    </div>
                    <span class="payment-text">30 days money-back guarantee</span>
                    <div class="payment-box-price">
                        <span class="crossed-price-flow">$580.00</span>
                        <span class="price-flow">$349.00</span>
                    </div>
                </div>
                <div class="payment-btn-box"></div>
            </div>
        </div>
    
    `

  let applePayBtn = /*html*/ `
        <a href="#payments" class="payment-btn apple-pay-btn">
            <svg width="40" height="16" viewBox="0 0 40 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.29135 2.06292C6.83304 2.60244 6.10292 3.02996 5.37402 2.96733C5.27773 2.23995 5.64096 1.46079 6.06026 0.977872C6.51735 0.427518 7.31695 0.0325154 7.9654 0C8.04219 0.759898 7.74234 1.50655 7.29257 2.06292H7.29135ZM7.95809 3.11064C6.89886 3.04682 5.98957 3.71158 5.48738 3.71158C4.97422 3.71158 4.2051 3.14195 3.36772 3.16122C2.28168 3.17447 1.26634 3.78745 0.714177 4.77375C-0.435244 6.73551 0.415547 9.64022 1.51987 11.2395C2.05984 12.0295 2.70586 12.8954 3.55787 12.8713C4.36356 12.8388 4.68778 12.345 5.65925 12.345C6.6429 12.345 6.92202 12.8713 7.78013 12.852C8.66139 12.8388 9.21965 12.062 9.75962 11.272C10.3752 10.3748 10.6287 9.49571 10.6421 9.45236C10.6287 9.43309 8.93442 8.78759 8.92223 6.84269C8.90883 5.2109 10.2545 4.43414 10.3118 4.38958C9.55606 3.26118 8.36276 3.14195 7.95687 3.11185L7.95809 3.11064ZM14.0721 0.902003V12.7701H15.9187V8.71293H18.4723C20.8016 8.71293 22.4398 7.11365 22.4398 4.80506C22.4398 2.49165 20.8345 0.903206 18.5357 0.903206L14.0721 0.902003ZM15.9187 2.45793H18.0457C19.6449 2.45793 20.5603 3.31055 20.5603 4.80988C20.5603 6.3092 19.6449 7.16905 18.0335 7.16905H15.9187V2.45793ZM25.8028 12.858C26.9644 12.858 28.037 12.2752 28.527 11.3455H28.566V12.7701H30.2724V6.86076C30.2724 5.1555 28.9024 4.04636 26.7876 4.04636C24.8325 4.04636 23.3845 5.16875 23.3345 6.7054H24.991C25.1311 5.972 25.804 5.49511 26.7376 5.49511C27.8676 5.49511 28.4965 6.02138 28.4965 6.98841V7.63992L26.1989 7.77841C24.0524 7.90968 22.8969 8.78157 22.8969 10.3062C22.8969 11.8428 24.0914 12.8592 25.804 12.8592L25.8028 12.858ZM26.3049 11.4527C25.3201 11.4527 24.6923 10.9818 24.6923 10.2616C24.6923 9.51498 25.2957 9.07542 26.4439 9.00557L28.4953 8.88032V9.5511C28.4953 10.6627 27.5494 11.4527 26.2976 11.4527H26.3049ZM32.5518 16C34.3472 16 35.1931 15.3099 35.9294 13.2338L39.1667 4.16438H37.2945L35.1237 11.1697H35.0847L32.9138 4.16438H30.9843L34.1083 12.8014L33.9426 13.3277C33.6561 14.2129 33.2002 14.5561 32.3872 14.5561C32.241 14.5561 31.9618 14.538 31.8473 14.526V15.9506C31.9545 15.9807 32.4128 15.994 32.5457 15.994L32.5518 16Z" fill="#060606"/>
            </svg>
        </a>
    
    `

  let pallPayBtn = /*html*/ `
        <a href="#payments" class="payment-btn pall-pay-btn">
            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M12.1571 5.36919C12.3088 4.19614 12.1571 3.41411 11.5488 2.68794C10.889 1.90591 9.72284 1.51489 8.25275 1.51489H3.94217C3.68867 1.51489 3.3848 1.79419 3.33334 2.07349L1.55884 14.4743C1.55884 14.6977 1.71105 14.977 1.96455 14.977H4.60138L4.44917 16.2059C4.39825 16.4293 4.55046 16.5969 4.75305 16.5969H6.98471C7.23875 16.5969 7.49171 16.4293 7.54263 16.1501V15.9825L7.99871 13.0778V12.9661C8.04963 12.6868 8.30313 12.4633 8.55663 12.4633H8.86159C11.0413 12.4633 12.715 11.5137 13.222 8.72075C13.4755 7.54771 13.3748 6.5981 12.7659 5.92778C12.6137 5.70435 12.3597 5.53677 12.1571 5.36919Z" fill="#009CDE"/>
                    <path d="M12.1571 5.36919C12.3088 4.19614 12.1571 3.41411 11.5488 2.68794C10.889 1.90591 9.72284 1.51489 8.25275 1.51489H3.94217C3.68867 1.51489 3.3848 1.79419 3.33334 2.07349L1.55884 14.4743C1.55884 14.6977 1.71105 14.977 1.96455 14.977H4.60138L5.3115 10.3407L5.26059 10.5083C5.31151 10.1731 5.565 9.94966 5.86888 9.94966H7.13638C9.62155 9.94966 11.5488 8.83247 12.1571 5.70435C12.1067 5.53677 12.1571 5.48091 12.1571 5.36919Z" fill="#012169"/>
                    <path d="M5.97125 5.36919C6.02109 5.20161 6.12292 5.03403 6.27513 4.92231C6.37588 4.92231 6.4268 4.86646 6.52809 4.86646H9.87505C10.2813 4.86646 10.6859 4.92231 10.9914 4.97817C11.0922 4.97817 11.194 4.97817 11.2953 5.03403C11.3966 5.08989 11.4979 5.08989 11.5488 5.14575C11.5992 5.14575 11.6495 5.14575 11.701 5.14575C11.8527 5.20161 12.0049 5.31333 12.1571 5.36919C12.3088 4.19614 12.1571 3.41411 11.5488 2.63208C10.94 1.85005 9.7743 1.51489 8.30313 1.51489H3.94217C3.68867 1.51489 3.3848 1.73833 3.33334 2.07349L1.55884 14.4743C1.55884 14.6977 1.71105 14.977 1.96455 14.977H4.60138L5.3115 10.3407L5.97125 5.36919Z" fill="#003087"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="13" height="17.875" fill="white" transform="translate(0.833496 0.0625)"/>
                    </clipPath>
                    </defs>
            </svg>
            <svg width="52" height="16" viewBox="0 0 52 16" fill="none" xmlns="http://www.w3.org/2000/svg">                  
                    <path d="M6.91331 2.4585H2.96131C2.70797 2.4585 2.45464 2.6585 2.40397 2.9085L0.833306 12.9085C0.78264 13.1085 0.93464 13.2585 1.13731 13.2585H3.01197C3.26531 13.2585 3.51864 13.0585 3.56931 12.8085L3.97464 10.1085C4.02531 9.85849 4.22797 9.65849 4.53197 9.65849H5.79864C8.38264 9.65849 9.90264 8.40849 10.308 5.9585C10.46 4.9085 10.308 4.0585 9.80131 3.4585C9.24397 2.8085 8.23064 2.4585 6.91331 2.4585ZM7.36931 6.1085C7.16664 7.50849 6.05197 7.50849 5.03864 7.50849H4.43064L4.83597 4.9085C4.83597 4.7585 4.98797 4.6585 5.13997 4.6585H5.39331C6.10264 4.6585 6.76131 4.6585 7.11597 5.0585C7.36931 5.2585 7.47064 5.6085 7.36931 6.1085Z" fill="#003087"/>
                    <path d="M18.6682 6.05847H16.7935C16.6415 6.05847 16.4895 6.15847 16.4895 6.30847L16.3882 6.80847L16.2362 6.60847C15.8309 6.00847 14.9189 5.80847 14.0069 5.80847C11.9295 5.80847 10.1562 7.35847 9.80152 9.55847C9.59885 10.6585 9.85219 11.7085 10.5109 12.4085C11.0682 13.0585 11.9295 13.3585 12.8922 13.3585C14.5642 13.3585 15.5269 12.3085 15.5269 12.3085L15.4255 12.8085C15.3749 13.0085 15.5269 13.2085 15.7295 13.2085H17.4522C17.7055 13.2085 17.9589 13.0085 18.0095 12.7585L19.0229 6.35847C19.0735 6.25847 18.8709 6.05847 18.6682 6.05847ZM16.0842 9.65847C15.8815 10.7085 15.0709 11.4585 13.9562 11.4585C13.3989 11.4585 12.9935 11.3085 12.6895 10.9585C12.3855 10.6085 12.2842 10.1585 12.3855 9.65847C12.5375 8.60847 13.4495 7.85847 14.5135 7.85847C15.0709 7.85847 15.4762 8.05847 15.7802 8.35847C16.0335 8.70847 16.1349 9.15847 16.0842 9.65847Z" fill="#003087"/>
                    <path d="M28.7508 6.05847H26.8761C26.6735 6.05847 26.5214 6.15847 26.4201 6.30847L23.7854 10.1085L22.6708 6.45847C22.6201 6.20847 22.3668 6.05847 22.1641 6.05847H20.2895C20.0868 6.05847 19.8841 6.25847 19.9854 6.50847L22.0628 12.5585L20.0868 15.2585C19.9348 15.4585 20.0868 15.7585 20.3401 15.7585H22.2148C22.4174 15.7585 22.5694 15.6585 22.6708 15.5085L29.0041 6.50847C29.1561 6.35847 29.0041 6.05847 28.7508 6.05847Z" fill="#003087"/>
                    <path d="M35.0334 2.4585H31.0814C30.8281 2.4585 30.5748 2.6585 30.5241 2.9085L28.9534 12.8585C28.9028 13.0585 29.0548 13.2085 29.2574 13.2085H31.2841C31.4868 13.2085 31.6388 13.0585 31.6388 12.9085L32.0948 10.0585C32.1454 9.8085 32.3481 9.6085 32.6521 9.6085H33.9188C36.5028 9.6085 38.0228 8.3585 38.4281 5.9085C38.5801 4.8585 38.4281 4.0085 37.9214 3.4085C37.3134 2.8085 36.3508 2.4585 35.0334 2.4585ZM35.4894 6.1085C35.2868 7.5085 34.1721 7.5085 33.1588 7.5085H32.5508L32.9561 4.9085C32.9561 4.7585 33.1081 4.6585 33.2601 4.6585H33.5134C34.2228 4.6585 34.8814 4.6585 35.2361 5.0585C35.4894 5.2585 35.5401 5.6085 35.4894 6.1085Z" fill="#009CDE"/>
                    <path d="M46.7883 6.05847H44.9136C44.7616 6.05847 44.6096 6.15847 44.6096 6.30847L44.5083 6.80847L44.3563 6.60847C43.951 6.00847 43.039 5.80847 42.127 5.80847C40.0496 5.80847 38.2763 7.35847 37.9216 9.55847C37.719 10.6585 37.9723 11.7085 38.631 12.4085C39.1883 13.0585 40.0496 13.3585 41.0123 13.3585C42.6843 13.3585 43.647 12.3085 43.647 12.3085L43.5456 12.8085C43.495 13.0085 43.647 13.2085 43.8496 13.2085H45.5723C45.8256 13.2085 46.079 13.0085 46.1296 12.7585L47.143 6.35847C47.143 6.25847 46.991 6.05847 46.7883 6.05847ZM44.1536 9.65847C43.951 10.7085 43.1403 11.4585 42.0256 11.4585C41.4683 11.4585 41.063 11.3085 40.759 10.9585C40.455 10.6085 40.3536 10.1585 40.455 9.65847C40.607 8.60847 41.519 7.85847 42.583 7.85847C43.1403 7.85847 43.5456 8.05847 43.8496 8.35847C44.1536 8.70847 44.255 9.15847 44.1536 9.65847Z" fill="#009CDE"/>
                    <path d="M49.0174 2.7085L47.3961 12.8585C47.3454 13.0585 47.4974 13.2085 47.7001 13.2085H49.3214C49.5747 13.2085 49.8281 13.0085 49.8787 12.7585L51.5001 2.8085C51.5507 2.6085 51.3987 2.4585 51.1961 2.4585H49.3721C49.1694 2.4585 49.0681 2.5585 49.0174 2.7085Z" fill="#009CDE"/>                                      
            </svg>
        </a>
    `

  let cardPayBtn = /*html*/ `
        <a href="#payments" class="payment-btn card-pay-btn">
            <span class="card-pay-text">Pay with</span> 
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.416992 11.6875C0.416992 12.2677 0.64746 12.8241 1.0577 13.2343C1.46793 13.6445 2.02433 13.875 2.60449 13.875H15.7295C16.3097 13.875 16.8661 13.6445 17.2763 13.2343C17.6865 12.8241 17.917 12.2677 17.917 11.6875V5.67188H0.416992V11.6875ZM2.99512 8.71875C2.99512 8.40795 3.11858 8.10988 3.33835 7.89011C3.55812 7.67034 3.85619 7.54688 4.16699 7.54688H6.04199C6.35279 7.54688 6.65086 7.67034 6.87063 7.89011C7.0904 8.10988 7.21387 8.40795 7.21387 8.71875V9.5C7.21387 9.8108 7.0904 10.1089 6.87063 10.3286C6.65086 10.5484 6.35279 10.6719 6.04199 10.6719H4.16699C3.85619 10.6719 3.55812 10.5484 3.33835 10.3286C3.11858 10.1089 2.99512 9.8108 2.99512 9.5V8.71875ZM15.7295 0.125H2.60449C2.02433 0.125 1.46793 0.355468 1.0577 0.765704C0.64746 1.17594 0.416992 1.73234 0.416992 2.3125V3.32812H17.917V2.3125C17.917 1.73234 17.6865 1.17594 17.2763 0.765704C16.8661 0.355468 16.3097 0.125 15.7295 0.125Z" fill="white"/>
            </svg>
        </a>
    `

  let googlePayBtn = /*html*/ `
        <a href="#payments" class="payment-btn google-pay-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="16" viewBox="0 0 437 174">
            <g fill="none" fill-rule="nonzero">
                <path fill="#5F6368" d="M207.2 84.6v50.8h-16.1V10h42.7c10.3-.2 20.2 3.7 27.7 10.9 7.5 6.7 11.7 16.4 11.5 26.4.2 10.1-4 19.8-11.5 26.6-7.5 7.1-16.7 10.7-27.6 10.7h-26.7zm0-59.2v43.8h27c6 .2 11.8-2.2 15.9-6.5 8.5-8.2 8.6-21.7.4-30.2l-.4-.4c-4.1-4.4-9.9-6.8-15.9-6.6l-27-.1zM310.1 46.8c11.9 0 21.3 3.2 28.2 9.5 6.9 6.4 10.3 15.1 10.3 26.2v52.8h-15.4v-11.9h-.7c-6.7 9.8-15.5 14.7-26.6 14.7-9.4 0-17.4-2.8-23.7-8.4-6.2-5.2-9.7-12.9-9.5-21 0-8.9 3.4-15.9 10.1-21.2 6.7-5.3 15.7-7.9 26.9-7.9 9.6 0 17.4 1.8 23.6 5.2v-3.7c0-5.5-2.4-10.7-6.6-14.2-4.3-3.8-9.8-5.9-15.5-5.9-9 0-16.1 3.8-21.4 11.4l-14.2-8.9c7.7-11.1 19.2-16.7 34.5-16.7zm-20.8 62.3c0 4.2 2 8.1 5.3 10.5 3.6 2.8 8 4.3 12.5 4.2 6.8 0 13.3-2.7 18.1-7.5 5.3-5 8-10.9 8-17.7-5-4-12-6-21-6-6.5 0-12 1.6-16.4 4.7-4.3 3.2-6.5 7.1-6.5 11.8zM437 49.6l-53.8 123.6h-16.6l20-43.2-35.4-80.3h17.5l25.5 61.6h.4l24.9-61.6z"/>
                <path fill="#4285F4" d="M142.1 73.6c0-4.9-.4-9.8-1.2-14.6H73v27.7h38.9c-1.6 8.9-6.8 16.9-14.4 21.9v18h23.2c13.6-12.5 21.4-31 21.4-53z"/>
                <path fill="#34A853" d="M73 144c19.4 0 35.8-6.4 47.7-17.4l-23.2-18c-6.5 4.4-14.8 6.9-24.5 6.9-18.8 0-34.7-12.7-40.4-29.7H8.7v18.6C20.9 128.6 45.8 144 73 144z"/>
                <path fill="#FBBC04" d="M32.6 85.8c-3-8.9-3-18.6 0-27.6V39.7H8.7a71.39 71.39 0 0 0 0 64.6l23.9-18.5z"/>
                <path fill="#EA4335" d="M73 28.5c10.3-.2 20.2 3.7 27.6 10.8l20.5-20.5C108.1 6.5 90.9-.2 73 0 45.8 0 20.9 15.4 8.7 39.7l23.9 18.6C38.3 41.2 54.2 28.5 73 28.5z"/>
            </g>
            </svg>
        </a>
    `

  document.head.insertAdjacentHTML("beforeend", paymentFlowStyle)
  document.body.insertAdjacentHTML("afterbegin", paymentFlow)

  // displayed without form information
  document.querySelector("#fname").value = "Conversion"
  document.querySelector("#lname").value = "Rate Store"
  document.querySelector("#email").value = "analytic@conversionrate.store"
  document.querySelector("#phone").value = "0994183099"

  // clone box Payment Methods
  document.querySelector("#order-summary-widget").after(document.querySelector("#payments"))
  document.querySelector("#order-summary-widget").after(document.querySelector(".tpl-6__checkout__subtitle.mt-sm-20.mb-16"))

  // displayed price
  document.querySelector(".crossed-price-flow").innerText = document.querySelector(".sc-element .mobile-column-width #sc2aefd0ed-25fa-4782-ac27-cb984e1f75e1 p").textContent + ".00"
  document.querySelector(".price-flow").innerText = document.querySelector("span#total").textContent

  // displayed btn
  if (document.querySelector(".apple-pay:not(.ng-hide)")) {
    document.querySelector(".payment-btn-box").insertAdjacentHTML("beforeend", applePayBtn)
    scrolling(".apple-pay-btn", "#digitalWalletRadio")
  }

  if (document.querySelector("#payPalRadio")) {
    document.querySelector(".payment-btn-box").insertAdjacentHTML("beforeend", pallPayBtn)
    scrolling(".pall-pay-btn", "#payPalRadio")
  }

  if (document.querySelector("#creditCardRadio")) {
    document.querySelector(".payment-btn-box").insertAdjacentHTML("beforeend", cardPayBtn)
    scrolling(".card-pay-btn", "#creditCardRadio")
  }

  if (document.querySelector(".google-pay:not(.ng-hide)")) {
    document.querySelector(".payment-btn-box").insertAdjacentHTML("beforeend", googlePayBtn)
    scrolling(".google-pay-btn", "#digitalWalletRadio")
  }

  // scrolling
  let eventVar = "desktop"

  if (window.innerWidth <= 768) {
    eventVar = "mobile"
  }

  function scrolling(btnSelector, onClick) {
    let btn = document.querySelector(btnSelector)
    let eLabel = ""

    btn.addEventListener("click", (e) => {
      e.preventDefault()

      if (btnSelector === ".apple-pay-btn") {
        eLabel = "Apple Pay"
      }
      if (btnSelector === ".pall-pay-btn") {
        eLabel = "PayPal"
      }
      if (btnSelector === ".card-pay-btn") {
        eLabel = "Pay with bank card"
      }
      if (btnSelector === ".google-pay-btn") {
        eLabel = "Google Pay"
      }

      window.dataLayer = window.dataLayer || []
      dataLayer.push({
        event: "event-to-ga",
        eventCategory: `Exp - payment flow update ${eventVar}`,
        eventAction: "Clicks banner buttons",
        eventLabel: eLabel,
      })

      document.querySelector(onClick).click()

      document.querySelector("#payments").scrollIntoView({ block: "center", behavior: "smooth" })

      if (btnSelector === ".pall-pay-btn") {
        document.querySelector("#placeOrder").click()
      }
    })
  }

  window.dataLayer = window.dataLayer || []
  dataLayer.push({
    event: "event-to-ga",
    eventCategory: `Exp - payment flow update ${eventVar}`,
    eventAction: "loaded",
  })
  ;(function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        ;(h.hj.q = h.hj.q || []).push(arguments)
      }
    h._hjSettings = { hjid: 2592989, hjsv: 6 }
    a = o.getElementsByTagName("head")[0]
    r = o.createElement("script")
    r.async = 1
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv
    a.appendChild(r)
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")
  window.hj =
    window.hj ||
    function () {
      ;(hj.q = hj.q || []).push(arguments)
    }
  hj("trigger", `payment_flow_update ${eventVar}`)
}
