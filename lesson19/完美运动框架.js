function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,null)[name];
	}
}

function move(obj,json,fnEnd)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){

		var bStop=true;

		for(var attr in json)
		{
			var cur=0;
			if (attr==='opacity') 
			{
				cur=Math.round(parseFloat(getStyle(obj,attr))*100);
			} 
			else 
			{
				cur=parseInt(getStyle(obj,attr));
			}
			var speed=(json[attr]-cur)/10;
			if (speed>0) {speed=Math.ceil(speed);} else {speed=Math.floor(speed);}

			if (cur!=json[attr])
			
				bStop=false;
			
			
			if (attr==='opacity') 
			{
				obj.style.opacity=(cur+speed)/100;
			} 
			else 
			{
				obj.style[attr]=cur+speed+'px';					
			}
		}
		if(bStop)
			{
				clearInterval(obj.timer);
				if(fnEnd)fnEnd();
			}
	},30);
}