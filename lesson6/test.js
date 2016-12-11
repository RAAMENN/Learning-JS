/*window.onload=function()
{
	var aLi=document.getElementsByTagName('li');

	for(var i=0;i<aLi.length;i++)
	{
		if(i%2===0){
			aLi[i].style.background='grey';
		}
		else{
			aLi[i].style.background='black';
		}
	}
};*/

window.onload=function()
{
	oTxt=document.getElementById('txt1');
	oBtn=document.getElementById('btn');
	oBtn.onclick=function()
	{
		alert(parseInt(oTxt.value/60)+'min'+parseFloat(oTxt.value%60)+'sec');
	};
};