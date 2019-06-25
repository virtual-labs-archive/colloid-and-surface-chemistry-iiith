

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
var delayInMilliseconds = 70;
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

canvas.addEventListener('click',coords,{once:true});
function coords()
{
    cx = event.pageX;
    cy = event.pageY; // or event.pageY

    alert('x,y = '+ cx + ','+ cy);

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

	}
        
		
		
canvas.addEventListener('click',coords2,{once:true});
function coords2(event)
	{
    cx = event.pageX;
    cy = event.pageY;
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

    //canvas.removeEventListener('click', coords2);
	}
canvas.addEventListener('click',coords3,{once:true});
function coords3(event)
{

	cx = event.pageX;
    cy = event.pageY;
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

    //canvas.removeEventListener('click', coords3);
	}
//for stopping function from running second time 

canvas.addEventListener('click',coords4,{once:true});
function coords4(event)
{

	cx = event.pageX;
    cy = event.pageY;
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

    
	}

canvas.addEventListener('click',coords5,{once:true});
function coords5(event)
{

	cx = event.pageX;
    cy = event.pageY;
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

    //canvas.removeEventListener('click', coords4);
	}

canvas.addEventListener('click',coords6,{once:true});
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

	cx = event.pageX;
    cy = event.pageY;
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

    //canvas.removeEventListener('click', coords4);
	}
canvas.addEventListener('click',coords7,{once:true});
function coords7(event)
{

	cx = event.pageX;
    cy = event.pageY;
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

    //canvas.removeEventListener('click', coords4);
	}

canvas.addEventListener('click',coords8,{once:true});
function coords8(event)
{

	cx = event.pageX;
    cy = event.pageY;
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

    //canvas.removeEventListener('click', coords4);
	}
canvas.addEventListener('click',coords9,{once:true});
function coords9(event)
{

	cx = event.pageX;
    cy = event.pageY;
    //alert('x,y = '+ cx + ','+ cy);

    var cx_arr = [];
    var cy_arr = [];
    var cx_alt = [];
    var cy_alt = [];
    for(var i=1007;i<=1072;i++)
	{
	cx_arr.push(i);
	}

	for(i=530;i<=562;i++)
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

    //canvas.removeEventListener('click', coords4);
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

    //canvas.removeEventListener('click', coords4);
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