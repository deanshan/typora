var dataGupiao = setInterval(dataTime,1500);

function dataTime(){
	var num = ((Math.random()*5)+1).toFixed(2);
	if(num<1.5){
		datas = {"name":"万达集团","pri" : "股票跌停","time" : new Date()}
		clearInterval(dataGupiao);
	}else if(num>5.5){
		datas = {"name":"万达集团","pri" : "股票涨停","time" : new Date()}
		clearInterval(dataGupiao);
	}else{
		datas = {"name":"万达集团","pri" : num+"元/股","time" : new Date()};
	}
	postMessage(datas);
}




