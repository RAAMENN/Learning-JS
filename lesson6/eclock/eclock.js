window.onload=function()
{
 	var aImg=document.getElementsByTagName('img');
	function tick()
	{	
		function toDou(a)
		{
			if (a<10) 
			{
				return '0'+a;
			} 
				else 
			{
				return ''+a;
			}
		}
		var oDate=new Date();
		var str=oDate.getFullYear()+toDou(oDate.getMonth()+1)+toDou(oDate.getDate())+toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
		for(var i=0;i<aImg.length;i++)
		{
			aImg[i].src='1/23-'+str.charAt(i)+'.png';
		}

		function getDays(n)
		{
			var aDay=['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];

			return aDay[n];
		}
		document.write(getDays(oDate.getDay())); 
	}
	setInterval(tick,1000);
	tick();
};