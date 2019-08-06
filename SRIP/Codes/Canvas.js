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
var k = 1;

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
//var myname = "BOB";
//var mystring = "Hi there "+myname+"!";

if(k > 85)
{


// stopping the frame at frame numner 267, so that the frame 268 can be used for clicking 
// event
clear_image(intr);
//clearScreen();
make_base('(86).svg');


canvas.addEventListener('mousedown',coords,{once:false});
function coords(event)
{
    cx = event.offsetX;
    cy = event.offsetY; // or event.pageY

    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=737;i<=760;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
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

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>93){

	 clear_image(intr2);

	}
	else{ h+=1;}

	      



	},delayInMilliseconds);
    //canvas.removeEventListener('click', coords);
    canvas.removeEventListener('mousedown', coords); 
	}
     
		
		
canvas.addEventListener('mousedown',coords2,{once:false});
function coords2(event)
	{
    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
     

    var cx_arr = [];
    var cy_arr = [];
    for(var i=1013;i<=1035;i++)
	{
	cx_arr.push(i);
	}

	for(i=470;i<=593;i++)
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

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>98){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords2);
	}
canvas.addEventListener('mousedown',coords3,{once:false});
function coords3(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=1013;i<=1035;i++)
	{
	cx_arr.push(i);
	}

	for(i=487;i<=605;i++)
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

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>112){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords3);
	}


canvas.addEventListener('mousedown',coords4,{once:false});
function coords4(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=477;i<=543;i++)
	{
	cx_arr.push(i);
	}

	for(i=520;i<=591;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 113;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>128){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords4);
	}

canvas.addEventListener('mousedown',coords5,{once:false});
function coords5(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=848;i<=879;i++)
	{
	cx_arr.push(i);
	}

	for(i=563;i<=626;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 129;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>144){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords5);
	}

canvas.addEventListener('mousedown',coords6,{once:false});
/*cx = event.pageX;
cy = event.pageY;
var cx_arr = [];
var cy_arr = [];
for(var i=478;i<=542;i++)
{
cx_arr.push(i);
}
for(i=509;i<=592;i++)
{
cy_arr.push(i);
}
var n = cx_arr.includes(cx);
var z = cy_arr.includes(cy);*/


/*var e = new jQuery.Event("click");
e.pageX = 10;
e.pageY = 10;
$("#elem").trigger(e);*/
function coords6(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=478;i<=542;i++)
	{
	cx_arr.push(i);
	}

	for(i=509;i<=592;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 145;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>150){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords6);
	}
canvas.addEventListener('mousedown',coords7,{once:false});
function coords7(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
	{
	cx_arr.push(i);
	}

	for(i=442;i<=556;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 150;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>155){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

   canvas.removeEventListener('mousedown', coords7);
	}

canvas.addEventListener('mousedown',coords8,{once:false});
function coords8(event)
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

    canvas.removeEventListener('mousedown', coords8);
	}

