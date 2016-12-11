window.onload=function (){
	var oBtn1=document.getElementById('btn1');
	var oUl=document.getElementById('ul1');
	var oTxt1=document.getElementById('txt1');

	oBtn1.onclick=function(){
		var oLi=document.createElement('li');
		var aLi=oUl.getElementsByTagName('li');

		if (aLi.length>0) {
			oUl.insertBefore(oLi,aLi[0]);
		} 
		else {
		oUl.appendChild(oLi);
		}
		oLi.innerHTML=oTxt1.value;
	};
};