function logar(){
    do{
    var email = "ederbruno@gmail.com";
    var senha = "123xxx";

    var emailUsuario = prompt ("Digite seu e-mail: ");
    var senhaUsuario = prompt ("Digite sua senha: ");

    
        if (email != emailUsuario || senha != senhaUsuario){
                alert ("Seu cadastro não confere");
         }else{
                alert ("cadastro confere!");
                break
         }
    }while(true){

    }
}

function validar(){
    
    var msgE = "O campo";
    var msgE2 = "está vazio!";

    if(document.getElementById("nome").value == ""){
        mostrarmensagemErro(msgE, msgE2, "nome");
        return
    }

    if(document.getElementById("email").value == ""){
        mostrarmensagemErro(msgE, msgE2, "email");
        return
    }

    if(document.getElementById("cpf").value == ""){
        mostrarmensagemErro(msgE, msgE2, "cpf");
        return
    }

    if(document.getElementById("telefone").value == ""){
        mostrarmensagemErro(msgE, msgE2, "telefone");
        return
    }

    if(document.getElementById("cidade").value == ""){
        mostrarmensagemErro(msgE, msgE2, "cidade");
        return
    }

    if(document.getElementById("estado").value == ""){
        mostrarmensagemErro(msgE, msgE2, "estado");
        return
    }

    if(document.getElementById("assunto").value == ""){
        mostrarmensagemErro(msgE, msgE2, "assunto");
        return
    }

    if(document.getElementById("mensagem").value == ""){
        mostrarmensagemErro(msgE, msgE2, "mensagem");
        return
    }

    document.form.action="resposta.html";
    document.form.submit();

}



function voltar(){
    history.back();
}



function  mostrarmensagemErro(msgE, msgE2, nomeCampo){
    document.getElementById(nomeCampo).focus();
    var MSGerro = document.getElementById("mensagemErro");
    MSGerro.style.display = "block";
    MSGerro.innerHTML = msgE + " " + nomeCampo + " " + msgE2;
}

