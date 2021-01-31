function calcular() {
    var formulario = document.getElementById('formulario')

    var kilos = +formulario.kilos.value
    var metros = +formulario.metros.value
    var centimetros = +formulario.centimetros.value


    var altura = (metros * 100 + centimetros) / 100 //100cm é igual a 1 metro. E se dividir por 100 depois, acresscenta a vírgula. 
    var imc = kilos / (altura * altura) // IMC = peso / altura²

    formulario.imc.value = imc.toFixed(2) //colocar só 2 números após a vírgula

    if (imc < 20) {
        alert("Abaixo do peso")
    } else if (imc >= 20 && imc < 25) {
        alert("Peso ideal")
    } else if (imc >= 25 && imc < 30) {
        alert("Sobrepeso")
    } else if (imc >= 30 && imc < 35) {
        alert("Obesidade moderada")
    } else if (imc >= 35 && imc < 40) {
        alert("Obesidade severa")
    } else if (imc >= 40 && imc < 50) {
        alert("Obesidade mórbida")
    } else {
        alert("Super obesidade")
    }
}

