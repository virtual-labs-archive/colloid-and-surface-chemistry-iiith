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

var delayInMilliseconds = 80;
var k = 154;

var intr = setInterval(function() {
  //your code to be executed after 0.01 second

var add = 'new_frames/'+'('+k+')'+'.svg';
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

canvas.addEventListener('mousedown',coords1);
function coords1(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=347;i<=446;i++)
	{
	cx_arr.push(i);
	}

	for(i=467;i<=506;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 156;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>222){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords1);
	}
}


}

, delayInMilliseconds);