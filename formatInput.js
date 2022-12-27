function fMasc(objeto,mascara) {
    obj=objeto
    masc=mascara
    setTimeout("fMascEx()",1)
}

function fMascEx() {
    obj.value=masc(obj.value)
}

function mCPF(cpf){
    cpf=cpf.replace(/\D/g,"")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d)/,"$1.$2")
    cpf=cpf.replace(/(\d{3})(\d{1,2})$/,"$1-$2")
    return cpf
}
function mCelular(celular){
    celular=celular.replace(/\D/g,"")
    celular=celular.replace(/(\d{0})(\d)/,"$1($2")
    celular=celular.replace(/(\d{2})(\d)/,"$1) $2")
    celular=celular.replace(/(\d{4})(\d{1,4})$/,"$1-$2")
    return celular
}

let contagem = 0
function mValor(valor){
    contagem++;
    console.log(contagem);

    if (contagem == 1) {
        valor= "0,0" + valor
    }
    else if (contagem == 2) {
        valor = valor.replace("0,0", "")
        valor = "0," + valor
    }
    else if (contagem == 3) {
        valor = valor.replace("0,", "")
        valor = valor.replace(/(\d{1})(\d)/,"$1,$2")
    }
    else if (contagem == 4) {
        valor = valor.replace(",", "")
        valor = valor.replace(/(\d{2})(\d)/,"$1,$2")
    }
    else if (contagem == 5) {
        valor = valor.replace(",", "")
        valor = valor.replace(/(\d{3})(\d)/,"$1,$2")
    }

    return valor
}