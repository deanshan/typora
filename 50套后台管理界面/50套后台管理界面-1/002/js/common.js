$(document).ready(function() {
	//时间转换,template插件扩展功能
	template.defaults.imports.timestamp = function(date, format) {
		if(typeof date === "string") {
			var mts = date.match(/(\/Date(\d+)\/)/);
			if(mts && mts.length >= 3) {
				date = parseInt(mts[2]);
			}
		}
		date = new Date(parseInt(date * 1000));
		if(!date || date.toUTCString() == "Invalid Date") {
			return "";
		}
		var map = {
			"M": date.getMonth() + 1, //月份
			"d": date.getDate(), //日
			"h": date.getHours(), //小时
			"m": date.getMinutes(), //分
			"s": date.getSeconds(), //秒
			"q": Math.floor((date.getMonth() + 3) / 3), //季度
			"S": date.getMilliseconds() //毫秒
		};
		format = format.replace(/([yMdhmsqS])+/g, function(all, t) {
			var v = map[t];
			if(v !== undefined) {
				if(all.length > 1) {
					v = '0' + v;
					v = v.substr(v.length - 2);
				}
				return v;
			} else if(t === 'y') {
				return(date.getFullYear() + '').substr(4 - all.length);
			}
			return all;
		});
		return format;
	};
	//分页插件定义构造函数
	function Paging(el, options) {
		this.el = el;
		this.options = {
			pageNo: options.initPageNo || 1, // 初始页码
			totalPages: options.totalPages || 1, //总页数
			totalCount: options.totalCount || '', // 条目总数
			slideSpeed: options.slideSpeed || 0, // 缓动速度
			jump: options.jump || false, // 支持跳转
			callback: options.callback || function() {} // 回调函数
		};
		this.init();
	}
	// 给实例对象添加公共属性和方法
	Paging.prototype = {
		constructor: Paging,
		init: function() {
			this.createDom();
			this.bindEvents();
		},
		createDom: function() {
			var that = this,
				ulDom = '',
				jumpDom = '',
				content = '',
				liWidth = 50, // li的宽度
				totalPages = that.options.totalPages, // 总页数
				wrapLength = 0;
			totalPages > 5 ? wrapLength = 5 * liWidth : wrapLength = totalPages * liWidth;
			for(var i = 1; i <= that.options.totalPages; i++) {
				i != 1 ? ulDom += '<li>' + i + '</li>' : ulDom += '<li class="sel-page">' + i + '</li>';
			}
			that.options.jump ? jumpDom = '<input type="text" placeholder="1" class="jump-text" id="jumpText"><button type="button" class="jump-button" id="jumpBtn">跳转</button>' : jumpDom = '';
			content = '<button type="button" id="firstPage" class="turnPage first-page">首页</button>' +
				'<button class="turnPage" id="prePage">上一页</button>' +
				'<div class="pageWrap" style="width:' + wrapLength + 'px">' +
				'<ul id="pageSelect" style="transition:all ' + that.options.slideSpeed + 'ms">' +
				ulDom +
				'</ul></div>' +
				'<button class="turnPage" id="nextPage">下一页</button>' +
				'<button type="button" id="lastPage" class="last-page">尾页</button>' +
				jumpDom +
				'<p class="total-pages">共&nbsp;' +
				that.options.totalPages +
				'&nbsp;页</p>' +
				'<p class="total-count">' +
				that.options.totalCount +
				'</p>';
			that.el.html(content);
		},
		bindEvents: function() {
			var that = this,
				pageSelect = $('#pageSelect'), // ul
				lis = pageSelect.children(), // li的集合
				liWidth = lis[0].offsetWidth, // li的宽度
				totalPages = that.options.totalPages, // 总页数
				pageIndex = that.options.pageNo, // 当前选择的页码
				distance = 0, // ul移动距离
				prePage = $('#prePage'),
				nextPage = $('#nextPage'),
				firstPage = $('#firstPage'),
				lastPage = $('#lastPage'),
				jumpBtn = $('#jumpBtn'),
				jumpText = $('#jumpText');

			prePage.on('click', function() {
				pageIndex--;
				if(pageIndex < 1) pageIndex = 1;
				handles(pageIndex);
			})

			nextPage.on('click', function() {
				pageIndex++;
				if(pageIndex > lis.length) pageIndex = lis.length;
				handles(pageIndex);
			})

			firstPage.on('click', function() {
				pageIndex = 1;
				handles(pageIndex);
			})

			lastPage.on('click', function() {
				pageIndex = totalPages;
				handles(pageIndex);
			})

			jumpBtn.on('click', function() {
				var jumpNum = parseInt(jumpText.val().replace(/\D/g, ''));
				if(jumpNum && jumpNum >= 1 && jumpNum <= totalPages) {
					pageIndex = jumpNum;
					handles(pageIndex);
					jumpText.val(jumpNum);
				}
			})

			lis.on('click', function() {
				pageIndex = $(this).index() + 1;
				handles(pageIndex);
			})

			function handles(pageIndex) {
				lis.removeClass('sel-page').eq(pageIndex - 1).addClass('sel-page');
				if(totalPages <= 5) {
					that.options.callback(pageIndex);
					return false;
				}
				if(pageIndex >= 3 && pageIndex <= totalPages - 2) distance = (pageIndex - 3) * liWidth;
				if(pageIndex == 2 || pageIndex == 1) distance = 0;
				if(pageIndex > totalPages - 2) distance = (totalPages - 5) * liWidth;
				pageSelect.css('transform', 'translateX(' + (-distance) + 'px)');
				pageIndex == 1 ? firstPage.attr('disabled', true) : firstPage.attr('disabled', false);
				pageIndex == 1 ? prePage.attr('disabled', true) : prePage.attr('disabled', false);
				pageIndex == totalPages ? lastPage.attr('disabled', true) : lastPage.attr('disabled', false);
				pageIndex == totalPages ? nextPage.attr('disabled', true) : nextPage.attr('disabled', false);
				that.options.callback(pageIndex);
			}

			handles(that.options.pageNo); // 初始化页码位置
		}
	}
	$.fn.paging = function(options) {
		return new Paging($(this), options);
	}

});
/*************图片上传*************/
function imgUpload(api, type) {
	if(type == undefined) {
		type = 'sy_thumb';
	}
	//点击
	$('.addImg').click(function() {
		$(this).parent().find('.upload_input').click();
	})
	//删除
	$('.delete').click(function() {
		$(this).parent().find('input').val('');
		$(this).parent().find('img.preview').attr("src", "");
		//IE9以下
		$(this).parent().find('img.preview').css("filter", "");
		$(this).hide();
		$(this).parent().find('.addImg').show();
	})
	//选择图片
	$('.upload_input').change(function() {
		//预览
		var pic = $(this).parent().find(".preview");
		//添加按钮
		var addImg = $(this).parent().find(".addImg");
		//删除按钮
		var deleteImg = $(this).parent().find(".delete");

		var picContainer = $(this).parent().find('.preBlock');

		var ext = this.value.substring(this.value.lastIndexOf(".") + 1).toLowerCase();

		// gif在IE浏览器暂时无法显示
		if(ext != 'png' && ext != 'jpg' && ext != 'jpeg') {
			if(ext != '') {
				layer.msg("图片的格式必须为png或者jpg或者jpeg格式！");
			}
			return;
		}
		html5Reader(this, pic, addImg, deleteImg, picContainer, type);
	});
	//H5渲染
	function html5Reader(file, pic, addImg, deleteImg, picContainer, type) {
		var files = file.files[0];
		var reader = new FileReader();
		reader.onload = function(e) {
			picContainer.css({
				"z-index": 1
			});
			pic.attr("src", this.result);
			//图片读取完成的回调函数（必须加上否则数据读入不完整导致出错！）
			pic[0].onload = function() {
				var fd = new FormData();
				fd.append('dosubmit', '1');
				fd.append('userid', '1');
				fd.append('thumb_width', '0');
				fd.append('thumb_height', '0');
				fd.append('watermark_enable', '1');
				fd.append('Filedata', files);
				$.ajax({
					url: api + type, //api接口地址
					type: "POST",
					processData: false,
					contentType: false,
					data: fd,
					success: function(ret) {
						var path = JSON.parse(ret);
						path = path.split(',');
						$(file).parent().find("#img").val(path[1]);
					}
				});
			}
		};
		//将文件已Data URL的形式读入页面
		reader.readAsDataURL(files);
		addImg.hide();
		deleteImg.show();
	}
}

