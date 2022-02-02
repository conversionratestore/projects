let startFunc = setInterval(() => {
  if (document.querySelector("#flowers")) {
    clearInterval(startFunc)

    let styleScientific = /*html */ `
      <style>
      .scientific_block {

      }

      .scientific_block > div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 28px;
      }

      .scientific_block > div svg:not(.hint){
        width: 15%;
        min-width: 54px;
        max-width: 54px;
      }

      .scientific_block > div h3{
        width: 80%;
        margin-left: 15px;
        font-family: "Roboto", sans-serif;
        font-weight: 600;
        font-size: 22px !important;
        line-height: 26px !important;
        letter-spacing: -0.03em;
        color: #0C0B0B;        
      }

      .scientific_block > div h3 > span{
        position: relative;
        display: inline-block;
      }

      .scientific_block .hint{
        position: absolute;
        right: -22px;
        bottom: 4px;
      }

      .scientific_block > p:not(:last-child){
        font-family: "Roboto", sans-serif;
        font-weight: 400;
        font-size: 18px !important;
        line-height: 24px !important;
        color: #515151;
        margin: 0;
      }

      .scientific_block > p:last-child{
        border: 2px solid #FF3C81;
        border-radius: 6px;
        padding: 19px 17px;
        font-family: 'DINEngschrift LT', sans-serif;
        font-weight: 400;
        font-size: 20px !important;
        line-height: 150% !important;
        text-align: center;
        letter-spacing: 0.02em;
        text-transform: uppercase;
        color: #0C0B0B;
        margin: 30px 0 80px;
      }

      .scientific_block > p:last-child span{
        color: #FF3C81;
      }

      .scientific_block .hidden_text{
        position: absolute;
        opacity: 0;
        pointer-events: none;
        font-weight: 400;
        font-size: 12px;
        line-height: 17px;
        color: #212529;
        padding: 12px;
        background: #F9F8F6;
        box-shadow: 0px 0.688073px 4.06px rgba(0, 0, 0, 0.07), -6px 7.26px 20.4px rgba(0, 0, 0, 0.1);
        border-radius: 7px;
        width: 163px;
        left: -76px;
        top: -22px;
        z-index: 1;
      }

        .scientific_block .hidden_text.toggle_opacity {
            opacity: 1;
        }

        @media (max-width: 360px) {
            .scientific_block > div h3{
                font-size: 18px !important;
            }

            .scientific_block > p:not(:last-child){
                font-size: 15px !important;
            }

            .scientific_block > p:last-child{
                font-size: 16px !important;
            }

            .scientific_block .hidden_text{
                left: -93px;
            }
        }

        @media (max-width: 280px) {
            .scientific_block > div h3{
                font-size: 18px !important;
            }

            .scientific_block > p:not(:last-child){
                font-size: 14px !important;
            }

            .scientific_block > p:last-child{
                font-size: 14px !important;
            }

            .scientific_block .hidden_text{
                left: -93px;
            }
        }

        .js-mobile.effectiveness .container .row:nth-child(3){
            margin-top: 30px;
        }

        .js-mobile.effectiveness .container .row:nth-child(2) .col-md-8.col-sm-8.col-xs-8.d-flex.align-items-center{
            padding: 0 5px;
        }
      </style>
      `

    let scientificBlock = /*html */ `
    <div class="scientific_block">
        <div>
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M28.582 27.1055C28.582 27.9799 29.2896 28.6875 30.1641 28.6875H42.8203C43.6948 28.6875 44.4023 27.9799 44.4023 27.1055V11.0742C44.4023 10.1998 43.6948 9.49219 42.8203 9.49219H30.1641C29.2896 9.49219 28.582 10.1998 28.582 11.0742V27.1055Z" fill="#FF3C7F"/>
                <path d="M41.2383 6.32812V3.16406H42.8203C43.6948 3.16406 44.4023 2.45647 44.4023 1.58203C44.4023 0.70759 43.6948 0 42.8203 0H30.1641C29.2896 0 28.582 0.70759 28.582 1.58203C28.582 2.45647 29.2896 3.16406 30.1641 3.16406H31.7461V6.32812H41.2383Z" fill="#FCBC4D"/>
                <path d="M33.3281 35.0156H39.6562C40.5307 35.0156 41.2383 34.308 41.2383 33.4336V31.8516H31.7461V33.4336C31.7461 34.308 32.4537 35.0156 33.3281 35.0156Z" fill="#FF3C7F"/>
                <path d="M22.791 22.2539H25.418V15.9258H22.9339C14.6711 15.9258 7.29248 22.072 6.508 30.2976C5.60804 39.7331 13.0039 47.6719 22.254 47.6719H23.836V50.8359H14.3438C13.4694 50.8359 12.7618 51.5435 12.7618 52.418C12.7618 53.2924 13.4694 54 14.3438 54H39.6563C40.5307 54 41.2383 53.2924 41.2383 52.418C41.2383 51.5435 40.5307 50.8359 39.6563 50.8359H30.1641V47.6719H37.0965C37.6957 47.6719 38.2435 47.3333 38.5114 46.7974L39.6563 44.5078H45.9844C46.8581 44.5078 47.5665 43.7995 47.5665 42.9258C47.5665 42.0521 46.8581 41.3438 45.9844 41.3438C39.5757 41.3438 25.8554 41.3438 22.254 41.3438C16.8424 41.3438 12.4885 36.8153 12.7751 31.3412C13.0439 26.2082 17.6511 22.2539 22.791 22.2539Z" fill="#FCBC4D"/>
            </svg>
            <h3>
                Scientifically proven to <br> provide better protection than other mosquito 
                <span>repellants
                    <svg class="hint" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.9612 10.8V8M7.9612 5.20008H7.97791M14.9222 8C14.9222 4.13401 11.8056 1 7.96111 1C4.1166 1 1 4.13401 1 8C1 11.866 4.1166 15 7.96111 15C11.8056 15 14.9222 11.866 14.9222 8Z" stroke="#777777" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <span class="hidden_text">Poseidon Sciences R&D <br> conducted research in 2021 <br> to compare the repellent <br> effect of Buzzpatch and <br> other experimental patches <br> against the common house <br> mosquito.</span>
                </span>
            </h3>
        </div>
        <p>Poseidon Science R&D conducted scientific research to compare BuzzPatch mosquito repellant with other commonly available repellants on the market.</p>
        <p>BuzzPatch stickers were scientifically proven to provide 16% better protection than next best alternatives.</p>
        <p>BuzzPatch provides <span>16% better protection <br> for your family</span> han the next best <br> repellant of similar kind on the market</p>
    </div>      
      `
    document.head.insertAdjacentHTML("beforeend", styleScientific)
    document.querySelectorAll(".js-mobile.effectiveness .container .row")[0].insertAdjacentHTML("beforebegin", scientificBlock)

    document.querySelectorAll(".js-mobile.effectiveness .container .row")[0].querySelector("img").src = "https://conversionratestore.github.io/projects/buzzpatch/img/time_12.svg"

    document.querySelectorAll(".js-mobile.effectiveness .container .row")[1].querySelector("p").textContent =
      "Our stickers are most effective within 8 hours, and continue to be effective for up to 72 hours."

    document.querySelector(".scientific_block .hint")?.addEventListener("click", (e) => {
      e.stopPropagation()
      document.querySelector(".scientific_block .hidden_text").classList.toggle("toggle_opacity")
    })

    document.addEventListener("click", (e) => {
      document.querySelector(".scientific_block .hidden_text")?.classList.remove("toggle_opacity")
    })
  }
}, 10)
