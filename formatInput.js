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