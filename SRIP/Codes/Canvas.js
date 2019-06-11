

//creating and resizing using canvas
var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');
var delayInMilliseconds = 100;
var k = 1;
 
 

var intr = setInterval(function() {
  //your code to be executed after 0.1 second

var add = 'C:/srip/colloid-and-surface-chemistry-iiith/pf/'+k+'.png';
function make_base(address)
{
  base_image = new Image();
  base_image.src = address;
  base_image.onload = function()
  {
    c.drawImage(base_image,0,0,window.innerWidth,window.innerHeight);
  }
}

make_base(add);
//var myname = "BOB";
//var mystring = "Hi there "+myname+"!";

if(k > 86){clearInterval(intr);}
else{k+=1;}










}, delayInMilliseconds);