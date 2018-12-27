# H5进阶
## H5第一课时(共2节课)
###  HTML5简介
```
HTML5是定义 HTML 标准的最新的版本，2012年推出的HTML最新标准

目标是将互联网语义化，以便更好地被人类和机器阅读，提供更好地支持各种媒体的嵌入

HTML语法是向后兼容的

HTML5将是 HTML 的最后一个版本号，HTML从此成为了一个不断在更新和变化的活标准
```

###  H5和HTML5之间的区别
```
HTML5如上所述：HTML5是定义 HTML 标准的最新的版本，2012年推出的HTML最新标准

H5:是指HTML5+CSS3+JavaScript等技术的组合
```
> 学习H5你首先要学习的是HTML（5）+CSS(3)+JavaScript等基础课程

### HTML5缺点
```
有些浏览器并不能完全支持HTML5，造成用户体验不佳

自从它诞生后，它的原则就是所有的技术必须是开放的，不准有专利限制，这方面也是引起争议的方面
```
> 关于HTML（5），css(3),javaScript同学们在前面部分已经讲过，我就不再讲解
### 关于H5进阶课程
```
本次课程不在讲解HTML(5),css(3)和JavaScript的基本操作，主要精力放在对于WEB API的操作。
```
### HTML5回顾
#### HTML5语法
大部分延续了html的语法
```
不同之处：开头的 <!DOCTYPE html>

<html lang="zh-CN">

<meta charset="utf-8">

字符编码变得简洁，

不区分大小写，

添加了布尔值，类似checked，selected

引号可以省略，但是编码规范来说，不建议，

有可以省略结束符的标签，和完全省略的标签应用。
```
#### HTML5新增标签
##### 结构标签
1. header：某个区块的头部信息/标题；
```
<header>
	<h1>Welcome to my homepage</h1>
	<p>My name is Donald Duck</p>
</header>
```
2. nav：导航条部分信息
```
<nav>
	<a href="index.asp">Home</a>
	<a href="html5_meter.asp">Previous</a>
</nav>
```
3. main: 标签规定文档的主要内容
```
<main>
  	<h1>Web Browsers</h1>
  	<p>Google Chrome、Firefox。</p>
 	<article>
    	<h1>Google Chrome</h1>
    	<p>Google Chrome。</p>
  	</article>
</main>
```
4. section：独立内容区块，可以用h1~h6组成大纲，表示文档结构，也可以有章节、页眉、页脚或页眉的其他部分；
```
<section>
    <h1>PRC</h1>
  	<p>The People's Republic of.</p>
</section>

```
5. article：特殊独立区块，表示这篇页眉中的核心内容；
```
<article>
    <h1>Internet Explorer 9</h1>
  	<p>Windows Internet Explorer 9.</p>
</article>

```
> 一篇文章应有其自身的意义，应该有可能独立于站点的其余部分对其进行分发。
> <article  元素的潜在来源：论坛帖子/报纸文章/博客条目/用户评论

6. aside：标签内容之外与标签内容相关的辅助信息；
```
<article>
  	<h1>Internet Explorer 9</h1>
  	<p>Windows Internet Explorer 9.</p>
</article>
```
7. footer：标签定义 section 或 document 的页脚；
```
<footer>
  	<p>Posted by: W3School</p>
    <p>Contact information: 
        <a href="mailto:someone@example.com">someone@example.com</a>.
    </p>
</footer>
```
8. figure：独立的单元，例如某个有图片与内容的新闻块。
```
<figure>
    <p>黄浦江上的的卢浦大桥</p>
 	<p>拍摄者：XX，拍摄时间：2017 年 3 月</p>
 	<img src="URL" width="350" height="234" />
</figure>
```

##### 其他功能标签
1. mark：标注（像荧光笔做笔记）
2. details ：标签用于描述文档或文档某个部分的细节 (目前只有Chrome支持)
```
<details>
	<summary>HTML5概述</summary>
	<p>HTML5是定义 HTML 标准的最新的版本，2012年推出的HTML最新标准</p>
</details>
```
*//自带open属性   open="open"  表示展开*
>效果如下
<details>
	<summary>HTML5概述</summary>
	<p>HTML5是定义 HTML 标准的最新的版本，2012年推出的HTML最新标准</p>
</details>

3. dateilst：文本域下拉提示；
```
<input id="myCar" list="cars" />   
<datalist id="cars">
  <option value="html5" label="html5">
  <option value="javaScript" lable="js">
  <option value="CSS3" lable="css3">
</datalist>

//list属性的值是datalist标签的id值
```

4. progress：进度条；
```
<progress min="0" max="100" value="50" />
```
>效果如下
<html>
<progress class="progress" id="progress" min="0" max="100" value="50" />
</html>


- **progress 样式的修改**
```
progress {
    width: 160px;
    border: 1px solid #0064B4;  
    background-color:#e6e6e6;
    color: #0064B4; /*IE10*/
}
progress::-moz-progress-bar { background: #0064B4; }       //火狐
progress::-webkit-progress-bar { background: #e6e6e6; }    //谷歌内核
progress::-webkit-progress-value  { background: #0064B4; }
```
- **模拟游戏（文件上传）加载进度**
```
var pro = document.querySelector("progress");    //获取progress  元素
var span = document.querySelector("span");       //获取span 元素
pro.value = 0;
setInterval(function(){
	if(pro.value <= 1000){
		var num = (Math.random()*2)+1;
		pro.value+= num;
		span.innerHTML = pro.value + "%";
	}
},500);
```

