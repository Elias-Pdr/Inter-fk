//minhas infos
if (document.getElementById("saldo")){
    document.getElementById("saldo").innerHTML = localStorage.getItem("saldo");
    console.log(localStorage.getItem("saldo"));

}else{
    console.log("Não tem 'Saldo' nessa pag");
}
if (document.getElementById("myName")){
    document.getElementById("myName").innerHTML = localStorage.getItem("myName");
}
if (document.getElementById("myCpf")){
    document.getElementById("myCpf").innerHTML = localStorage.getItem("myCpf");
}
if (document.getElementById("myBanco")){
    document.getElementById("myBanco").innerHTML = localStorage.getItem("myBanco");
}


//infos da vitima
if (document.getElementById("vitName")){
    document.getElementById("vitName").innerHTML = localStorage.getItem("vitName");
}
if (document.getElementById("cpf")){
    document.getElementById("cpf").innerHTML = localStorage.getItem("cpf");
}
if (document.getElementById("banco")){
    document.getElementById("banco").innerHTML = localStorage.getItem("banco");
}

//infos de pagamento
if (document.getElementById("valor")){
    document.getElementById("valor").innerHTML = "valor"
}
if (document.getElementById("chave")){
    document.getElementById("chave").innerHTML = localStorage.getItem("chave");
}
if (document.getElementById("tipoDeChave")){
    document.getElementById("tipoDeChave").innerHTML = "tipoDeChave"
}
if (document.getElementById("descricao")){
    document.getElementById("descricao").innerHTML = "descricao"
}
if (document.getElementById("dataCompleta")){
    document.getElementById("dataCompleta").innerHTML = "dataCompleta"
}
if (document.getElementById("hora")){
    document.getElementById("hora").innerHTML = "hora"
}
