let style = `
    <style>
        .new_cta {
          border: 1px solid #00A3FA;
          border-radius: 50px;
          color: #00A3FA;
          background-color: #fff;
          padding: 10px;
          width: 100%;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 30px;
        }
        
        .backdrop_cta {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, .3);
          z-index: 9999999;
          display: none;
        }
        
        .backdrop_cta.active {
          display: block;
        }
        
        .backdrop_cta>div {
          width: 95vw;
          max-width: 1260px;
          /*height: 100%;*/
          position: relative;
          display: none;
          margin: 0 auto;
        }
        
        .backdrop_cta>div.active {
          display: block;
        }
        
        .menu_img, .send_img {
          position: absolute;
          border-radius: 5px;
          border: 2px solid #00A3FA;
          overflow: hidden;
        }
        
        .menu_img {
          width: 200px;
          height: 245px;
          top: 160px;
          left: 3%;
        }
        
        .send_img {
          width: 110px;
          height: 60px;
          top: 45px;
          right: 3%;
        }
        
        .menu_img img, .send_img img {
          object-fit: cover;
          height: 100%;
          width: 100%;
        }
        
        .video, .msg {
          position: absolute;
          padding: 15px;
          background-color:#fff;
          border: 2px solid #00A3FA;
          border-radius: 5px;
          text-align: center;    
        }
      
        .video {
          width: 380px;
          top: 160px;
          left: calc(3% + 220px);
        }
        
        .popup_btn {
          border: none;
          border-radius: 30px;
          background-color: #00A3FA;
          color: white;
          font-size: 12px;
          padding: 10px 30px;
          cursor: pointer;
          margin-top: 20px;
        }
        
        .video h3 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 10px;
          color: #303C49;
        }
        
        .video p {
          font-size: 12px;
          color: #627690;
        }
        
        .close_popup {
          position: absolute;
          height: 10px;
          width: 10px;
          background: url("https://conversionratestore.github.io/projects/signaturely/img/close.svg") center center no-repeat;
          background-size:contain;
          top: 10px;
          right: 10px;
          cursor: pointer;
        }
        
        .msg {
          width: 250px;
          padding: 20px 40px;
          right: 3%;
          top: 120px;
        }
    </style>
`

let cta = `<button class="new_cta">How to sign and send your document</button>`

let backdrop = `
    <div class="backdrop_cta">
      <div class="popup1 active">
        <div class="video">
            <div class="close_popup"></div>
            <h3>How to use Signaturely editor?</h3>
            <p>Simply drag and drop the field into the document</p>
            <video src="https://conversionratestore.github.io/projects/signaturely/img/tutor.mp4" controls width="100%"></video>
            <button class="popup_btn">Continue</button>
        </div>
        <div class="menu_img">
          <img src="https://conversionratestore.github.io/projects/signaturely/img/menu.png" alt="">
        </div> 
      </div>
      <div class="popup2">
        <div class="msg">
          <div class="close_popup"></div>
          <p>When you are finished editing <b>click on a “Send” button</b> to recieve signed document</p>
          <button class="popup_btn">Continue</button>
        </div>
        <div class="send_img">
          <img src="https://conversionratestore.github.io/projects/signaturely/img/send.png" alt="">
        </div> 
      </div>
    </div>
`

document.body.insertAdjacentHTML('beforeend', backdrop)
document.body.insertAdjacentHTML('afterbegin', style)

document.querySelector('.popup1 button').addEventListener('click', function () {
    document.querySelector('.popup1').classList.remove('active')
    document.querySelector('.popup2').classList.add('active')
    document.querySelector('.popup1 video').pause()
})

document.querySelectorAll('.close_popup').forEach(function (item) {
    item.addEventListener('click', function () {
        document.querySelector('.popup1').classList.add('active')
        document.querySelector('.popup2').classList.remove('active')
        document.querySelector('.backdrop_cta').classList.remove('active')
        document.querySelector('.popup1 video').pause()
    })
})

document.querySelector('.popup2 button').addEventListener('click', function () {
    document.querySelector('.popup1').classList.add('active')
    document.querySelector('.popup2').classList.remove('active')
    document.querySelector('.backdrop_cta').classList.remove('active')
})


let mut = new MutationObserver(() => {
    console.log('mut')
    if(document.querySelector('.interactModal__fieldBar-fieldWrapper')) {
        if (!document.querySelector('.new_cta')) {
            mut.disconnect()
            start()
            mut.observe(document.body, {
                subtree: true,
                childList: true
            })
        }
    }
})

mut.observe(document.body, {
    subtree: true,
    childList: true
})


function start() {
        document.querySelector('.interactModal__fieldBar-fieldWrapper').insertAdjacentHTML('afterend', cta)

        document.querySelector('.new_cta').addEventListener('click', function () {
            document.querySelector('.backdrop_cta').classList.add('active')
        })
}