function del_space(elem) {

	var elem_child = elem.childNodes; //得到参数元素的所有子元素

	for(var i = 0; i < elem_child.length; i++) { //遍历子元素
		if(elem_child.nodeName == "#text" && !/\S/.test(elem_child.nodeValue)) {
			elem.removeChild(elem_child)
		}
	}

}
/****************************************设置文本框字数*****************************************************/
function Wordcount(name, number) {
	this.Wcount = this.$(name);
	this.Length(arguments);
}
// 简写document.getElementById方法. 
Wordcount.prototype.$ = function(element) {
	return document.getElementById(element);
}
Wordcount.prototype.Length = function(number) {
	var h = document.createElement("span");
	this.Wcount.parentNode.appendChild(h).className ="word_count";
	this.Wcount.onkeyup = this.GetFunction(this, "keyup", number[1]);
	count(number[1], this.Wcount);
}
function count(number, name) {
	var w = name.parentNode.querySelector(".word_count");
	w.innerHTML = "剩余字数 :<em class='colorred number'>" + number + "</em>字符";
	var d = name.parentNode.querySelector(".number");
	if(name.value.length > number) {
		var b = document.body.querySelector(".box_Bullet");
		if(!b) {
			var box = document.createElement("div");
			document.body.appendChild(box).className = "box_Bullet";
			document.body.appendChild(box).innerHTML = "您输入的字数超过限制!";
			box.style.cssText="margin-left:"+(-box.offsetWidth/2)+"px"+";"+"margin-top:"+(-box.offsetHeight/2)+"px";
			var int = setInterval(function() {clock()}, 1000);
			var num =2;
			function clock() {
				num > 0 ? num-- : clearInterval(int);
				if(num == 0) {
					clearInterval(int);
					document.body.removeChild(box);
					return
				}
			}
		}
		// 超过限制的字数了就将 文本框中的内容按规定的字数 截取
		name.value = name.value.substring(0, number);
		d.innerHTML = 0;
		return false;
	} else {
		var curr = number - name.value.length; //减去 当前输入的	
		d.innerHTML = curr.toString();
		return true;
	}

}
//onkeyup方法
Wordcount.prototype.keyup = function(col) {
	count(col, this.Wcount);
};
Wordcount.prototype.GetFunction = function(variable, method, number) {
	return function() {
		variable[method](number);
	}
}
//-----------table表格功能 （排序，checkbox全选，表格列宽拖拽） ------------------------------------------- 
function TableSorter(table) {
	this.Table = this.$(table);
	// alert(this.Table.innerHTML); 
	if(this.Table.rows.length <= 1) {
		return;
	}
	this.Init(arguments);
	this.checksName();
}
var tTD;
// 以下样式针对表头的单元格. 
TableSorter.prototype.NormalCss = "NormalCss"; // 没有执行排序时的样式.
TableSorter.prototype.SortAscCss = "SortAscCss"; // 升序排序时的样式. 
TableSorter.prototype.SortDescCss = "SortDescCss"; // 降序排序时的样式.

