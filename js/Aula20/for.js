
//for (var i = 0; i < 3; i++) {...}

var moto = {
    Marca: "Kawasaki",
    Modelo: "Ninja",
    Marchas: 5,
    Cor: "verde"
};

for (var props in moto) { //é a marca, modelo, marchas e cor
    alert(props + " = " + moto[props]) //pegar o valor da propriedade
}
