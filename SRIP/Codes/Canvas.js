

//creating and resizing using canvas
var canvas = document.getElementById('myCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


//function to clear the interval in which frames are running
function clear_image(add2)
{
clearInterval(add2);

}
// function for clearing the canvas
function clearScreen()
{
	c.clearRect(0,0,canvas.width,canvas.height);
}


var c = canvas.getContext('2d');
var delayInMilliseconds = 10;
var k = 1;

var intr = setInterval(function() {
  //your code to be executed after 0.01 second

var add = 'C:/srip/colloid-and-surface-chemistry-iiith/project_frames/'+k+'.png';
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

if(k > 268)
{


// stopping the frame at frame numner 267, so that the frame 268 can be used for clicking 
// event
clear_image(intr);
//clearScreen();
make_base('268.png');

canvas.addEventListener('click',coords,false);
function coords()
{
    cx = event.clientX; // or event.pageX
    cy = event.clientY; // or event.pageY
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=764;i<=783;i++)
	{
	cx_arr.push(i);
	}

	for(i=30;i<=134;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	console.log(n);

	if(n&&z ==true) // new block start
	{
	var h = 268;
	var intr2 = setInterval(function()
		{

	var add2 = 'C:/srip/colloid-and-surface-chemistry-iiith/project_frames/'+h+'.png';
	make_base(add2);

	if(h>288){

	 clear_image(intr2);

	}
	else{ h+=1;}

	      



	},delayInMilliseconds);


	}


}
coords();

}


else{k+=1;}

}, delayInMilliseconds);