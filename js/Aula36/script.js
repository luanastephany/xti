/*var btn = document.getElementById("botão")
btn.onclick = function () {
    um()
}

function um() {
    alert("um")
}*/

var btn = document.getElementById("botão")
btn.addEventListener("click", um, false) //3 parâmetros
btn.addEventListener("click", dois, false)

function um() {
    alert("um")
}

function dois() {
    alert("dois")
}