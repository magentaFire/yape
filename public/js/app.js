$(document).ready(start);

function start() {
    var usuario = {
        nombre: "",
        email: "",
        password: "",
        codigo: "",
    };
    var usuarioLocalStorage = JSON.stringify(usuario);

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
            var codigo = data.data.code;
            console.log(data.data.code);
            var userCode = usuario.codigo = data.data.code;
            localStorage.setItem("usuario", data.data.code);
            var usuarioGuardado = localStorage.getItem("usuario");
            console.log(usuarioGuardado);
        })
        // location.href = "ingresacodigo.html";
    }
}
