# CS3 进阶
## 第一课时 回顾
### css3新属性
#### 选择器(2.1)
##### 基本选择器
选择器 | 含义
---|---
* | 通用元素选择器，匹配任何元素
E | 标签选择器，匹配所有使用E标签的元素
.info | class选择器，匹配所有class属性中包含info的元素
#footer | id选择器，匹配所有id属性等于footer的元素
实例
```
* { margin:0; padding:0; }

p { font-size:2em; }

.info { background:#ff0; }

p.info { background:#ff0; }

p.info.error { color:#900; font-weight:bold; }

#info { background:#ff0; }

p#info { background:#ff0; }
```
##### 多元素组合选择器
选择器 | 含义
---|---
E,F | 多元素选择器，同时匹配所有E元素或F元素，E和F之间用逗号分隔
E F | 后代元素选择器，匹配所有属于E元素后代的F元素，E和F之间用空格分隔
E > F | 子元素选择器，匹配所有E元素的子元素F
E + F |	毗邻元素选择器，匹配所有紧随E元素之后的同级元素F
实例
```
div p { color:#f00; }

#nav li { display:inline; }

#nav a { font-weight:bold; }

div > strong { color:#f00; }

p + p { color:#f00; }
```
##### 2.1属性选择器
选择器 | 含义
---|---
E[att] | 匹配所有具有att属性的E元素，不考虑它的值。（注意：E在此处可以省略，比如"[cheacked]"。以下同。）
E[att=val] |匹配所有att属性等于"val"的E元素
E[att~=val] | 匹配所有att属性具有多个空格分隔的值、其中一个值等于"val"的E元素
实例
```
p[title] { color:#f00; }

div[class=error] { color:#f00; }

td[headers~=col1] { color:#f00; }
```
##### 2.1中的伪类
选择器|	含义
---|---
E:first-child |	匹配父元素的第一个子元素
E:link |	匹配所有未被点击的链接
E:visited |	匹配所有已被点击的链接
E:active |	匹配鼠标已经其上按下、还没有释放的E元素
E:hover |	匹配鼠标悬停其上的E元素
E:focus |	匹配获得当前焦点的E元素
案例
```
p:first-child { font-style:italic; }

input[type=text]:focus { color:#000; background:#ffe; }

input[type=text]:focus:hover { background:#fff; }
```
##### 2.1中的伪元素

选择器|	含义
---|---
E:first-line|	匹配E元素的第一行
E:first-letter|	匹配E元素的第一个字母
E:before|	在E元素之前插入生成的内容
E:after|	在E元素之后插入生成的内容
实例：
```
p:first-line { font-weight:bold; color;#600; }

.preamble:first-letter { font-size:1.5em; font-weight:bold; }

.cbb:before { content:"";margin:0 0 0 -18px; }

a:link:after { content: " (" attr(href) ") "; }
```
>::befor 和 ::after  必须要有属性 content才能起作用。

```
content属性的取值：
	none	设置Content，如果指定成Nothing
	attr(attribute)	设置Content作为选择器的属性之一。
	string	设置Content到你指定的文本
	open-quote	设置Content是开口引号
	close-quote	设置Content是闭合引号
	no-open-quote	如果指定，移除内容的开始引号
	no-close-quote	如果指定，移除内容的闭合引号
	url(url)	设置某种媒体（图像，声音，视频等内容）
```
案例

1. 实现多背景
2. 制作小图标
3. 清除浮动 

#### 选择器（css3）
##### CSS3的同级元素通用选择器

选择器	| 含义
---|---
E ~ F|	匹配任何在E元素之后的同级F元素
实例：
```
p ~ ul { background:#ff0; }
```
##### CSS3 属性选择器

