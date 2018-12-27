#canvas（三）
## 图片的处理
#### drawImage  将图片绘制到画布上
**drawImage(img,x,y)：** img为图片地址，x和y是图片起始位置
**drawImage(img,x,y,w,h)：** 缩放  w和h设置图片的宽高
**drawImage(img,sx,sy,sw,sh,dx,dy,dw,dh)：** 切片 sx~sh设置源图片的位置和大小，dx~dh设置切片的位置和大小
```
var img = new Image();
img.src = "resource/pic2.jpg";

var  img1 = new Image();
img1.src = "resource/frame.jpg";

img1.onload = function(){
	//绘制图片
	ctx.drawImage(img,100,100);

	//绘制图片 并设置大小     会让图片变形
    //	ctx.drawImage(img,100,100,350,100);
	
	//img 表示图片的地址
	//前四位数字  表示从图片的80,40，这个位置开始截取，截取的宽高为80,20
	//后四位数字 表示将截取的部分放到位置为：400,100，设置的宽高为：160,50
	ctx.drawImage(img,80,40,80,25,400,100,160,50);
	
	//多个图片的联合使用
	ctx.drawImage(img1,100,300);
	ctx.drawImage(img,127,336,210,150);
}
```

## 背景图片
**createPattern(img,[repeat|repeat-x|repeat-y|no-repeat]):** 在指定的方向内重复指定的元素
```
//创建一个图片对象
var  img = new Image();
img.src = 'resource/Canvas_earth.png';

//图片加载完成绘制图形
img.onload = function(){
	//img   图片的地址 
	//设置背景图片是否重复
	var bgImg = ctx.createPattern(img,"repeat");
	ctx.fillStyle = bgImg;
	ctx.rect(100,100,200,100);
	ctx.fill();
}
```
## 图形的组合
**globalCompositeOperation** 可以对多个图形相互重叠的地方进行对应操作(如清除重叠)

对应的值参考

http://www.w3school.com.cn/tiy/t.asp?f=html5_canvas_globalcompop_all

```
//先画的为目标图形   
ctx.fillStyle="chocolate"
ctx.fillRect(100,100,200,200);

//设置两个图形交叉的部分  
ctx.globalCompositeOperation = "xor"
//后画的为源图形
ctx.beginPath();
ctx.fillStyle = "cadetblue"
ctx.arc(300,300,100,0,Math.PI*2);
ctx.fill()
```

## 裁切
clip:创建一个新的裁切路径。
```
//显示的部分
ctx.beginPath();
ctx.strokeStyle = "#0098E3"
ctx.rect(200,200,300,200);
ctx.stroke();

//裁切掉显示部分以外的图形
ctx.clip();

ctx.beginPath();
ctx.fillStyle = "coral"
ctx.strokeStyle = "#0098E3"
ctx.rect(100,150,200,100);
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(500,200,50,0,Math.PI*2);
ctx.fill();

var img = new Image();
img.src = "resource/pic2.jpg";
img.onload = function (){
	ctx.drawImage(img,150,300);
}
```
## 保存和恢复
save 和 restore 方法是用来保存和恢复 canvas 状态的，都没有参数。

Canvas 的状态就是当前画面应用的所有样式和变形的一个快照。

## 变换
> 注意，这里的变换是指画布进行变换，而非我们图形进行了变换，如ctx.translate(100,200)并非图形平移了100,200，而是整个画布平移。
#### 平移
我们可以让绘制出来的元素进行平移。
```
ctx.translate(100,200)
```

#### 旋转
旋转的方法使用的弧度单位，在实际讲解过程中，可以转化为度，即(Math.Pi/180)为1度。

```
ctx.rotate(Math.PI);
```
> 旋转的坐标点是（0，0）的图形沿中心旋转那么你得先平移到你旋转的坐标，在旋转（rotate()），然后在平移回去，就会得到你想要的效果。

#### 缩放
缩放是画布的缩放，他的参数是0-1之间，表示缩小，1以上表示放大，如果参数放大或者缩小表示的是画布的放大或者缩小。
```
ctx.scale(0.5,2);
```
