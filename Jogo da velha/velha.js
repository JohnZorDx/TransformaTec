
var jogador = null;

var jogadorselecionado = document.getElementById(elementid:'jogadorselecionado');

mudarjogador(valor:'x');

function escolherquadrado(id){

    var quadrado = document.getElementById(id);

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';


}

function mudarjogador(valor){
    jogador = valor;
    jogadorselecionado.innerHTML = jogador;
}
