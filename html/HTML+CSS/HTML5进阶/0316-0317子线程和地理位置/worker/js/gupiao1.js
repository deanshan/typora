
var i = 0,num,str="";
var timer = setInterval(function () {

	num = parseInt((Math.random()*1000));
	if (num < 200) {
		str = "跌停";
		clearInterval(timer);
	}
	if (num > 800) {
		str = "涨停";
		clearInterval(timer);
	}
	var time = new Date();
	var h = time.getHours(),
		m = time.getMinutes(),
		s = time.getSeconds();
	h = h < 10 ? '0' + h : h;
	m = m < 10 ? '0' + m : m;
	s = s < 10 ? '0' + s : s;
	var date = h + ':' + m + ':' + s;
	datas = [num,i,date,str];

	i++;
	
	postMessage(datas);
},2000);