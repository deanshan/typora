# html_第四次-文件上传
## 教学目标
通过本次课程能够理解文件上传在客户端的操作过程，以及如何上传多文件，和大文件的问题。
## 文件操作
- Html5提供了File API，允许js读取本地文件，但并不能直接访问本地文件，而是要依赖于用户行为，比如用户在type='file'控件上选择了某个文件或者用户将文件拖拽到浏览器上。
- HTML5支持多文件操作

## 参考地址
https://developer.mozilla.org/zh-CN/docs/Web/API/FileReader
## 接口对象
**FileList：** 一个类数组File对象集合

**File：** 单个文件，从Blob接口继承而来，提供了诸如name、size、type等只读文件属性

**FileReader：** 异步读取文件的接口

**Blob：** 文件对象的二进制原始数据

## 文件拖动上传
需要用到新的方法和属性：如ondragover（），ondrop（）。

文件拖拽上传，在放置被拖动的文件的元素必须要给这个元素定义放置在何处的事件“dragover”和放置事件“drop”。

**案例1** 文件拖动上传

部分JS代码
```
var drapBox = document.getElementById("box");
	//ondragover   事件规定放置在何处
drapBox.addEventListener("dragover",drapoverHandler,false);
function drapoverHandler(e){
	//阻止派发事件
	e.stopPropagation();
	//阻止默认的处理方式
	e.preventDefault();
}
			
//ondrop  放置的事件
drapBox.addEventListener("drop",dropHandler,false);
			
function dropHandler(e){
	//阻止派发事件
	e.stopPropagation();
	//阻止默认的处理方式
	e.preventDefault();
			
	var info  = e.dataTransfer; //获取文件对象
	var fileList = info.files;
	console.log(fileList);
			
	var html = "";
	for (var i=0;i<fileList.length;i++) {
		var file = fileList[i];
		html += "文件名称："+file.name;
		html += "文件大小："+file.size;
		html += "文件类型："+file.type;
		html += "文件修改时间：" +file.lastModifiedDate+"<br/>";
	}
	text.innerHTML = html;
}
```


## 选择（多）文件上传
文件的上传一般来说是单文件上传，但是也有多文件上传的情况

通过对files文件的API的操作，我们可以获取到一些文件的属性，如：
文件名称、大小、类型、创建时间等。

示例代码
```
<body>
	<!--multiple  上传多个文件-->
	<input type="file" id="fileInput" multiple />
	<p id="text"></p>
	
	<script type="text/javascript">
		fileInput.onchange = function(e){
			console.log(this);
			var fileList = this.files;
			console.log(fileList);
			var html = "";
			for (var i=0;i<fileList.length;i++) {
				var file = fileList[i];
				html += "文件名称："+file.name+"<br/>";
				html += "文件大小："+fileSize(file.size)+"<br/>";
				html += "文件类型："+file.type+"<br/>";
				html += "文件修改时间：" +file.lastModifiedDate+"<br/><br/>";
			}
			text.innerHTML = html;
		}
			
		//对文件进行单位的换算
		function fileSize(size){
			var nSize = size/1024;
			var tip = ['KB','MB',"GB","TB",'PB'];
			for(var i=0;nSize>i;nSize/=1024,i++){
				var fileSizeStr = nSize.toFixed(2)+""+tip[i];
				console.log(fileSizeStr);
			}
			
			return fileSizeStr;
		}
	</script>
</body>
```
## FileReader对象
FileReader对象包含以下几个方法
- **readAsText(file,[encoding])：** 将文件读取为文本，并且可以强制选择文件编码
- **readAsDataURL(file)**：以DataURL格式读取文件内容
- **readAsArrayBuffer(blob/file)**：以ArrayBuffer格式读取文件内容
- ~~**readAsBinaryString(File|Blob)**：将文件读取为二进制编码(废除)~~

FileReader对象包含以下几个事件
- **onloadstart** 	： 读取操作开始时触发
- **onload** 		： 读取操作成功时触发
- **onloadend**  	： 读取操作完成时触发(不论成功还是失败)
- **onprogress**  	： 读取操作过程中触发
- **onabort**  		： 读取操作被中断时触发
- **onerror**  		： 读取操作失败时触发
- **result**        :  读取的结果(二进制、文本或DataURL格式);


接下来我们来详细讲解以上方法readAsText(file, [encoding])，readAsDataURL(file) 的使用

####  读取上传文件的路径（图片上传）【课堂代码展示】
####  监控文件的上传进度 【课堂代码展示】
####  大文件分段上传 【课堂代码展示】

