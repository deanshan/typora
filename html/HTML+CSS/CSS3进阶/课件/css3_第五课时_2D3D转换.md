# 2D转换
### 平移 translate()
translate()方法，根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。

```
div{
    transform: translate(50px,100px);
    -ms-transform: translate(50px,100px); /* IE 9 */
    -webkit-transform: translate(50px,100px); /* Safari and Chrome */
} 
```
### 旋转 rotate()
rotate()方法，在一个给定度数顺时针旋转的元素。负值是允许的，这样是元素逆时针旋转。

```
div{
    transform: rotate(30deg);
    -ms-transform: rotate(30deg); /* IE 9 */
    -webkit-transform: rotate(30deg); /* Safari and Chrome */
}
```
### 缩放 scale()
scale()方法，该元素增加或减少的大小，取决于宽度（X轴）和高度（Y轴）的参数

```
div{
    -ms-transform:scale(2,3); /* IE 9 */
    -webkit-transform: scale(2,3); /* Safari */
    transform: scale(2,3); /* 标准语法 */
}
```
### skew() 斜切
**transform:skew(<angle> [,<angle>]);**

包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。

skewX(<angle>);表示只在X轴(水平方向)倾斜。

skewY(<angle>);表示只在Y轴(垂直方向)倾斜。

```
div{
    transform: skew(30deg,20deg);
    -ms-transform: skew(30deg,20deg); /* IE 9 */
    -webkit-transform: skew(30deg,20deg); /* Safari and Chrome */
}
```

### matrix() 方法  （略）
### transform-origin 属性

transform-Origin属性允许您更改转换元素的位置。

2D转换元素可以改变元素的X和Y轴。 3D转换元素，还可以更改元素的Z轴。

**transform-origin: x-axis y-axis z-axis;**

```
div{
    transform: rotate(45deg);
    transform-origin:20% 40%;
    -ms-transform: rotate(45deg); /* IE 9 */
    -ms-transform-origin:20% 40%; /* IE 9 */
    -webkit-transform: rotate(45deg); /* Safari and Chrome */
    -webkit-transform-origin:20% 40%; /* Safari and Chrome */
}
```

# 3D

如果使用3D效果  方法名需要加上3D,如：

- translate3d(x,y,z)	定义 3D 转化。
- translateX(x)	定义 3D 转化，仅使用用于 X 轴的值。
- translateY(y)	定义 3D 转化，仅使用用于 Y 轴的值。
- translateZ(z)	定义 3D 转化，仅使用用于 Z 轴的值。
- scale3d(x,y,z)	定义 3D 缩放转换。
- scaleX(x)	定义 3D 缩放转换，通过给定一个 X 轴的值。
- scaleY(y)	定义 3D 缩放转换，通过给定一个 Y 轴的值。
- scaleZ(z)	定义 3D 缩放转换，通过给定一个 Z 轴的值。
- rotate3d(x,y,z,angle)	定义 3D 旋转。
- rotateX(angle)	定义沿 X 轴的 3D 旋转。
- rotateY(angle)	定义沿 Y 轴的 3D 旋转。
- rotateZ(angle)	定义沿 Z 轴的 3D 旋转。
- perspective(n)	定义 3D 转换元素的透视视图。

#### 属性的使用
**transform-origin: x-axis y-axis z-axis;**	允许你改变被转换元素的位置。代码 同2D转换

**transform-style：flat|preserve-3d;**	规定被嵌套元素如何在 3D 空间中显示（子元素是否保留3d位置）。	

```
<div id="div1">
  <div id="div2">HELLO
  	<div id="div3">YELLOW</div>
  </div>
</div>
#div1{
    position: relative;
    height: 200px;
    width: 200px;
    margin: 100px;
    padding:10px;
    border: 1px solid black;
}
#div2{
    padding:50px; 
    position: absolute;
    border: 1px solid black;
    background-color: red;
    transform: rotateY(60deg);
    transform-style: preserve-3d;
    -webkit-transform: rotateY(60deg); /* Safari and Chrome */
    -webkit-transform-style: preserve-3d; /* Safari and Chrome */
}
#div3{
    padding:40px;
    position: absolute;
    border: 1px solid black;
    background-color: yellow;
    transform: rotateY(80deg);
    -webkit-transform: rotateY(-60deg); /* Safari and Chrome */
}
```

**perspective: number|none;**		规定 3D元素的透视效果(作用于父元素)。
	
```
#div1{
	position: relative;
	height: 150px;
	width: 150px;
	margin: 50px;
	padding:10px;
	border: 1px solid black;
	perspective:150;
	-webkit-perspective:150; /* Safari and Chrome */
}
#div2{
    padding:50px;
    position: absolute;
    border: 1px solid black;
    background-color: yellow;
    transform: rotateX(45deg);
    -webkit-transform: rotateX(45deg); /* Safari and Chrome */
}
```

**perspective-origin: x-axis y-axis;**	规定 3D 元素的底部位置。（作用于父元素，眼睛看元素的方向）

```
#div1{
	position: relative;
	height: 150px;
	width: 150px;
	margin: 50px;
	padding:10px;
	border: 1px solid black;
	perspective:150;
	perspective-origin: 10% 10%;
	-webkit-perspective:150; /* Safari and Chrome */
	-webkit-perspective-origin: 10% 10%; /* Safari and Chrome */
}
#div2{
	padding:50px;
	position: absolute;
	border: 1px solid black;
	background-color: red;
	transform: rotateX(45deg);
	-webkit-transform: rotateX(45deg); /* Safari and Chrome */
}
```

**backface-visibility：visible | hidden**	定义元素在不面对屏幕时是否可见。

```
-webkit-backface-visibility:hidden;
```


