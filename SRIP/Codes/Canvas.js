

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
var delayInMilliseconds = 50;
var k = 1;

var intr = setInterval(function() {
  //your code to be executed after 0.01 second

var add = '/colloid-and-surface-chemistry-iiith/new frames/new/'+'('+k+')'+'.svg';
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

if(k > 85)
{


// stopping the frame at frame numner 267, so that the frame 268 can be used for clicking 
// event
clear_image(intr);
//clearScreen();
make_base('86.jpg');

canvas.addEventListener('click',coords,false);
function coords()
{
    cx = event.clientX; // or event.pageX
    cy = event.clientY; // or event.pageY
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=737;i<=758;i++)
	{
	cx_arr.push(i);
	}

	for(i=73;i<=195;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 86;
	var intr2 = setInterval(function()
		{

	var add2 = '/colloid-and-surface-chemistry-iiith/new frames/new/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>93){

	 clear_image(intr2);

	}
	else{ h+=1;}

	      



	},delayInMilliseconds);


	}

		canvas.addEventListener('click',coords2,false);
	function coords2(event)
	{
      cx = event.clientX;
      cy = event.clientY;
     

    var cx_arr = [];
    var cy_arr = [];
    for(var i=1013;i<=1033;i++)
	{
	cx_arr.push(i);
	}

	for(i=462;i<=575;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 94;
	var intr2 = setInterval(function()
		{

	var add2 = '/colloid-and-surface-chemistry-iiith/new frames/new/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>98){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);


	}
	canvas.addEventListener('click',coords3,false);
function coords3(event)
{

	cx = event.clientX;
    cy = event.clientY;
    

    var cx_arr = [];
    var cy_arr = [];
    for(var i=1013;i<=1034;i++)
	{
	cx_arr.push(i);
	}

	for(i=477;i<=587;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 104;
	var intr2 = setInterval(function()
		{

	var add2 = '/colloid-and-surface-chemistry-iiith/new frames/new/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>112){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);


	}



}


}




}


}


else{k+=1;}

}, delayInMilliseconds);