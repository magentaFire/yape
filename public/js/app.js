$(document).ready(start);

function start(){
    $('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel.carousel-slider').css({
        "height": "46vh"
    });

    $("#btnRegistro").click(function(){
        location.href = "public/registro.html";
    });
}
