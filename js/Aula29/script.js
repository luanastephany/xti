window.onload = function () {
    carregarPoltronas() //mostrar as img assim que a página estiver carregada
}

var imagens = document.getElementsByTagName("img")
var poltronas = [false, true, false, true, true, true, false, true, false]
var fotos = {
    disponivel: "img/disponivel.png",
    indisponivel: "img/indisponivel.png",
    selecionada: "img/selecionada.png"
}

function carregarPoltronas() {
    poltronas.forEach((disponivel, indice) => {
        if (disponivel) {
            imagens[indice].src = fotos.disponivel
        } else {
            imagens[indice].src = fotos.indisponivel
        }
    })

    /* for (var i = 0; i < imagens.length; i++) {
         if (poltronas[i]) {
             imagens[i].src = fotos.disponivel
         } else {
             imagens[i].src = fotos.indisponivel
         }
     } */
}

function selecionarPoltrona() {
    var continuar = true
    poltronas.forEach((disponivel, indice) => {
        if (disponivel && continuar) {
            imagens[indice].src = fotos.selecionada
            var quer = confirm("Você quer esta poltrona?")
            if (quer) {
                continuar = false // nesse caso, mesmo papel do break (se tiver um if)
            } else {
                imagens[indice].src = fotos.disponivel
            }
        }
    })


    /*    for (var i = 0; i < poltronas.length; i++) {
            if (poltronas[i]) {
                imagens[i].src = fotos.selecionada
    
                var quer = confirm("Você quer esta poltrona?")
                if (quer) {
                    break
                } else {
                    imagens[i].src = fotos.disponivel
                }
            }
        }*/
}

function selecionarCasal() {
    var continuar = true
    poltronas.forEach((disponivel, indice) => {
        var aoLado = poltronas[indice + 1]
        if (disponivel && aoLado && continuar) {
            imagens[indice].src = fotos.selecionada
            imagens[indice + 1].src = fotos.selecionada

            var quer = confirm("Você quer estas poltronas?")
            if (quer) {
                continuar = false
            } else {
                imagens[indice].src = fotos.disponivel
                imagens[indice + 1].src = fotos.disponivel
            }
        }
    })


    /* for (var i = 0; i < poltronas.length; i++) {
         if (poltronas[i] && poltronas[i + 1]) { //ver se a próxima poltrona está disponível
             imagens[i].src = fotos.selecionada
             imagens[i + 1].src = fotos.selecionada
    
             var quer = confirm("Você quer estas poltronas?")
             if (quer) {
                 break
             } else {
                 imagens[i].src = fotos.disponivel
                 imagens[i + 1].src = fotos.disponivel
             }
         }
     }*/
}