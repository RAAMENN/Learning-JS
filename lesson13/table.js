window.onload=function (){
	var otab=document.getElementById('tab1');
	/*var oldColor='';
	// alert(otab.tBodies[0].rows[0].cells[0].innerHTML);
	for (var i = 0; i< otab.tBodies[0].rows.length; i++) {
			otab.tBodies[0].rows[i].onmouseover=function(){
				oldColor=this.style.background;
				this.style.background='yellow';
			};
			otab.tBodies[0].rows[i].onmouseout=function(){
				this.style.background=oldColor;
			};
			if (i%2) {
				otab.tBodies[0].rows[i].style.background='#CCC';
			} 
			else {
				otab.tBodies[0].rows[i].style.background='';
			}
	}*/
	//隔行变色
	var oBtn=document.getElementById('btn1');
	var oGenger=document.getElementById('gender');
	var oAge=document.getElementById('age');
	var oId=otab.tBodies[0].rows.length+1;
	oBtn.onclick=function(){
		var oTr=document.createElement('tr');

		var oTd=document.createElement('td');
		oTd.innerHTML=oId++;
		oTr.appendChild(oTd);

		var oTd=document.createElement('td');
		oTd.innerHTML=oGenger.value;
		oTr.appendChild(oTd);

		var oTd=document.createElement('td');
		oTd.innerHTML=oAge.value;
		oTr.appendChild(oTd);

		var oTd=document.createElement('td');
		oTd.innerHTML='<a href="javascript:;">delete</a>';
		oTr.appendChild(oTd);

		oTd.getElementsByTagName('a')[0].onclick=function(){
			otab.tBodies[0].removeChild(this.parentNode.parentNode);
		};
		otab.tBodies[0].appendChild(oTr);

	};

};