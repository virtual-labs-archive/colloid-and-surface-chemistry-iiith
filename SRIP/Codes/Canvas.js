//hello this is new js file
//lets start writing code
var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c =  canvas.getContext("2d");
//c.fillRect(100,100,100,200);

c.font = ' bold 20px Arial';
	
c.fillText("Effects of ph on the solution",550,40);
c.textAlign = "center";