function validar() {
    var formulario = document.getElementById("formulario")
    var cpf = document.getElementById("cpf")
    var email = document.getElementById("email")

    //var re_cpf = /^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/
    var re_cpf = /[\d]{11}/
    var re_email = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z])+?$/ig

    if (re_cpf.test(cpf.value)) {
        alert("CPF válido")
    } else {
        alert("CPF inválido")
    }

    //verificando se o email é inválido
    if (!re_email.test(email.value)) {
        alert("Email inválido")
    }

}