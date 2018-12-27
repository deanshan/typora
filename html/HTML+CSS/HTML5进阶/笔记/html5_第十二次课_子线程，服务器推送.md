# 子线程
- Html5规范中引入了web workers概念，解决了客户端JavaScript无法多线程的问题
- 它是运行在后台的JavaScript，为Web内容在后台线程中运行脚本提供了一种简单的方法
- 可以执行任务而不干扰用户界面(独立于其他脚本，不会影响页面的性能

## 创建workers
```
var workers = new Worker('js/index.js');
```
**workers 提供的事件**
- onmessage：当worker向主线程发送消息时调用(接受数据)
- onerror：当worker运行出现错误，并且没有在worker中ing捕获，会在此捕获

**方法**
- postMessage：将一条消息放入到消息队列中(发送数据)
- terminate：终止worker执行

示例代码

- 客户端
```
window.onload = function(){
	var workers = new Worker('js/index.js');
	workers.onmessage = function(event){
		console.log(event.data);
	}
	workers.onerror = function(event){
		console.log(event.data);
	}
	
	//停止 子线程
	stopbtn.onclick = function(){
		workers.terminate();
	}
}
```
- 服务端
```
//console.log(123);
setInterval(dateTime,1000);
function dateTime(){
	var dates = new Date();
	postMessage(dates);
}
dateTime();
```
> 无法访问下列JS对象：window对象、document对象、parent对象

参考地址：https://www.ibm.com/developerworks/cn/web/1301_jiangjj_html5message/


# 服务器推送事件SSE

服务器推送事件SSE(Server-sent Events)是 HTML 5 规范中的一个组成部分，可以用来从服务端实时推送数据到浏览器端


**标准事件**
- onopen：当成功与服务器建立连接时产生
- onmessage：当收到服务器发送的事件时产生
- onerror：当出现错误时产生

**示例代码**

- 客户端
```
if(typeof(EventSource) !=="undefined"){
	var sent = new EventSource("service/sent.php");
	//连接服务端脚本
	sent.onopen = function(event){
		//当收到服务器发送的事件时产生
		sent.onmessage = function(event){
			console.log(event.data)
		}
	}
	
}else{}
```
- 服务端
```
<?php
	header('Content-Type: text/event-stream');
	header('Cache-Control: no-cache');
	
	$time = date('r');
	echo "data: The server time is: {$time}\n\n";
	flush();
?>
```
