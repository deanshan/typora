// AJAX��
function AJAXRequest() {
	var xmlObj = false;
	var CBfunc, ObjSelf;
	ObjSelf = this;
	try { xmlObj = new XMLHttpRequest; } catch(e) {
		try { xmlObj = new ActiveXObject("MSXML2.XMLHTTP"); } catch(e2) {
			try { xmlObj = new ActiveXObject("Microsoft.XMLHTTP"); } catch(e3) { xmlObj = false; }
		}
	}
	if(!xmlObj) return false;
	this.method = "POST";
	this.url;
	this.async = true;
	this.content = "";
	this.callback = function(cbobj) { return; }
	this.send = function() {
		if(!this.method || !this.url || !this.async) return false;
		xmlObj.open(this.method, this.url, this.async);
		if(this.method == "POST") xmlObj.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
		xmlObj.onreadystatechange = function() {
			if(xmlObj.readyState == 4) {
				if(xmlObj.status == 200) {
					ObjSelf.callback(xmlObj);
				}
			}
		}
		if(this.method == "POST") xmlObj.send(this.content);
		else xmlObj.send(null);
	}
};

$(document).ready(function() {
	onLoadpage('L1', 'pageL1')
	onLoadpage('L2', 'pageL2')
	onLoadpage('Mid', 'pageMid')
	onLoadpage('R1', 'pageR1')
	onLoadpage('R2', 'pageR2')
});

function onLoadpage(target, eid) {
	var ajaxobj = new AJAXRequest();
	ajaxobj.method = "GET";
	ajaxobj.url = target + ".html";
	ajaxobj.callback = function(callback) {
		document.getElementById(eid).innerHTML = callback.responseText;
		//		pageL1
		piechartL1();
		barchartL1();
		piechartWave();
		//		pageL2
		linechartL2();
		scatterchartL2();
		//		pageMid
		piechartLMid();
		piechartRMid();
		radarchartMid();
		circlechartMid();
		midMap();
		//		pageR2
		pchartR2_1();
		pchartR2_2();
		pchartR2_3();
		pchartR2_4();
		linechartR2();
	}
	ajaxobj.send();
};