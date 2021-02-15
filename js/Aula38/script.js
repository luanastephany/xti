window.onload = function () {
    document.getElementById("lampada").onclick = ligar
    setInterval(apresentaHoras, 1000)
}

function ligar() {
    document.getElementById("lampada").src = "img/ligada.jpg"
    setTimeout(desligar, 3000) //colocar função e intervalo em milissegundos
}

function desligar() {
    document.getElementById("lampada").src = "img/apagada.jpg"
}

function apresentaHoras() {
    var agora = new Date()
    var horas = agora.getHours() + ":" + agora.getMinutes() + ":" + agora.getSeconds()
    document.getElementById("horas").innerHTML = horas
}