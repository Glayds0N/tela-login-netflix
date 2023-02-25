function mostrarSenha(){
    var tipo = document.getElementById('password');
    var viewIcon = document.getElementById('viewPassword');
    var hideIcon = document.getElementById('hidePassword');
    if(tipo.type == "password"){
        tipo.type = "text";
        viewIcon.style.visibility = "hidden";
        hideIcon.style.visibility = "visible";

    }else{
        tipo.type = "password"
        viewIcon.style.visibility = "visible";
        hideIcon.style.visibility = "hidden";
    }

}