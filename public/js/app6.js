$(document).ready(start);

function start() {
    var tarjetaLocal = localStorage.getItem("tarjeta_usuario"); 
    var last4Digits = tarjetaLocal.slice(12, 16)
    var localCodigo = localStorage.getItem("codigo"); 
    console.log(localCodigo);
    
    $("#last4").text(last4Digits);
    $("#passwordKey").keyup(verificaKey)

    function verificaKey(){
        if(localCodigo == $("#passwordKey").val()){
            $("#btnEnviar").removeClass("disabled");
        }
        else{
            $("#btnEnviar").addClass("disabled");
        }
    }
}
