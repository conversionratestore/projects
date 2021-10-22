const style = `
	<style>
	.modal-custom {
		padding: 20px 0;
		position: fixed; /* Stay in place */		
		display: none;
		z-index: 1; /* Sit on top */
		left: 0;
		top: 0;
		width: 100%; /* Full width */
		height: 100%; /* Full height */
		overflow: auto; /* Enable scroll if needed */
		background-color: rgba(0,0,0,0.6);
	}
	.modal-custom.modal-custom_active {
		display: inline-flex;
	}
	.popup-custom {
		position: relative;
		margin: auto;
	    align-items: center;
	    background: #fff;
	    border-radius: 36px;
	    box-shadow: 0 2px 10px rgba(4, 12, 40, 0.03);
	    box-sizing: border-box;
	    display: -ms-flexbox;
	    display: flex;
	    -ms-flex-direction: column;
	    flex-direction: column;	    
	    max-width: 700px;
	    padding: 55px;
	    width: 100%;
	}
	.popup-custom p.title {
		position: relative;
		font-weight: bold;
		font-size: 36px;
		color: #14142B;
		margin-top: 0;
		margin-bottom: 31px;
	}
	.popup-custom .title.save  {
		margin-bottom: 16px;
		text-align: center;
	}
	.popup-custom .title span.styled{
		position: relative;
	}
	.popup-custom .title span.styled::after{
	    background: #00a2bb;
	    content: '';
	    height: 16px;
	    left: -3%;
	    opacity: 0.4;
	    position: absolute;
	    right: 0;
	    top: 50%;
	    width: 106%;
	}
	.popup-custom p {
		width: 100%;
		margin: 6px 0;
		color: #69727A;
		font-size: 18px;
		line-height: 30px;
		font-family: "Gilroy", sans-serif;
	}
	.btn-custom{
		background-color: #0197b2;
	    border: 1px solid transparent;	    
	    color: #fff;
	    font-weight: 500;
	    font-size: 18px;
	    min-height: 39px;
    	padding: 16px 40px;
    	border-radius: 30px;
    	margin: 40px 0;	
    	font-family: "Gilroy",sans-serif;
	}
	.btn-custom:hover {
	    background-color: #005670;	    
	    color: #fff;
     	cursor: pointer;
	    transition: all 0.3s ease;
	}
	.btn-custom:active {
	    background-color: #00374b;	    
	    color: #fff;
	    outline: none;
	}
	.popup-custom hr {
		width: 100%;
		height: 0;
		margin-top: 1em;
		margin-bottom: 1em;
		border: 0;
		border-top: 1px solid #D9DBE9;
	}
	.popup-custom .footer-custom {
		display: flex;
		flex-direction: row;
		width: 100%;
		justify-content: space-between;
		margin-top: 40px;
	}
	.popup-custom .footer-custom p{
		font-size: 16px;
		line-height: 24px;
		color: #747B96;
		margin: 0 0 8px;
	}
	.popup-custom .footer-custom p.bold{
		font-size: 20px;
		font-weight: bold;
		color: #1F253C;
	} 
	.popup-custom .clock {
		margin-bottom: 20px;
	}
	.footer-custom > div p {
		text-align: left;
	}
	.popup-custom svg {
		height: 10px;
		position: absolute;
		top: 3%;
		right: 5%;
		cursor: pointer;
	}
	</style>
`

const page = `
<div class="modal-custom modal-custom_active">
	<div class="popup-custom">
	    <img class="clock" src="https://conversionratestore.github.io/projects/uplead/img/clock.svg" alt="clock">
	    <p class="title save"><span class="styled">Save 25%</span></p>
	    <p class="title">by subscribing to our Annual Plan</p>
	    <p>Hey (user name), we hope that UpLead has beed useful to you!<br>Enjoy 25% off by subscribing to our Annual Plans.
	    </p>
	    <p>Please note that <strong>you wont be charged today. You will be charged after the end of your monthly
	        plan.</strong></p>
	    <p>
	        You can cancel in one-click before <strong>August 25th.</strong>
	    </p>
	    <button type="button" class="btn-custom">Start Plan Now</button>
	    <hr>
	    <div class="footer-custom">
		    <div>
		        <img src="https://conversionratestore.github.io/projects/uplead/img/logo.svg" alt="logo">
			</div>
			<div>
		        <p class="bold">(800) 493 - 4084</p>
		        <p>Team@Uplead.com</p>
		        
			</div>
			<div>
		        <p class="bold">Contact Us</p>
		        <p>340 S Lemon Ave Ste<br>1022 Walnut, CA 91789</p>
			</div>    	
		</div>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.971 47.971" data-src="/c69c1c810022c4cf0e39706564b864d5.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28.228 23.986L47.092 5.122a3 3 0 0 0 0-4.242 3 3 0 0 0-4.242 0L23.986 19.744 5.12.88a3 3 0 0 0-4.242 0 3 3 0 0 0 0 4.242l18.865 18.864L.88 42.85a3 3 0 0 0 0 4.242c.586.585 1.354.878 2.12.878a2.99 2.99 0 0 0 2.121-.879l18.865-18.864L42.85 47.09a2.99 2.99 0 0 0 4.242 0 3 3 0 0 0 0-4.242L28.228 23.986z"></path></svg>
	</div>
</div>
`

document.head.insertAdjacentHTML('afterbegin',style)
document.body.insertAdjacentHTML('beforeend',page)

document.addEventListener('click',(e) => {
	if (!e.target.closest('.popup-custom') || !e.target.querySelector('.popup-custom svg')) {
		document.querySelector('.modal-custom').classList.remove('modal-custom_active')
	}
})