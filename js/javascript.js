

var x = 0;
var o = 0;
var venceu = false;
var matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var jogada = true;
var velha = 0;
function altera(i, j) {
    var n1 = j;
    var n2 = i;

    if ((jogada == true) && (matrix[n1][n2] == 0) && (venceu == false)) {
        // x
        document.getElementById('image' + i + j).src = "imagem/x.png";
        jogada = false;
        matrix[n1][n2] = 1;
        velha++;
    } else if ((jogada == false) && (matrix[n1][n2] == 0) && (venceu == false)) {
        // o
        document.getElementById('image' + i + j).src = "imagem/o.png";
        jogada = true;
        matrix[n1][n2] = 2;
        velha++;
    }
    if (venceu == false) {
        vencedor(matrix);
        console.log('velha ' + velha);
    }

}
function vencedor(matrix) {
    console.log(matrix);
    console.log("ok");

    for (var v = 1; v < 3; v++) {
        for (var n = 0; n < 3; n++) {
            if ((matrix[0][n] == v) && (matrix[1][n] == v) && (matrix[2][n] == v)) {
                placar(v);

                break;
            }
            else if ((matrix[n][0] == v) && (matrix[n][1] == v) && (matrix[n][2] == v)) {
                placar(v);

                break;
            } else if ((matrix[0][0] == v) && (matrix[1][1] == v) && (matrix[2][2] == v)) {
                placar(v);

                break;
            } else if ((matrix[0][2] == v) && (matrix[1][1] == v) && (matrix[2][0] == v)) {
                placar(v);

                break;
            } else if ((velha == 9) && (venceu == false) && (v == 2)) {
                console.log('deu velha');
                console.log(venceu, 'venceu');
                modalV.style.display = "block";

                break;
            }
        }
    }
}


function placar(v) {
    if (v == 1) {
        x++;
        modalX.style.display = "block";
        venceu = true;
        console.log('X venceu' + x);
        document.getElementById('x').innerHTML = x;

    } else {
        o++;
        modalO.style.display = "block";
        venceu = true;
        console.log('O venceu' + o);
        document.getElementById('o').innerHTML = o;
    }
}
function revanche(numero) {
    venceu = false;
    matrix = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            document.getElementById('image' + i + j).src = "./imagem/quadrado.png";

        }
    }
    velha = 0;
    if (numero == 0) {
        jogada = true;
        document.getElementById('corX').style.backgroundColor = 'rgb(76, 175, 144)';
        document.getElementById('corO').style.backgroundColor = '#4CAF50';
    }


}
function valorO() {
    jogada = false;
    document.getElementById('corX').style.backgroundColor = '#4CAF50';
    document.getElementById('corO').style.backgroundColor = 'rgb(76, 175, 144)';
    revanche(2);
}
function valorX() {
    jogada = true;
    document.getElementById('corX').style.backgroundColor = 'rgb(76, 175, 144)';
    document.getElementById('corO').style.backgroundColor = '#4CAF50';
    revanche(2);
}

