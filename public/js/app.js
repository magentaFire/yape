$(document).ready(start);

function start() {
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.carousel.carousel-slider').css({
        "height": "46vh"
    });

    $("#btnRegistro").click(function () {
        location.href = "public/registro.html";
    });

    // Scripts para pagina 1 de verificacion de datos
    $("#phone").keyup(verificaDatos);
    $("#terms").click(verificaDatos);
    $("#btnContinuar").click(enviaJSON);

    function verificaDatos() {
        if ($("#phone").val().length == 10 && $("#terms").is(":checked")) {
            $("#btnContinuar").removeClass("disabled");
        }
        else{
            $("#btnContinuar").addClass("disabled")
        }
    }

    function enviaJSON(){
        var url = "http://localhost:3000/api/registerNumber"
        var phone = parseInt($("#phone").val());
        var terms = true;
        $.post(url, {
            phone: phone,
            terms: terms
        },
        function(data){
            console.log(data.data.code);
        }
    )
    }
}
