function move(){
	setInterval(function()
	{
		oDiv=document.getElementById('div1');
		var speed=0;
		speed=(300-oDiv.offsetLeft)/10;
		if (speed>0) 
			{
				speed=Math.ceil(speed);
			} 
		else 
			{
				speed=Math.floor(speed);
			}
		oDiv.style.left=oDiv.offsetLeft+speed+'px';
		document.title=oDiv.offsetLeft;
	},30);
}