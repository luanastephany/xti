var lampada = document.getElementById("lampada")


/*lampada.onmouseover = function () {
    lampada.src = "img/ligada.jpg"
}*/

function ligar() {
    lampada.src = "img/ligada.jpg"
}

function desligar() {
    lampada.src = "img/apagada.jpg"
}

lampada.onmouseover = ligar

lampada.onmouseout = desligar