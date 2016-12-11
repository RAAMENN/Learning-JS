window.onload=function ()
{
	oImg=document.getElementsByTagName('img')[0];
	oImg.onmouseover=function(){
		move(100);
	};
	oImg.onmouseout=function(){
		move(30);
	};
};

var timer=null;
var alpha=30;
function move(iTarget)
{
	oImg=document.getElementsByTagName('img')[0];
	clearInterval(timer);

	timer=setInterval(function(){
	var speed=0;
	
	if (alpha<iTarget) 
	{
		speed=3;
	} 
	else 
	{
		speed=-3;
	}

	if (alpha===iTarget) 
	{
		clearInterval(timer);
	} 
	else 
	{
		alpha+=speed;
		oImg.style.opacity=alpha/100;
	}},30);
}