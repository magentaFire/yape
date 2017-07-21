$(document).ready(start);

function start() {
    var codigoGuardado = "";
    $('.carousel.carousel-slider').carousel({ fullWidth: true });
    $('.carousel.carousel-slider').css({
        "height": "46vh"
    });

    // Script para pagina 1 de verificacion de datos
    $("#phone").keyup(verificaDatos);
    $("#terms").click(verificaDatos);
    $("#btnRegistro").click(function () {
        location.href = "public/registro.html";
    });
    $("#btnContinuar").click(enviaJSON);

    // Declaración de funciones
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
            var codigoAGuardar = data.data.code;
            var numeroTelefonico = $("#phone").val();
            localStorage.setItem("codigo", codigoAGuardar);
            localStorage.setItem("num_telefono", numeroTelefonico);
        })
        location.href = "ingresacodigo.html";
    }
}
