document.onkeydown=function(ev)
{
	var oEvent=ev||event;
	var oDiv=document.getElementById('div1');

	if (oEvent.keyCode===37) 
	{
		oDiv.style.left=oDiv.offsetLeft-10+'px';
	} 
	else if (oEvent.keyCode===39)
	{
		oDiv.style.left=oDiv.offsetLeft+10+'px';
	}
};