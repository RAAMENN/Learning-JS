/*window.onload=function()
{
	aDiv=document.getElementsByTagName('div');
	/*for(var i=0;i<aDiv.length;i++)
	{
		aDiv[i].onmouseover=function(){
			move(this,'width',300);
		};

		aDiv[i].onmouseout=function(){
			move(this,'width',200);
		};
	}*/
	/*aDiv[0].onmouseover=function(){
		move(this,'width',300);
	};

	aDiv[0].onmouseout=function(){
		move(this,'width',200);
	};


	aDiv[1].onmouseover=function(){
		move(this,'height',300);
	};

	aDiv[1].onmouseout=function(){
		move(this,'height',200);
	};


	aDiv[2].onmouseover=function(){
		move(this,'opacity',30);
	};

	aDiv[2].onmouseout=function(){
		move(this,'opacity',100);
	};
};
*/
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

function move(obj,attr,iTarget)
{
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		var cur=0;
		if (attr=='opacity') 
		{
			cur=Math.round(parseFloat(getStyle(obj,attr))*100);
		} 
		else 
		{
			cur=parseInt(getStyle(obj,attr));
		}
		var speed=(iTarget-cur)/6;
		if (speed>0) {speed=Math.ceil(speed);} else {speed=Math.floor(speed);}
		if (cur===iTarget) 
		{
			clearInterval(obj.timer);
		} 
		else 
		{
			if (attr==='opacity') 
			{
				obj.style.opacity=(cur+speed)/100;
			} 
			else 
			{
				obj.style[attr]=cur+speed+'px';					
			}
		}
	},30);
}