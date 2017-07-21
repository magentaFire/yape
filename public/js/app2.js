$(document).ready(start);

function start() {
    var codigoGuardado = localStorage.getItem("codigo");
    var telefonoGuardado = localStorage.getItem("num_telefono");

    $(".telefono-container").text(telefonoGuardado)
    alert("escribe este código para continuar: " + codigoGuardado);

    $("#codigo").keyup(verificaCodigo);

    function verificaCodigo(){
        console.log($("#codigo").val())
        if ($("#codigo").val() == codigoGuardado){
            location.href = "creausuario.html";
        }
    }
    
    //Falta función para generar otro código con la API y contar 21 segundos
}
