window.onload=function()
{
	var aDiv=document.getElementsByTagName('div');
	for(var i=0;i<aDiv.length;i++){
		aDiv[i].timer=null;
		aDiv[i].onmouseover=function(){
			move(this,400);
		};

		aDiv[i].onmouseout=function(){
			move(this,200);
		};
	}
};
var timer;

function move(obj,iTarget) {
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed;
		speed=(iTarget-obj.offsetWidth)/6;
		if (speed>0) 
		{
			speed=Math.ceil(speed);
		} 
		else 
		{
			speed=Math.floor(speed);
		}

		if (iTarget===obj.offsetWidth) 
		{
			clearInterval(obj.timer);
		} 
		else 
		{
			obj.style.width=obj.offsetWidth+speed+'px';
		}
	},30);// body...
}