canvas.addEventListener('click',coords9);
function coords9(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true ) // new block start
	{
	var h = 223;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>231){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords9);
    //only 1st part of testing completed move to the second part.
    canvas.addEventListener('mousedown',coords11,{once:false});
    function coords11(event)
    {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=737;i<=760;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 232;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>240){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords11);
	}

	canvas.addEventListener('mousedown',coords12,{once:false});
	function coords12(event)
	{

		cx = event.offsetX;
        cy = event.offsetY;
	    //alert('x,y = '+ cx + ','+ cy);
	     

	    var cx_arr = [];
	    var cy_arr = [];
	    for(var i=1013;i<=1035;i++)
		{
		cx_arr.push(i);
		}

		for(i=470;i<=593;i++)
		{

		cy_arr.push(i);
		}

		var n = cx_arr.includes(cx);
		var z = cy_arr.includes(cy);
		

		if(n&&z ==true) // new block start
		{
		var h = 241;
		var intr2 = setInterval(function()
			{

		var add2 = 'new_frames/'+'('+h+')'+'.svg';
		make_base(add2);

		if(h>248){

		 clear_image(intr2);

		}
		else{ h+=1;}

		},delayInMilliseconds);
        canvas.removeEventListener('mousedown', coords12);
	    
		}
	
	canvas.addEventListener('mousedown',coords13,{once:false});
	function coords13(event)
	{

		cx = event.offsetX;
        cy = event.offsetY;
	    //alert('x,y = '+ cx + ','+ cy);

	    var cx_arr = [];
	    var cy_arr = [];
	    for(var i=1013;i<=1035;i++)
		{
		cx_arr.push(i);
		}

		for(i=487;i<=605;i++)
		{

		cy_arr.push(i);
		}

		var n = cx_arr.includes(cx);
		var z = cy_arr.includes(cy);
		

		if(n&&z ==true) // new block start
		{
		var h = 249;
		var intr2 = setInterval(function()
			{

		var add2 = 'new_frames/'+'('+h+')'+'.svg';
		make_base(add2);

		if(h>256){

		 clear_image(intr2);

		}
		else{ h+=1;}

		},delayInMilliseconds);

	    canvas.removeEventListener('mousedown', coords13);
		}
	

canvas.addEventListener('mousedown',coords14,{once:false});
function coords14(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=851;i<=873;i++)
	{
	cx_arr.push(i);
	}

	for(i=475;i<=581;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 257;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>265){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords14);
	}


canvas.addEventListener('mousedown',coords15,{once:false});
function coords15(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=477;i<=541;i++)
	{
	cx_arr.push(i);
	}

	for(i=505;i<=575;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 266;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>276){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('mousedown', coords15);
    
	}
canvas.addEventListener('mousedown',coords16,{once:false});
function coords16(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=849;i<=879;i++)
	{
	cx_arr.push(i);
	}

	for(i=561;i<=625;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 277;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>292){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('mousedown', coords16);
    
}

canvas.addEventListener('mousedown',coords17,{once:false});
function coords17(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=412;i<=590;i++)
	{
	cx_arr.push(i);
	}

	for(i=477;i<=539;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 293;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>298){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('mousedown', coords17);
    
	}
canvas.addEventListener('click',coords18,{once:false});
function coords18(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=616;i<=773;i++)
	{
	cx_arr.push(i);
	}

	for(i=441;i<=558;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 299;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>303){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords18);
    
	}



canvas.addEventListener('mousedown',coords19,{once:false});
function coords19(event)
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
	var h = 304;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>371){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords19);
	}

canvas.addEventListener('click',coords20,{once:false});
function coords20(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true ) // new block start
	{
	var h = 372;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>380){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords20);
    //only 1st part of testing completed move to the second part.
    canvas.addEventListener('mousedown',coords21,{once:false});
    function coords21(event)
    {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=737;i<=760;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 381;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>388){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords21);
	}

	canvas.addEventListener('mousedown',coords22,{once:false});
	function coords22(event)
	{

		cx = event.offsetX;
        cy = event.offsetY;
	    //alert('x,y = '+ cx + ','+ cy);
	     

	    var cx_arr = [];
	    var cy_arr = [];
	    for(var i=1013;i<=1035;i++)
		{
		cx_arr.push(i);
		}

		for(i=470;i<=593;i++)
		{

		cy_arr.push(i);
		}

		var n = cx_arr.includes(cx);
		var z = cy_arr.includes(cy);
		

		if(n&&z ==true) // new block start
		{
		var h = 389;
		var intr2 = setInterval(function()
			{

		var add2 = 'new_frames/'+'('+h+')'+'.svg';
		make_base(add2);

		if(h>393){

		 clear_image(intr2);

		}
		else{ h+=1;}

		},delayInMilliseconds);
        canvas.removeEventListener('mousedown', coords22);
	    
		}
	
	canvas.addEventListener('mousedown',coords23,{once:false});
	function coords23(event)
	{

		cx = event.offsetX;
        cy = event.offsetY;
	    //alert('x,y = '+ cx + ','+ cy);

	    var cx_arr = [];
	    var cy_arr = [];
	    for(var i=1013;i<=1035;i++)
		{
		cx_arr.push(i);
		}

		for(i=487;i<=605;i++)
		{

		cy_arr.push(i);
		}

		var n = cx_arr.includes(cx);
		var z = cy_arr.includes(cy);
		

		if(n&&z ==true) // new block start
		{
		var h = 394;
		var intr2 = setInterval(function()
			{

		var add2 = 'new_frames/'+'('+h+')'+'.svg';
		make_base(add2);

		if(h>400){

		 clear_image(intr2);

		}
		else{ h+=1;}

		},delayInMilliseconds);

	    canvas.removeEventListener('mousedown', coords23);
		}
	

canvas.addEventListener('mousedown',coords24,{once:false});
function coords24(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=851;i<=873;i++)
	{
	cx_arr.push(i);
	}

	for(i=475;i<=581;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 401;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>409){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('mousedown', coords24);
	}


canvas.addEventListener('mousedown',coords25,{once:false});
function coords25(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=477;i<=541;i++)
	{
	cx_arr.push(i);
	}

	for(i=505;i<=575;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 410;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>420){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('mousedown', coords25);
    
	}
canvas.addEventListener('mousedown',coords26,{once:false});
function coords26(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=849;i<=879;i++)
	{
	cx_arr.push(i);
	}

	for(i=561;i<=625;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 421;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>437){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('mousedown', coords26);
    
}

canvas.addEventListener('mousedown',coords27,{once:false});
function coords27(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=412;i<=590;i++)
	{
	cx_arr.push(i);
	}

	for(i=477;i<=539;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 438;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>443){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('mousedown', coords27);
    
	}
canvas.addEventListener('click',coords28,{once:false});
function coords28(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=616;i<=773;i++)
	{
	cx_arr.push(i);
	}

	for(i=441;i<=558;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 444;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>446){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords28);
    
	}


canvas.addEventListener('click',coords29,{once:false});
function coords29(event)
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
	var h = 447;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>519){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords29);
    
	}

