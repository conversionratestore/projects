$('body').prepend(`
<style>
    .breadcrumb  {
        display: none;}
    .btn-back {
        background: url("") no-repeat left center / auto 15px;
        padding: 0 14px 0 32px;
        font-size: 14px;
        line-height: 29px;
        border: 1px solid #000000;
        width: fit-content;
        margin-bottom: 30px;
        display: flex;
        align-items: center;}
        
</style>`)

$('.breadcrumb').after(`<a href="#" class="btn-back">ALL SLIPCOVERS</a>`);
