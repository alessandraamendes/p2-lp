var tela = document.querySelector('canvas');
var pincel = tela.getContext('2d');

//back1
pincel.fillStyle = 'white';
pincel.fillRect(0, 0, 500, 500);

//back2
pincel.fillStyle = 'darkgreen';
pincel.fillRect(0, 100, 350, 300);

//eyes
pincel.fillStyle = 'black';
pincel.fillRect(55, 150, 90, 90);
pincel.fillRect(215, 150, 90, 90);

//nose
pincel.fillRect(105, 290, 40, 110);

//mouth
pincel.fillRect(145, 240, 70, 100);
pincel.fillRect(215, 290, 40, 110);