canvas.addEventListener('click',coords30, {once:true});
function coords30(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	
     if(m&&g ==true || n&&z==true) // new block start
	{
	var h = 522;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>534){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

   canvas.reomoveEventListener('click',coords30);
}


canvas.addEventListener('click',coords31,{once:false});
function coords31(event)
{

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=477;i<=542;i++)
	{
	cx_arr.push(i);
	}

	for(i=506;i<=577;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 535;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>546){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords31);
    
	}


   canvas.addEventListener('click',coords37,{once:false});
   function coords37(event)
   {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 547;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>590){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords37);
    
	}


   canvas.addEventListener('click',coords40,{once:false});
   function coords40(event)
   {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
	{
	cx_arr.push(i);
	}

	for(i=442;i<=556;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 591;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>595){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords40);
    
	}


   canvas.addEventListener('click',coords43);
   function coords43(event)
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
        

        var h = 596;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>663){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
    canvas.removeEventListener('click', coords43);
        }

        
  canvas.addEventListener('click',coords46,{once:true});
   function coords46(event)
{

        cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
        {
        cx_arr.push(i);
        }

        for(i=544;i<=577;i++)
        {

        cy_arr.push(i);
        }
        for(var i=990;i<=1068;i++)
        {
                cx_alt.push(i);
        }
    for(var i=570;i<=591;i++)
    {
        cy_alt.push(i);
    }
        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        var m = cx_alt.includes(cx);
        var g = cy_alt.includes(cy);
        
     if( n&&z==true) // new block start
        {
        var h =664 ;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>673){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
        canvas.removeEventListener('click',coords46);
    
//

 canvas.addEventListener('click',coords49);
   function coords49(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
        {
        cx_arr.push(i);
        }

        for(i=96;i<=226;i++)
        {

        cy_arr.push(i);
        }

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 674;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>716){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords49);
        }
    
canvas.addEventListener('click',coords52);
   function coords52(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
        {
        cx_arr.push(i);
        }

        for(i=442;i<=556;i++)
        {

        cy_arr.push(i);
        }

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 717;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>723){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords52);
        }
    

 canvas.addEventListener('click',coords55);
   function coords55(event)
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
        

        var h = 724;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>793){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords55);
        }
    
    
   canvas.addEventListener('click',coords58);
   function coords58(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true ) // new block start
	{
	var h = 794;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>803){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    
        canvas.removeEventListener('click', coords58);
       // 
     canvas.addEventListener('click',coords61);
   function coords61(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 804;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>847){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords61);
        }



   canvas.addEventListener('click',coords64);
   function coords64(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
	{
	cx_arr.push(i);
	}

	for(i=442;i<=556;i++)
	{

	cy_arr.push(i);
	}

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 848;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>852){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords64);
        }


canvas.addEventListener('click',coords67);
   function coords67(event)
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
        

        var h = 853;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>921){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords67);
        }

