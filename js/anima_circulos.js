var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");
pincel.fillStyle = "lightgray";
pincel.fillRect(0, 0, 500, 500);

function desenhaCirculo(x, y, raio, cor) {
  pincel.fillStyle = cor;
  pincel.beginPath();
  pincel.arc(x, y, raio, 0, 2 * Math.PI);
  pincel.fill();
}

function limpaTela() {
  pincel.clearRect(0, 0, 500, 500);
}

var raio = 20;
var crescer = 1;

function pulsar() {
  limpaTela();

  if (raio > 30) {
    // o raio tem que diminuir
    crescer = -1;
  } else if (raio < 20) {
    // o raio tem que aumentar
    crescer = 1;
  }
  raio = raio + crescer;

  desenhaCirculo(150, 250, raio, "purple");
  desenhaCirculo(300, 250, raio, "pink");
  desenhaCirculo(450, 250, raio, "orange");
}

var x = 20;
var sentido = 1;

function atualizaTela() {
  if (x > 500) {
    sentido = -1;
  } else if (x < 0) {
    sentido = 1;
  }

  limpaTela();
  desenhaCirculo(x, 20, 10, "salmon");
  desenhaCirculo(x, 450, 10, "salmon");
  x = x + sentido;
}

setInterval(pulsar, 7);
setInterval(atualizaTela, 10);
