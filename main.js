// FUNÇÃO PRINCIPAL
$(document).ready(function(){
    // FUNÇÃO SLIDESHOW
    $('#showcase').slick({
        autoplay:true
    });

    // FUNÇÃO MENU
    $('.botao-menu button').click(function() {
        $('.menu').slideToggle();
    })
})