5. meter：标签定义度量衡(血值范围)。
```
<meter min="0" low="33" high="66" max="100" optimum="80" value="75"  />
```
>效果如下
<html>
<meter min="0" low="33" high="66" max="100" optimum="80" value="75"  /></br>
<meter min="0" low="33" high="66" max="100" optimum="80" value="50"  /></br>
<meter min="0" low="33" high="66" max="100" optimum="80" value="25"  /></br>
</html>

##### 例1：(模拟在线血条)

```
//默认血条初始值为100
<meter id="box" min="0" value="100"   low=20 optimum="90" high="80" max="100" >浏览器不兼容</meter><span id="text"></span><br  />

//游戏血条
var box = document.getElementById("box");
setInterval(function(){
	console.log(box.value);
	if(box.value >= 0){
		var num = (Math.random()*5)+1;     //每次少1-6的血量
		box.value-= num;
		text.innerHTML = box.value + "%";
	}
},2000);
```
#### 新增表单类型
1. email：必须输入邮件；
2. url：必须输入url地址；
3. number：必须输入数值；
4. range：必须输入一定范围内的数值；
5. Date Pickers：日期选择器；
	1. date：选取日、月、年
	2. month：选取月、年
	3. week：选取周和年
	4. time：选取时间（小时和分钟）
	5. datetime：选取时间、日、月、年（UTC时间） //不支持
	6. datetime-local：选取时间、日、月、年（本地时间）
6. search：搜索常规的文本域；
7. color：颜色
 



#### HTML5全局属性
**contenteditable：规定元素是否可以被编辑**
```
<div contenteditable="true">可以被编辑的元素</div>
```

##### 例1：（在线更改HTML样式）

*在body标签中加入style标签，（将style标签理解为自定标签）*
```
<style contenteditable>
.box{ 
    padding: 3px; 
    border: 1px solid #ccc; 
    background-color: #fff; 
}
</style>
```
*代码解释在style标签中，写入.box类的默认样式，并且设置style标签可以编辑*

*在线更改样式的标签*
```
<div class="box"></div>
```
*设置style标签的样式*
```
<style>
    body style{
	    display:block;   		//一定要写这个属性（将自定义标签设置为块级元素）
	    padding:0.6em 0.8em; 
	    border:1px dashed #ccc; 
	    background-color:#f5f5f5; 
	    color:#000; 
	    font-family:Monaco, monospace; 
	    font-size:12px; 
	    white-space:pre-wrap;   //强制不换行
	    word-wrap:break-word;
	}
</style>
```
**designMode：设置整个页面是否可以被编辑**
```
<script>
	document.designMode = "on"  //off   打开||关闭
</script>
```
**spellcheck:设置页面拼写检查**
```
<div contenteditable  spellcheck="true">拼写检查</div>

//"true"、'false'、""，值为true和""时，代表检查。
```
> 使用场合
>   1. *类型为text型的input元素*
>   2. *textarea元素*
>   3. *指定contenteditable="true" 编辑的属性*

**tabindex: 使用“tab”键进行切换顺序**

当我们敲击键盘“tab”键的时候，光标会按照顺序跳转
```
<input type="text" tabindex="3">
<input type="text" tabindex="1">
<input type="text" tabindex="2">
```
>注意：不光是input标签可以实现tab切换，只要可以获取到焦点的元素都可以实现tab切换，如：具有contenteditable=“true”的属性的标签。

**draggable:规定元素是否可以拖动**

HTML5赋予了元素新的属性--拖动，其实在HTML5中，一部分标签已经能够自己实现拖动效果了，如：img,a等标签，当然大部分标签还是不能够实现拖动，我们需要用到draggable属性。

规定元素能拖动
```
<div id="box" draggable="true">可以拖动的标签</div>
```

这样我能只能简单的拖动元素，如果我们要来回拖动标签需要用到下面的时间：
```
draggable属性：规定元素可以被拖动

ondragstart事件：开始拖动元素的事件

ondragover事件：放到何处

ondrop事件：放置的事件
```
##### 案例3：(图片的来回拖动)
HTML代码
```
//将要存放的盒子加入ondragover()和ondrop()事件，以便接收
<div class="box" ondragover="dragOver(event)" ondrop = "dragdrop(event)">
	<img draggable="true" id="dragImg"  src="../../courseDemo/img/dog.png"  />
</div>
<div class="box1" ondragover="dragOver(event)" ondrop = "dragdrop(event)"  ></div>
```

SCRIPT代码
```
<script type="text/javascript">
    dragImg.ondragstart = function (e){
    	//获取元素的ID 并将其存储到  e.dataTransfer.setData中
    	e.dataTransfer.setData("text",e.target.id);
    }

    //事件规定在何处放置被拖动的数据
    function dragOver(e){
    	//阻止默认事件
    	e.preventDefault();
    }

    //放置元素时，发生onDrap时间
    function dragdrop(e){
    	//阻止默认事件
    	e.preventDefault();
    	
    	//获取存储到e.dataTransfer.getData里面的参数 
    	var data  = e.dataTransfer.getData("text");
    	
    	//在当前的元素中追加子元素
    	e.target.appendChild(document.getElementById(data));
    }
</script>
```

#### 作业
1. html4和HTML5的不同之处，HTML5的优缺点，简述HTML5和H5的区别
2. 实现在线编辑样式
3. 实现列表的左右拖放

![image](https://note.youdao.com/yws/api/personal/file/WEBf6f653195a14024513fe8b79d2040eb0?method=getImage&version=227&cstk=-3Kn0Kyg)















