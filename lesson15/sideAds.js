window.onscroll=function()
{
	var oImg=document.getElementById('img1');
	var scrollTop=document.body.scrollTop;
	startMove(parseInt((document.documentElement.clientHeight-oImg.offsetHeight)/2)+scrollTop);
	// oDiv.style.top=document.documentElement.clientHeight-oDiv.offsetHeight+scrollTop+'px';
};  

var timer;

function startMove(iTarget)
{
	var oImg=document.getElementById('img1');
	clearInterval(timer);
	timer=setInterval(function()
	{
		var speed=(iTarget-oImg.offsetTop)/3;
		if (speed>0)
		{
			speed=Math.ceil(speed);
		} 
		else 
		{
			speed=Math.floor(speed);
		}
		if (oImg.offsetTop===iTarget) 
		{
			clearInterval(timer);
		} 
		else 
		{
			oImg.style.top=oImg.offsetTop+speed+'px';
		}		
	},30);
}