// 初始化table的信息和操作. 
TableSorter.prototype.Init = function(args) {
	this.ViewState = [];
	// 设置表头的状态位，排序时根据状态判断升降序 
	for(var x = 0; x < this.Table.rows[0].cells.length; x++) {
		this.ViewState[x] = false;
	}
	// 参数args为数组，判断表头的那些字段需要排序，数组的第一个参数为要排序的表 
	if(args.length > 1) {
		for(var x = 1; x < args.length; x++) {
			// 循环判断每一个需要排序的表头字段的下标，是否大于表头的最大下标； 
			// 如果大的话说明是一个手误 
			// 如果正确在需要排序的表头字段添加onclick方法和相对的样式 
			// 代码:new TableSorter("tb2", 0, 2, 5, 6);<br /> 
			// 效果:点击表头0,2,5,6列可执行排序.<br /> 
			if(args[x] > this.Table.rows[0].cells.length) {
				continue;
			} else {
				var newDiv = document.createElement("em");
				newDiv.className = this.NormalCss;
				//this.Table.rows[0].cells[args[x]].className = this.NormalCss; 
				this.Table.rows[0].cells[args[x]].appendChild(newDiv);
				this.Table.rows[0].cells[args[x]].onclick = this.GetFunction(this, "Sort", args[x]);
				this.Table.rows[0].cells[args[x]].style.cursor = "pointer";
			}
		}

	}
	// 参数不大于1，说明所有的字段都需要排序 
	else {
		for(var x = 0; x < this.Table.rows[0].cells.length; x++) {
			this.Table.rows[0].cells[x].onclick = this.GetFunction(this, "Sort", x);
			this.Table.rows[0].cells[x].style.cursor = "pointer";
		}
	}
	//checkbox全选选择操作，表格列宽拖拽
	for(var x = 0; x < this.Table.rows[0].cells.length; x++) {
		var checkbox = this.Table.rows[0].cells[x].getElementsByTagName('input')[x];
		checkbox ? this.Table.rows[0].cells[x].onclick = this.GetFunction(this, "checkbox", x) : '';
		//表格拖拽
		this.Table.rows[0].cells[x].onmousedown = this.GetFunction(this, "Dragdrop", x);
		this.Table.rows[0].cells[x].onmouseup = this.GetFunction(this, "onmouseupDrop", x);
		this.Table.rows[0].cells[x].onmousemove = this.GetFunction(this, "onmousemoveDrop", x);
	}

}
//单个checkbox选择操作
TableSorter.prototype.checksName = function() {
	for(var x = 1; x < this.Table.rows.length; x++) {
		var checkbox = this.Table.rows[x].cells[0].getElementsByTagName('input')[0];
		checkbox ? this.Table.rows[x].cells[0].onclick = this.GetFunction(this, "likecheck", x) : '';
	}
}
//表格拖拽鼠标指针点击时发生
TableSorter.prototype.Dragdrop = function(col) {
	tTD = this.Table.rows[0].cells[col];
	if(event.offsetX > tTD.offsetWidth - 10) {
		tTD.mouseDown = true;
		tTD.oldX = event.x;
		tTD.oldWidth = tTD.offsetWidth;
	}
};
//表格拖拽鼠标按键被松开时发生
TableSorter.prototype.onmouseupDrop = function(col) {
	if(tTD == undefined) tTD = this.Table.rows[0].cells[col];
	tTD.mouseDown = false;
	tTD.style.cursor = 'default';
}
//表格拖拽鼠标指针移动时发生
TableSorter.prototype.onmousemoveDrop = function(col) {
	//更改鼠标样式
	if(event.offsetX > this.Table.rows[0].cells[col].offsetWidth - 5)
		this.Table.rows[0].cells[col].style.cursor = 'e-resize';
	else
		this.Table.rows[0].cells[col].style.cursor = 'default';
	//取出暂存的Table Cell
	if(tTD == undefined) tTD = this.Table.rows[0].cells[col];
	//调整宽度
	if(tTD.mouseDown != null && tTD.mouseDown == true) {
		tTD.style.cursor = 'default';
		if(tTD.oldWidth + (event.x - tTD.oldX) > 0)
			tTD.width = tTD.oldWidth + (event.x - tTD.oldX);
		//调整列宽
		tTD.style.width = tTD.width;
		tTD.style.cursor = 'e-resize';
		//调整该列中的每个Cell
		table = tTD;
		while(table.tagName != 'TABLE') table = table.parentElement;
		for(j = 0; j < table.rows.length; j++) {
			table.rows[j].cells[tTD.cellIndex].width = tTD.width;
		}
	}
}
// 简写document.getElementById方法. 
TableSorter.prototype.$ = function(element) {
	return document.getElementById(element);
}
// 取得指定对象的脱壳函数. 
TableSorter.prototype.GetFunction = function(variable, method, param) {
	// 在这里需要说明一下，variable-->对应的是this，method-->对应的是"Sort"，param对应的是需要排序表头的下标 
	// this代表这个类，其中包括所用的方法和属性。下面的方法相当于调用Sort()方法 
	return function() {
		variable[method](param);
	}
}
//checkbox全选取消操作
TableSorter.prototype.checkbox = function(col) {
	for(var x = 1; x < this.Table.rows.length; x++) {
		var checkbox = this.Table.rows[x].cells[col].getElementsByTagName('input')[col];
		for(var y = 0; y < this.Table.rows[0].cells.length; y++) {
			var checkboxs = this.Table.rows[0].cells[y].getElementsByTagName('input')[y];
			if(checkboxs) {
				if(checkboxs.checked == false) {
					checkbox ? checkbox.checked = false : '';
					this.Table.rows[x].className = "";
				} else {
					checkbox ? checkbox.checked = true : '';
					this.Table.rows[x].className = "active";
				}
			}
		}
	}
}
//单选操作
TableSorter.prototype.likecheck = function(col) {
	for(var x = 0; x < this.Table.rows[0].cells.length; x++) {
		var checkbox = this.Table.rows[0].cells[x].getElementsByTagName('input')[x];
		if(checkbox) {
			if(checkbox.checked == true) {
				checkbox ? checkbox.checked = false : '';
			}
		}
		var zcheckbox = this.Table.rows[col].cells[0].getElementsByTagName('input')[x];
		if(zcheckbox) {
			if(zcheckbox.checked == true) {
				this.Table.rows[col].className = "active";

			} else {
				this.Table.rows[col].className = "";
			}
			for(var x = 1; x < this.Table.rows.length; x++) {
				var n = this.Table.querySelectorAll(".active").length;
				var t = this.Table.rows.length - 1;
				if(n == t) {
					checkbox ? checkbox.checked = true : '';
				}
			}

		}
	}
}
// 执行排序. 
TableSorter.prototype.Sort = function(col) {
	// 定义判断排序字段的一个标志位，数字排序(自己写)和字符排序(JavaScript内置函数) 
	var SortAsNumber = true;
	// 为表头设置样式 
	//for(var x = 0; x < this.Table.rows[0].cells.length; x++){ 
	//this.Table.rows[0].cells[x].className = this.NormalCss; 
	//} 
	// 定义放置需要排序的行数组 
	var Sorter = [];
	for(var x = 1; x < this.Table.rows.length; x++) {
		Sorter[x - 1] = [this.Table.rows[x].cells[col].innerHTML, x];
		// alert(Sorter[x-1]); 
		// 判断需要排序字段的类型，分为数字型和非数字型 
		SortAsNumber = SortAsNumber && this.IsNumeric(Sorter[x - 1][0]);
		// alert(Sorter[x-1][0]); 

	}
	// 如果是数字型采用下面的方法排序 
	if(SortAsNumber) {
		for(var x = 0; x < Sorter.length; x++) {
			for(var y = x + 1; y < Sorter.length; y++) {
				if(parseFloat(Sorter[y][0]) < parseFloat(Sorter[x][0])) {
					var tmp = Sorter[x];
					Sorter[x] = Sorter[y];
					Sorter[y] = tmp;
				}
			}
		}
	}
	// 如果是非数字型的可以采用内置方法sort()排序 
	else {
		Sorter.sort();
	}
	if(this.ViewState[col]) {
		// JavaScript内置函数，用于颠倒数组中元素的顺序。 
		Sorter.reverse();
		this.ViewState[col] = false;
		this.Table.rows[0].cells[col].lastChild.className = this.SortDescCss;
	} else {
		this.ViewState[col] = true;
		this.Table.rows[0].cells[col].lastChild.className = this.SortAscCss;
	}
	var Rank = [];
	for(var x = 0; x < Sorter.length; x++) {
		Rank[x] = this.GetRowHtml(this.Table.rows[Sorter[x][1]]);
	}
	// alert(Rank[0]); 
	for(var x = 1; x < this.Table.rows.length; x++) {
		for(var y = 0; y < this.Table.rows[x].cells.length; y++) {
			this.Table.rows[x].cells[y].innerHTML = Rank[x - 1][y];
			// alert(Rank[x-1][y]); 
		}
	}
	this.OnSorted(this.Table.rows[0].cells[col], this.ViewState[col]);
}

