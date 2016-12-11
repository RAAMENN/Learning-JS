window.onload=function(){
	var oDiv=document.getElementById('div1');
	var oUl=oDiv.getElementsByTagName('ul')[0];
	var aLi=oUl.getElementsByTagName('li');
	// 取出元素
	var speed=2;
	// 设置初始速度
	oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
	oUl.style.width=aLi[0].offsetWidth*aLi.length+'px';
	// 将li翻倍 1，2，3，4→1，2，3，4，1，2，3，4 并扩大ul
	function move(){
		if(oUl.offsetLeft<-oUl.offsetWidth/2){
			oUl.style.left='0';
		}
		// 左移超过一半时，返回0点
		if(oUl.offsetLeft>0){
			oUl.style.left=-oUl.offsetWidth/2+'px';
		}
		// 当左边出现空白（刚开始移动）；将ul拉回到一半的位置 从*处（1，2，3，4 * 1，2，3，4）继续滚动
		oUl.style.left=oUl.offsetLeft+speed+'px';
		// 设置移动
	}
	//移动函数

	var timer=setInterval(move,30);
	// 设置移动频率

	oDiv.onmouseover=function(){
		clearInterval(timer);
	};
	// 鼠标移入暂停
	oDiv.onmouseout=function(){
		timer=setInterval(move,30);
	};
	// 鼠标移除继续
	document.getElementById('a1').onclick=function(){
		speed=-2;
		// 给按钮加上事件 负数向左正数向右
	};
	document.getElementById('a2').onclick=function(){
		speed=2;
	};

};