canvas.addEventListener('click',coords70);
   function coords70(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true || m&&g==true) // new block start
	{
	var h = 922;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>950){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    
        canvas.removeEventListener('click', coords70);
    }


  


}





}





}





}




    }
    
     else if(m&&g ==true) // new block start
        {
        var h = 922;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);
        canvas.removeEventListener('click',coords58);
        if(h>950){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);




}


    }


    }


    }





    }





    }

     else if(m&&g ==true) // new block start
        {
        var h = 922;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>950){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
}




}






        }


}

}



}

}



}


}
}
}
}	
}
}
}

    }

}

	
	else if(m&&g ==true) // new block start
	{
	var h = 522;
	//alert('x,y = '+ cx + ','+ cy);
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>534){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords20);
    //Ending first testing event completely
    canvas.addEventListener('click',coords32,{once:false});
    function coords32(event)
    {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=477;i<=541;i++)
	{
	cx_arr.push(i);
	}

	for(i=505;i<=575;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 534;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>546){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);

    canvas.removeEventListener('click', coords32);
	}
    
   canvas.addEventListener('click',coords33,{once:false});
   function coords33(event)
   {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 547;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>590){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords33);
    
	}

   canvas.addEventListener('click',coords36,{once:false});
   function coords36(event)
   {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
	{
	cx_arr.push(i);
	}

	for(i=442;i<=556;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 591;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>595){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords36);
    
	}



   canvas.addEventListener('click',coords39);
   function coords39(event)
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
        

        var h = 596;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>663){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords39);
        }
    
  canvas.addEventListener('click',coords42);
   function coords42(event)
{

        cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
        {
        cx_arr.push(i);
        }

        for(i=544;i<=577;i++)
        {

        cy_arr.push(i);
        }
        for(var i=990;i<=1068;i++)
        {
                cx_alt.push(i);
        }
    for(var i=570;i<=591;i++)
    {
        cy_alt.push(i);
    }
        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        var m = cx_alt.includes(cx);
        var g = cy_alt.includes(cy);
        
     if( n&&z==true) // new block start
        {
        var h =664 ;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>673){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
        canvas.removeEventListener('click',coords42);
    //

     canvas.addEventListener('click',coords45);
   function coords45(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
        {
        cx_arr.push(i);
        }

        for(i=96;i<=226;i++)
        {

        cy_arr.push(i);
        }

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 674;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>716){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords45);
        }
    
canvas.addEventListener('click',coords48);
   function coords48(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
        {
        cx_arr.push(i);
        }

        for(i=442;i<=556;i++)
        {

        cy_arr.push(i);
        }

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 717;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>723){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords48);
        }
    


 canvas.addEventListener('click',coords51);
   function coords51(event)
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
        

        var h = 724;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>793){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords51);
        }
    

   canvas.addEventListener('click',coords54);
   function coords54(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true ) // new block start
	{
	var h = 794;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>803){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    
        canvas.removeEventListener('click', coords54);
    


 canvas.addEventListener('click',coords57);
   function coords57(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 804;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>847){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords57);
        }



   canvas.addEventListener('click',coords60);
   function coords60(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
	{
	cx_arr.push(i);
	}

	for(i=442;i<=556;i++)
	{

	cy_arr.push(i);
	}

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 848;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>852){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords60);
        }


 canvas.addEventListener('click',coords63);
   function coords63(event)
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
        

        var h = 853;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>921){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords63);
        }



