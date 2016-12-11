window.onload=function()
{
	var oDiv=document.getElementById('div1');
	oDiv.onmouseover=function(){
		move(0);
	};
	oDiv.onmouseout=function(){
		move(-150);
	};
};

var timer = null;

function move(iTarget){
	var speed=0;
	clearInterval(timer);
	var oDiv=document.getElementById('div1');
	timer=setInterval(function(){
	var speed=0;
	speed=(iTarget-oDiv.offsetLeft)/10;
	if (speed>0) 
	{
		speed=Math.ceil(speed);
	} 
	else 
	{
		speed=Math.floor(speed);
	}
/*		if (oDiv.offsetLeft>iTarget) 
		{
			speed=-10;
		} 
		else 
		{
			speed=10;
		}*/
		if(oDiv.offsetLeft===iTarget)
		{
			clearInterval(timer);
		}	
		else
		{
			oDiv.style.left=oDiv.offsetLeft+speed+'px';			
		}
	},30);
}
