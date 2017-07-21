$(document).ready(start);

function start() {
    var nombreVerificado = false;
    var emailVerificado = false;
    var keyVerificado = false;

    $("#userName").keyup(verificaNombre);
    $("#userEmail").keyup(verificaEmail);
    $("#userKey").keyup(verificaKey);
    $("#btnContinuar1").click(function(){
        // localStorage.setItem("nombre", $("#userName").val());
        // localStorage.setItem("email_usuario", $("#userEmail").val());
        localStorage.setItem("clave_usuario", $("#userKey").val());
        location.href = "yellowscreen.html";
    })

    function verificaNombre(){
        if($("#userName").val().match(/^[a-zA-Z]+(\s+[a-zA-Z]+)?$/)){
            nombreVerificado = true;
            console.log("nombre ok");
        }
        else{
            nombreVerificado = false;
        }
        verificaTodo();
    }

    function verificaEmail(){
        if($("#userEmail").val().match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)){
            emailVerificado = true;
            console.log("email ok");
        }
        else{
            emailVerificado = false;
        }
        verificaTodo();
    }

    function verificaKey(){
        if($("#userKey").val().match(/^[0-9]+$/) && $("#userKey").val().length == 6){
            keyVerificado = true;
            console.log("key ok");
        }
        else{
            KeyVerificado = false;
            console.log(keyVerificado);
            console.log($("#userKey").val());
            console.log($("#userKey").val().length);
        }
        verificaTodo();
    }

    function verificaTodo(){
        if(nombreVerificado == true && emailVerificado == true && keyVerificado == true){
            $("#btnContinuar1").removeClass("disabled");
        }
        else{
            $("#btnContinuar1").addClass("disabled");
        }
    }
}
