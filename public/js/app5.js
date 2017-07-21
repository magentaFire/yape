$(document).ready(start);

function start() {
    var card = false;
    var mes = false;
    var anio = false;

    $("#cardnumber").keyup(verificaNumeros);
    $("#mesInput").keyup(verificaMes);
    $("#anioInput").keyup(verificaAnio);
    $("#btnContinuar2").click(function(){
        localStorage.setItem("tarjeta_usuario", $("#cardnumber").val());
        location.href = "registrotarjeta_clave.html";
    })

    function verificaNumeros(){
        if($("#cardnumber").val().match(/^\d+$/) && $("#cardnumber").val().length == 16){
            card = true;
        }
        else{
            cardNumber = false;
        }
        verificaTodo()
    }

    function verificaMes(){
        if($("#mesInput").val().match(/^[0-9]+$/)){
            mes = true;
        }
        else{
            mes = false;
        }
        verificaTodo()
    }

    function verificaAnio(){
        if($("#anioInput").val().match(/^[0-9]+$/)){
            anio = true;
        }
        else{
            anio = false;
        }
        verificaTodo()
    }

    function verificaTodo(){
        if (card == true && mes == true && anio == true){
            $("#btnContinuar2").removeClass("disabled");
        }
        else{
            $("#btnContinuar2").addClass("disabled");
        }
    }
}