// 取得指定行的内容. 
TableSorter.prototype.GetRowHtml = function(row) {
	var result = [];
	for(var x = 0; x < row.cells.length; x++) {
		result[x] = row.cells[x].innerHTML;
	}
	return result;
}

TableSorter.prototype.IsNumeric = function(num) {
	return /^\d+(\.\d+)?$/.test(num);
}

// 可自行实现排序后的动作. 
TableSorter.prototype.OnSorted = function(cell, IsAsc) {
	return;
}
//提示验证文本
function huprompt(ul) {
	this.Verify = this.$(ul);
	del_space(this.Verify); //调用清理空格的函数
	if(this.Verify.children.length <= 1) {
		return;
	}
	this.Init(arguments);
}
// 简写document.getElementById方法. 
huprompt.prototype.$ = function(element) {
	return document.getElementById(element);
}

// 初始化的信息和操作. 
huprompt.prototype.Init = function(args) {
	var conttext = document.getElementsByName("Required");
	for(var i = 0; i < conttext.length; i++) {
		if(conttext[i].dataset.verify === "verify") {
			var Hints = conttext[i].dataset.name;
			var promptname = conttext[i].dataset.prompt;
			var prompt = conttext[i].parentNode.querySelector(".prompt");

			function newprompt(name) {
				var newspan = document.createElement("span");
				if(!prompt) {
					conttext[i].parentNode.appendChild(newspan).className = "prompt iconfont";
					newspan.innerHTML = "&#xe617 " + Hints + name;
					return false;
				} else {
					prompt.innerHTML = "&#xe617 " + Hints + name;
				}
			}

			function prompthtml() {
				if(prompt) {
					var prompthtml = conttext[i].parentNode.removeChild(prompt);
				}
			}
			if(conttext[i].value == "") {
				var textname = "不能为空！";
				newprompt(textname);
			} else {
				if(promptname == "phone") {
					var expression = /^[1][3,4,5,7,8][0-9]{9}$/;
				} else if(promptname == "mailbox") {
					var expression = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
				} else if(promptname == "password") {
					var expression = /^[a-zA-Z]\w{5,17}$/;
					var p = conttext[i].value;
				}
				var v = conttext[i].value;
				var selects = huprompt.prototype.$("Competence_sort");
				if(expression != null) {
					if(promptname == "confirm") {
						if(p != v) {
							var textname = "不一致,请从新输入。";
							newprompt(textname);
							return
						}
					}
					if(expression.test(v)) {
						prompthtml();
					} else {
						var textname = "不正确，请确认编辑格式。";
						newprompt(textname);
					}
				}else if(conttext[i] == selects){
					var index = conttext[i].selectedIndex; // 选中索引
					var selectname= conttext[i].options[index].value ;					
					if(selectname == "0") {
					var textname = "不能为空！";
					newprompt(textname);	 
				}else{
					prompthtml();
				}
				} else {
				prompthtml();
				}
			}
			
		}
	}
}