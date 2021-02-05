
var x = prompt('Infome um número maior que 10')
try {
    if (x < 10) {
        throw 'Erro! Numero menor que 10' //se encontrar um erro, lança uma exceção
    }
    alert(x)

} catch (e) {
    alert(e)

}

/*try {
    var x = a
    var b = x + 10
    alert(b)

} catch (e) {
    alert(e.toString())
}*/