canvas.addEventListener('click',coords66);
   function coords66(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true || m&&g==true) // new block start
	{
	var h = 922;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>950){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    
        canvas.removeEventListener('click', coords66);
    }


  


}



}



}





}









    }
    
     else if(m&&g ==true) // new block start
        {

        var h = 922;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);
        canvas.removeEventListener('click',coords54);
        if(h>950){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
}


    }


    }

    }



    }






    }

     else if(m&&g ==true) // new block start
        {
        var h = 922;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>950){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
}




}


    }

}





}




    }


	}




}




}

}
}
}
}	
}
}
}

    }

}

	
	else if(m&&g ==true) // new block start
	{
	var h = 522;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>534){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
	canvas.removeEventListener('click', coords9);

    //Ending first testing event completely
    canvas.addEventListener('click',coords10);
    function coords10(event)
    {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    for(var i=477;i<=541;i++)
	{
	cx_arr.push(i);
	}

	for(i=505;i<=575;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 534;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>546){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    
    canvas.removeEventListener('click', coords10);
	}
    canvas.addEventListener('click',coords34,{once:false});
    function coords34(event)
    {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 547;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>590){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords34);
    
	}

   canvas.addEventListener('click',coords35,{once:false});
   function coords35(event)
   {

	cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
	{
	cx_arr.push(i);
	}

	for(i=442;i<=556;i++)
	{

	cy_arr.push(i);
	}

	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	

	if(n&&z ==true) // new block start
	{
	var h = 591;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>595){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    canvas.removeEventListener('click', coords35);
    
	}


 
   canvas.addEventListener('click',coords38);
   function coords38(event)
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
        

        var h = 596;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>663){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords38);
        }
    

   canvas.addEventListener('click',coords41);
   function coords41(event)
{

        cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
        {
        cx_arr.push(i);
        }

        for(i=544;i<=577;i++)
        {

        cy_arr.push(i);
        }
        for(var i=990;i<=1068;i++)
        {
                cx_alt.push(i);
        }
    for(var i=570;i<=591;i++)
    {
        cy_alt.push(i);
    }
        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        var m = cx_alt.includes(cx);
        var g = cy_alt.includes(cy);
        
     if( n&&z==true) // new block start
        {
        var h =664 ;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>673){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
        canvas.removeEventListener('click',coords41);
    //


    canvas.addEventListener('click',coords44);
   function coords44(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
        {
        cx_arr.push(i);
        }

        for(i=96;i<=226;i++)
        {

        cy_arr.push(i);
        }

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 674;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>716){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords44);
        }
    
 canvas.addEventListener('click',coords47);
   function coords47(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
        {
        cx_arr.push(i);
        }

        for(i=442;i<=556;i++)
        {

        cy_arr.push(i);
        }

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 717;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>723){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords47);
        }
    
   canvas.addEventListener('click',coords50);
   function coords50(event)
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
        

        var h = 724;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>793){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords50);
        }
    

   canvas.addEventListener('click',coords53);
   function coords53(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true ) // new block start
	{
	var h = 794;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>803){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    
        canvas.removeEventListener('click', coords53);
        
    //Last phase

    
    canvas.addEventListener('click',coords56);
   function coords56(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=736;i<=761;i++)
	{
	cx_arr.push(i);
	}

	for(i=96;i<=226;i++)
	{

	cy_arr.push(i);
	}

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 804;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>847){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords56);
        }

   canvas.addEventListener('click',coords59);
   function coords59(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);
    
    var cx_arr = [];
    var cy_arr = [];
    for(var i=615;i<=771;i++)
	{
	cx_arr.push(i);
	}

	for(i=442;i<=556;i++)
	{

	cy_arr.push(i);
	}

        var n = cx_arr.includes(cx);
        var z = cy_arr.includes(cy);
        

        if(n&&z ==true) // new block start
        {
        

        var h = 848;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>852){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords59);
        }



canvas.addEventListener('click',coords62);
   function coords62(event)
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
        

        var h = 853;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);

        if(h>921){

         clear_image(intr2);
         
        }
        else{ h+=1;}

        },delayInMilliseconds);
    
        canvas.removeEventListener('click', coords62);
        }


canvas.addEventListener('click',coords65);
   function coords65(event)
   {

    cx = event.offsetX;
    cy = event.offsetY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=544;i<=577;i++)
	{

	cy_arr.push(i);
	}
	for(var i=990;i<=1068;i++)
	{
		cx_alt.push(i);
	}
    for(var i=570;i<=591;i++)
    {
    	cy_alt.push(i);
    }
	var n = cx_arr.includes(cx);
	var z = cy_arr.includes(cy);
	var m = cx_alt.includes(cx);
	var g = cy_alt.includes(cy);
	

	if(n&&z ==true || m&&g==true) // new block start
	{
	var h = 922;
	var intr2 = setInterval(function()
		{

	var add2 = 'new_frames/'+'('+h+')'+'.svg';
	make_base(add2);

	if(h>950){

	 clear_image(intr2);

	}
	else{ h+=1;}

	},delayInMilliseconds);
    
        canvas.removeEventListener('click', coords65);
    }


  


}


}

}





}



    }
    
     else if(m&&g ==true) // new block start
        {
        var h = 922;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);
        canvas.removeEventListener('click',coords53);
        if(h>950){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
}

    




    }

    }









    }




    }



    }

     else if(m&&g ==true) // new block start
        {
        var h = 922;
        var intr2 = setInterval(function()
                {

        var add2 = 'new_frames/'+'('+h+')'+'.svg';
        make_base(add2);
        canvas.removeEventListener('click',coords41);
        if(h>950){

         clear_image(intr2);

        }
        else{ h+=1;}

        },delayInMilliseconds);
}




}





    }

}


}




    }


	}




}




}

}



}



}



}




}


}

}


}


else{k+=1;}

}, delayInMilliseconds);
// end of project