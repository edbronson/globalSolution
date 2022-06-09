function voltar(){
    history.back();
}


function  mostrarmensagemErro(msgE, nomeCampo){
    document.getElementById(nomeCampo).focus();
    var campoMSG = document.getElementById("mensagemErro");
    campoMSG.style.display = "block";
    campoMSG.innerHTML = msgE + " " + nomeCampo + "!";
}