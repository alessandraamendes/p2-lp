    var paleta = document.querySelector('input');
    var tela = document.querySelector('canvas');
    var pincel = tela.getContext('2d');

    pincel.fillStyle = 'white';


    var desenha = false;

    document.body.onresize = function() {
        if (document.body.clientWidth < 480) {
            pincel.fillRect(0, 0, 600, 400);
        }else{
            pincel.fillRect(0, 0, 300, 200);
        }
    };

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