var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

//back1
pincel.fillStyle = "white";
pincel.fillRect(0, 0, 600, 400);

//back2
pincel.fillStyle = "darkgreen";
pincel.fillRect(125, 100, 350, 300);

//eyes
pincel.fillStyle = "black";
pincel.fillRect(175, 150, 90, 90);
pincel.fillRect(335, 150, 90, 90);

//nose
pincel.fillRect(225, 290, 40, 110);

//mouth
pincel.fillRect(265, 240, 70, 100);
pincel.fillRect(335, 290, 40, 110);