选择器|	含义
---|---
E[att^="val"]|	属性att的值以"val"开头的元素
E[att$="val"]|	属性att的值以"val"结尾的元素
E[att*="val"]|	属性att的值包含"val"字符串的元素
实例：
```
div[id^="nav"] { background:#ff0; }

div[id$="nav"] { background:#ff0; }

div[id*="nav"] { background:#ff0; }
```
##### CSS3中与用户界面有关的伪类
选择器 |	含义
---|---
E:enabled|	匹配表单中激活的元素
E:disabled|	匹配表单中禁用的元素
E:checked|	匹配表单中被选中的radio（单选框）或checkbox（复选框）元素
E::selection|	匹配用户当前选中的元素
实例：
```
input[type="text"]:disabled { background:#ddd; }
```
##### CSS3中的结构性伪类
选择器	|含义
---|---
E:root|	匹配文档的根元素，对于HTML文档，就是HTML元素
E:nth-child(n)|	匹配其父元素的第n个子元素，第一个编号为1
E:nth-last-child(n)|	匹配其父元素的倒数第n个子元素，第一个编号为1
E:nth-of-type(n)|	与:nth-child()作用类似，但是仅匹配使用同种标签的元素
E:nth-last-of-type(n)|	与:nth-last-child() 作用类似，但是仅匹配使用同种标签的元素
E:last-child|	匹配父元素的最后一个子元素，等同于:nth-last-child(1)
E:first-of-type|	匹配父元素下使用同种标签的第一个子元素，等同于:nth-of-type(1)
E:last-of-type|	匹配父元素下使用同种标签的最后一个子元素，等同于:nth-last-of-type(1)
E:only-child|	匹配父元素下仅有的一个子元素，等同于:first-child:last-child或 :nth-child(1):nth-last-child(1)
E:only-of-type|	匹配父元素下使用同种标签的唯一一个子元素，等同于:first-of-type:last-of-type或 :nth-of-type(1):nth-last-of-type(1)
E:empty|	匹配一个不包含任何子元素的元素，注意，文本节点也被看作子元素
实例：
```
p:nth-child(3) { color:#f00; }

p:nth-child(odd) { color:#f00; }

p:nth-child(even) { color:#f00; }

p:nth-child(3n+0) { color:#f00; }

p:nth-child(3n) { color:#f00; }

tr:nth-child(2n+11) { background:#ff0; }

tr:nth-last-child(2) { background:#ff0; }

p:last-child { background:#ff0; }

p:only-child { background:#ff0; }

p:empty { background:#ff0; }
```
##### CSS 3的反选伪类
选择器|	含义
---|---
E:not(s)|	匹配不符合当前选择器的任何元素
实例：
```
:not(p) { border:1px solid #ccc; }
```
##### CSS 3中的 :target 伪类

选择器|	含义
---|---
E:target|	匹配文档中特定"id"点击后的效果


## 作业
1. 利用选择器制作斑马线和鼠标移上效果
2. 利用选择器选中第五个以后的子元素
3. 利用一个元素绘制三道杠
4. 利用一个DIV绘制太极图（需要用到圆角  border-radius：50%）

#
#
#

## 第二课时 （字体，边框）
### 浏览器前缀
在css3中，有些新定义的属性，在低版本的浏览器中还不能很好的支持，为了兼容低版本浏览器，我们提供了以下几种常用的浏览器前缀
```
	-webkit  低版本的google和Safari
	-moz     低版本的火狐
	-ms		 IE9及以上
	-o       低版本的O朋浏览器
```
>在写样式前缀的时候，我们有一个不成文的规定，即：先写私有的CSS3属性，再写标准的CSS3属性

什么时候我们可以去掉一个属性的CSS3前缀呢？答案是，当一个属性成为标准，并且被Firefox、Chrome等浏览器的最新版普遍兼容的时候。



### 字体
在css2版本中，css自带了字体的样式属性，如font-family：字体名称。但有时候我们在设置字体名称的时候，我们的浏览器却不会显示我们设置的字体，而是显示的默认的字体，那么问题来了？

1. 为什么我们设置了字体名称而不会显示？
2. 默认字体是什么字体，哪里来的？

为了解决以上问题，在CSS3中给我们提供了css3字体规则：@font-face规则

####  @font-face规则
##### 语法
```
/*定义一个语法规则  IE9+*/
@font-face {
	font-family:'字体';   //  该属性的值为自己定义
	src: url('resource/testfont.ttf'),   //引入字体文件
		 url('resource/testfont.OTF');
}
//字体文件还包含
//.ttf IE9+
//.otf 
//.woff
//.eot  专门针对IE
//.SVG
```
##### 使用
```
p{
	font-family:"字体";  //在@font-face里面定义的字体
}
```
这样我们就能设置不同样式的字体了。

