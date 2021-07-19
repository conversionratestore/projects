$('body').prepend(`
<style>
    .registerPanel, .sub-title-form {
        display: none;}
    .line-vert {
        border: 0;
        border-right: 1px solid #e8e8e8;
        padding: 0 40px 0 0;
    }

</style>`);

$('#billingPanel .form-block:first-child').prepend(`
    <fieldset class="express-checkout">
       <legend>Рexpress checkout</legend>
       <div class="row">
            <a href="#"  class="col-6">
                <img src="https://conversionratestore.github.io/projects/privatefloor/img/buy-button-black.png" alt="pay icon">
            </a>
            <a href="#" class="col-6">
                <img src="https://conversionratestore.github.io/projects/privatefloor/img/buy-button-white.png" alt="pay icon">
            </a>
        </div>
  </fieldset>
`);
