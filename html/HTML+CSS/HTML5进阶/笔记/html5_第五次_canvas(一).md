# canvas
##  canvas 画布
现实中我们画画都是在纸上，也就是画布上，那电脑上就得使用canvas，所以我们可以把canvas理解为绘画所用的画布，一张虚拟的纸，然后使用程序在上面画出所需的图形。

**canvas 是 HTML5 提供的一个用于展示绘图效果的标签**
###
- 实现基本的canvas api的使用，完成简单的绘图
- 数据可视化的实现
	
### 基本用法
```
<canvas id="canvas" width="150" height="150" style="background: red"></canvas>
<style>
canvas{border: 1px solid black;}
</style>
```
我们可以在canvas标签中就明确规定宽和高，也推荐大家这样做，虽然CSS也能设置，但可能图像会出现扭曲，这是因为canvas有它默认的大小，当css的尺寸与初始画布的比例不一致，就会出现扭曲
#### 替代内容
```
<canvas id="canvas" width="150" height="150"style="background: red">
	将忽略在容器中包含的内容
	<img src="URL" width="150" height="150">
</canvas>
```
在canvas中包含的内容与img的alt 或者 音视频中的替代内容相似，在某些老的浏览器或者不支持canvas的情况下，在浏览器中将展示替代内容

Canvas元素的结束标签</canvas>和img标签不同，不能省略，如果结束不存在，则文档的其余部分会被认为是替代内容，将不会显示出来

#### 判断浏览器是否支持
```
function draw(){
	var canvas = document.getElementById('canvas');
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		alert(ctx)
	}else{
		alert('不支持')
	}
}
```
能够打印出 ==ctx== 对象说明能够支持

### canvas API的操作

#### 参考地址
https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API

#### 图形上下文
getContext(“2D”)对象实现图形上下文

#### 绘制矩形
在画图之前，先了解下画布的坐标：在上一个例子中我们定义canvas的宽高都是150像素，那我们就可以把这个canvas看做是宽高都是由150个单元构成的，这里的单元就可以理解为1像素，例子中ctx.fillRect(10,10,55,50)前两个参数就是X轴和Y轴，在canvas中，坐标的起点是左上角，也就是X轴和Y轴的原点。

**三种方式：**

- **fillRect(x,y,width,height)：** 绘制一个矩形
- **strokeRect(x,y,width,height)：** 绘制一个矩形的边框
- **clearRect(x,y,width,height)：** 清除指定矩形区域，该区域完全透明

#### 样式
- **fillStyle：** 设置图形的填充颜色
- **strokeStyle：** 设置图形轮廓的颜色
- **globalAlpha：** 设置图形的透明度，值：0.0~1.0(完全不透明)
- **lineWidth：** 设置线条宽度
- **lineCap：** 设置线条末端样式
- **lineJoin：** 设置线条与线条连接处样式
- **miterLimit：** 设置或返回最大斜接长度

#### 路径的绘制
- **beginPath：** 新建一条路径，绘制命令被指向到该路径生成路径
- **closePath：** 闭合路径，绘制命令又重新指向developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage到上下文中(getContext)
- **stroke：**    通过线条来绘制图形轮廓
- **fill：**  通过填充路径的内容区域生成实心的图形
- **moveTo(x,y)：**   将笔触(笔尖)移动到指定的X和Y轴上
- **lineTo(x,y)：**   绘制一条笔触到指定X和Y轴的直线
- **arc(x,y,半径,圆弧起点,圆弧终点,方向)：**  以(X,Y)为圆心，按半径画圆弧(圆)，从圆弧起点到终点，按照方向(默认为false:顺时针)来生成
#### 作业
回顾canvas用法并根据所学知识画出带样式的几何图形（卡通人物）

