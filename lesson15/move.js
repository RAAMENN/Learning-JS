var timer=null;
function startMove() 
{
	var oDiv=document.getElementById('div1');

	clearInterval(timer);

	timer=setInterval(function(){
		var speed=1;
		if(oDiv.offsetLeft>=1000){
			clearInterval(timer);
		}
		else{
		oDiv.style.left=oDiv.offsetLeft+speed+'px';
		}
	},30);	// body...
}