# canvas
## canvas 文本操作
主要用到以下几个属性

**fillText：**   在指定的(x,y)位置填充指定的文本，绘制的最大宽度是可选的（填充）
**strokeText：**  在指定的(x,y)位置绘制文本边框，绘制的最大宽度是可选的（描边）

 - 属性的使用 （context.fillText(text,x,y,maxWidth);）
```
ctx.font="20px Georgia";
ctx.fillText("Hello World!",10,50);
```
**textAlign：**  文本对齐选项. 可选的值包括：start, end, left, right or center. 默认值start

**textBaseline：**  基线对齐选项. 可选的值包括：top, hanging, middle, 
alphabetic, ideographic, bottom。默认值是 alphabetic。

**measureText()：**  测量文本的方法，将返回一个 TextMetrics对象的宽度、所在像素，这些体现文本特性的属性。

```
//获取文本对象的宽度
ctx.measureText(txt).width

ctx.font="30px Arial";
var txt="Hello World"
ctx.fillText("width:" + ctx.measureText(txt).width,10,50)
ctx.fillText(txt,10,100);
```
## 阴影
**shadowColor、shadowBlur：** 阴影的颜色(默认是全透明的黑色)、模糊度(默认为 0)

**shadowOffsetX、shadowOffsetY：** 水平和垂直距离(默认为 0)

```
//阴影的颜色
ctx.shadowColor = "#8C8C8C";
//阴影的模糊度
ctx.shadowBlur =10;
//x轴方向的偏移值
ctx.shadowOffsetX = 10;
//y轴方向的偏移值
ctx.shadowOffsetY = 10;
```
例：
- 复制图像##
- 文字阴影

## 渐变
### 线性渐变
**createLinearGradient(x1,y1,x2,y2)：** 创建线性渐变（用在画布内容上）
**addColorStop(position,color)：** 规定渐变对象中的颜色和停止位置
- 渐变
```
//渐变的起点位置和  结束位置
var bgColor = ctx.createLinearGradient(100,100,300,100);
//设置渐变的颜色
bgColor.addColorStop(0,"green");
bgColor.addColorStop(1,"red");
ctx.fillStyle = bgColor;
ctx.rect(100,100,200,100);
ctx.fill();
```
- 多层颜色渐变
```
//设置多个渐变
ctx.beginPath();
var bgColor = ctx.createLinearGradient(400,100,600,100);
bgColor.addColorStop(0,"green");
bgColor.addColorStop(0.5,"yellow");
bgColor.addColorStop(1,"red");
ctx.fillStyle = bgColor;
ctx.rect(400,100,200,100);
ctx.fill();
```
- 倾斜颜色渐变
```
//设置倾斜渐变
ctx.beginPath();
var bgColor = ctx.createLinearGradient(100,300,300,400);
bgColor.addColorStop(0,"green");
bgColor.addColorStop(1,"red");
ctx.fillStyle = bgColor;
ctx.rect(100,300,200,100);
ctx.fill();
```
- 控制渐变位置
```
//控制渐变位置
ctx.beginPath();
var bgColor = ctx.createLinearGradient(400,300,600,400);
bgColor.addColorStop(0.4,"green");
bgColor.addColorStop(0.5,"yellow");
bgColor.addColorStop(0.6,"red");
ctx.fillStyle = bgColor;
ctx.rect(400,300,200,100);
ctx.fill();
```
### 镜像渐变
**createRadialGradient(x1,y1,r1,x2,y2,r2)：** 创建放射状/环形的渐变（用在画布内容上）

**addColorStop(position,color)：** 规定渐变对象中的颜色和停止位置

- 多颜色渐变
		
```
ctx.beginPath();
var bgColor = ctx.createRadialGradient(250,100,0,250,100,50);
bgColor.addColorStop(0,"red");
bgColor.addColorStop(0.5,"green");
bgColor.addColorStop(1,"yellow");
ctx.fillStyle = bgColor;
ctx.rect(200,50,100,100);
ctx.fill();
```

			
- 渐变圆心不在同一个位置
			
```
ctx.beginPath();
var bgColor = ctx.createRadialGradient(400,100,0,400,70,50);
bgColor.addColorStop(0,"red");
bgColor.addColorStop(1,"green");
ctx.fillStyle = bgColor;
ctx.rect(350,50,100,100);
ctx.fill();
```

			
			
- 渐变圆心不在同一个位置
			
```
ctx.beginPath();
var bgColor = ctx.createRadialGradient(550,70,0,550,100,50);
bgColor.addColorStop(0,"red");
bgColor.addColorStop(1,"green");
ctx.fillStyle = bgColor;
ctx.rect(500,50,100,100);
ctx.fill();
```

			
- 小圆的圆心不在大圆的渐变范围之内
			
```
ctx.beginPath();
var bgColor = ctx.createRadialGradient(100,250,0,250,250,50);
bgColor.addColorStop(0,"red");
bgColor.addColorStop(1,"green");
ctx.fillStyle = bgColor;
ctx.rect(100,200,200,100);
ctx.fill();
```
- 带有光泽的球
```
ctx.beginPath();
var bgColor = ctx.createRadialGradient(150,450,5,200,500,100);
bgColor.addColorStop(0,"#fff");
bgColor.addColorStop(1,"#ccc");
ctx.fillStyle = bgColor;
ctx.shadowColor = "#3B4547";
ctx.shadowBlur = 5;
ctx.shadowOffsetX = 5;
ctx.shadowOffsetY = 5;
ctx.arc(200,500,100,0,Math.PI*2);
```



