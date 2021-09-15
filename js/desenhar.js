    var paleta = document.querySelector('input');
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'white';
    pincel.fillRect(0, 0, 400, 400);

    var desenha = false;

    function desenhaCirculo(evento) {

        if(desenha) {
            var x = evento.pageX - tela.offsetLeft;
            var y = evento.pageY - tela.offsetTop;
            pincel.fillStyle = paleta.value; // sempre pega o valor atual da paleta!
            pincel.beginPath();
            pincel.arc(x, y, 10, 0, 2 * 3.14);
            pincel.fill();
        }
    }

    tela.onmousemove = desenhaCirculo;

    tela.onmousedown = function() {

        desenha = true;
    }

     tela.onmouseup = function() {

        desenha = false;
    }