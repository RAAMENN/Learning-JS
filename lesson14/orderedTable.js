window.onload=function () {
	var oBtn=document.getElementById('btn1');
	var oTab=document.getElementById('tab1');
	var arr=[];

	oBtn.onclick=function(){
		for(var i=0;i<oTab.tBodies[0].rows.length;i++){		
			arr[i]=oTab.tBodies[0].rows[i];
		}

		arr.sort(function(tr1,tr2){
			var n1 = parseInt(tr1.cells[0].innerHTML);
			var n2 = parseInt(tr2.cells[0].innerHTML);

			return n1-n2;	
		});

		for(var i=0;i<arr.length;i++){
			oTab.tBodies[0].appendChild(arr[i]);
		}
	};
};