#### 字体图标
我们在手机APP上或者一些网页上经常会看到这样一些这样的东西：
<!--![image](https://note.youdao.com/yws/api/personal/file/WEB4fc62b222e15269971e8e6f8bb18d92f?method=getImage&version=267&cstk=Vp3yMbEd)-->

那么这些图标是否是图片呢？接下来我们将来揭开谜底！
实际上这些图标都不是图片，而是用的CSS3的自定义字体，首先我们要使用字体图标，我们需要去下载字体图标，这里我推荐大家使用:阿里巴巴字体图标，除此之外还有boostrap内置的字体图标
##### 下载
直接搜索icon 
##### 使用 
 1. 引入iconfont.css 文件
 2. 引入必要的类，iconfont  在使用你所展示的类名

>一般情况下我们都是将 字体图标  放到i标签中

至于字体图标的样式我们可以以文字样式视之。


### 边框

#### 边框圆角
在第一阶段已经讲解 ，这里不在过多叙述，语法：
```
//X方向和Y方向一致
border-radius: 单位（px em %等）

//X方向和Y方向不一致
border-radius：水平方向半径/垂直方向半径 单位
```
#### 图片边框
将图片规定为元素的边框，属性：border-image

**语法：border-image:source slice width outset repeat**

##### 每个参数设置法

设置边框图片的路径

**border-image-source:none | <image>**
```
border-image-source:url(border.png);
```
边框图片切片
 
 **bordre-image-slice:[<number> | <percentage>]{1,4} && fill?**
 ```
border-image-slice:27 27 27 27;   //空心

border-image-slice:27 27 27 27 fill;  //实心

border-image-slice:27 fill;
 ```
设置图片边框的宽度
 
**border-image-width: [ <length> | <percentage> | <number> | auto ]{1,4}**
```
border-image-width:27px

border-image-width:12px 27px;
```
 设置图片边框的偏移量
 
 **border-image-outset: [ <length> | <number> ]{1,4}**
 ```
 border-image-outset:number;
 ```
 设置图片背景内容是否平铺
 
 **border-image-repeat：stretch | repeat | round | space** 
 ```
border-image-repeat：repeat；

border-image-repeat：stretch repeat；

 ```
 
 ##### 综合性写法
 简写其实没什么好说的，不过由于 border-image-slice、border-image-width 与 border
image-outset 这三者的参数相似，所以有必要说一下，这三个参数在简写里有两个注意点:
1. border-image-outset 参数一定要在 border-image-width 之后，假设border-image-
width缺省，仍然需要在原来 border-image-width 写上 /，如下：
正确的写法：
```
border-image: url(http://7xv39r.com1.z0.glb.clouddn.com/box.png) 27 27 27 27 / / 10px;
```
2. 如果有 border-image-width/ border-image-outset 属性值，border-image-slice必须
指定数值，否则不合语法，如下：
```
border-image: url(http://7xv39r.com1.z0.glb.clouddn.com/box.png) 27 27 27 27 / 10px / 10px;
```
#### css3背景
##### 设置背景大小
**background-size: length|percentage|cover|contain;**
```
background-size:cover;

background-size:50px 100px;
```
##### 规定背景的绘制区域
**background-clip：border-box|padding-box|content-box**

默认值为：border-box
```
background-clip:padding-box;
```
##### 背景图的位置是固定于视口的，还是随着包含块移动

**background-attachment:scroll | fixed | local |inhert**
```
background-attachment:fixed;

//scroll:默认值，背景图相对于元素固定，背景随页面滚动而移动，即背景和内容绑定。
//fixed：背景图相对于视口固定，所以随页面滚动背景不动，相当于背景被设置在了body上。
//local：背景图相对于元素内容固定，
//inhert:继承，没什么说的。

```
##### 多背景设置
设置多背景只需要在后面添加一个“，”即可：
```
body {
  background-image: url("img1.png"), url("img2.png");
  background-attachment: scroll, fixed;
}
```
### 作业

1. 完成外部字体图标和字体图标的使用
2. 边框的圆角
3. 练习和理解图片边框并自己找素材制作图片按钮
4. 制作全屏背景





