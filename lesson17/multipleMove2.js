window.onload=function()
{
	aImg=document.getElementsByTagName('img');
	for(var i=0;i<aImg.length;i++){
		aImg[i].opacity=30;
		aImg[i].onmouseover=function(){
			move(this,100);
		};
		aImg[i].onmouseout=function(){
			move(this,30);
		};
	}
};

function move(obj,iTarget)
{	
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var speed=(iTarget-obj.opacity)/6;
		if (speed>0) 
		{
			speed=Math.ceil(speed);
		} 
		else 
		{
			speed=Math.floor(speed);
		}
		if (iTarget===obj.opacity) 
		{
			clearInterval(obj.timer);
		} 
		else 
		{
			obj.opacity=obj.opacity+speed;
			obj.style.opacity=obj.opacity/100;
		}
	},30);
}