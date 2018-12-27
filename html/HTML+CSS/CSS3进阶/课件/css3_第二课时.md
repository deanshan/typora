# css3进阶
## 第三节
### css3阴影
#### 文字阴影
语法：

**text-shadow:h-shadow v-shadow blur color;**
```
text-shadow:20px 40px 6px #ccc;
```

#### 多层文字阴影
许多时候一重阴影还不能达到我们想要的效果，这个时候我们需要用到多层阴影，需要满足以下条件：

1. 多个阴影用逗号分隔
2. 层级：边框>内阴影>背景图片>背景颜色>外阴影
3. 多个阴影：先写的阴影显示在前面
```
text-shadow: 2px 2px 0px white, 4px 4px 0px red;
```
#### 盒子阴影
语法：

**box-shadow: h-shadow v-shadow blur spread color inset;**
```
box-shadow:20px 40px 6px 10px #ccc;  //外阴影

box-shadow:20px 40px 6px 10px #ccc inset;  //内阴影
```
##### 层叠效果
```
#p1 {
	color: red;
	font-size: 100px;
    font-weight: bold;
	text-shadow: 2px 2px 0px white, 4px 4px 0px red;
}

```
##### 光晕效果
```
#p2 {
    color: white;
    font-size: 100px;
    text-shadow: 0 0 10px #fff, 
    0 0 20px #fff, 
    0 0 30px #fff,
    0 0 40px #ff00de, 
    0 0 70px #ff00de,
    0 0 80px #ff00de, 
    0 0 100px #ff00de,
    0 0 150px #ff00de;
}

```
##### 火焰文字
```
#p3 {
	text-shadow: 0 0 20px #fefcc9, 10px -10px 30px #feec85, -20px -20px 40px #ffae34, 20px -40px 50px #ec760c, -20px -60px 60px #cd4606, 0 -80px 70px #973716, 10px -90px 80px #451b0e;
	font-family: Verdana, Geneva, sans-serif;
   	font-size: 100px;
	font-weight: bold;
	color: white;
}

```
### 渐变
CSS3 渐变（gradients）可以让你在两个或多个指定的颜色之间显示平稳的过渡。
以前，你必须使用图像来实现这些效果。

但是，通过使用 CSS3 渐变（gradients），你可以减少下载的事件和宽带的使用。此外，渐变效果的元素在放大时看起来效果更好，因为渐变（gradient）是由浏览器生成的。

#### linearGradients  线性渐变
##### 语法
(需要添加浏览器前缀）-webkit-、-moz- 、-o-  IE9及以前的不支持


```
background: linear-gradient(direction, color-stop1, color-stop2, ...);
```

###### 从上到下的线性渐变：（如果多个参数则在中间插入颜色值即可）

```
#grad {
  background: -webkit-linear-gradient(red, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(red, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(red, blue); /* 标准的语法 */
}
```

###### 线性渐变 - 从左到右

```
#grad1 {
    height: 200px;
    background: -webkit-linear-gradient(left, red , blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, red , blue); /* 标准的语法（必须放在最后） */
}
```
###### 线性渐变 - 从左到右

```
#grad1 {
    height: 200px;
    background: -webkit-linear-gradient(left, red , blue); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, red, blue); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, red, blue); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, red , blue); /* 标准的语法（必须放在最后） */
}
```
###### 使用角度

```
#grad {
  background: -webkit-linear-gradient(180deg, red, blue); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(180deg, red, blue); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(180deg, red, blue); /* Firefox 3.6 - 15 */
  background: linear-gradient(180deg, red, blue); /* 标准的语法 */
}
```
###### 使用透明度（transparent）
代码略

###### 重复的线性渐变  repeating-linear-gradient

> （yellow 10%, green 20%） 前面一个参数的值一定要小于后面参数的值

```
#grad {
  background: -webkit-repeating-linear-gradient(red, yellow 10%, green 20%); /* Safari 5.1 - 6.0 */
  background: -o-repeating-linear-gradient(red, yellow 10%, green 20%);/* Opera 11.1 - 12.0 */
  background: -moz-repeating-linear-gradient(red, yellow 10%, green 20%);/* Firefox 3.6 - 15 */
  background: repeating-linear-gradient(red, yellow 10%, green 20%); /* 标准的语法 */
}
```
#### 径向渐变 radial-gradient

为了创建一个径向渐变，你也必须至少定义两种颜色结点。颜色结点即你想要呈现平稳过渡的颜色。同时，你也
可以指定渐变的中心、形状（圆形或椭圆形）、大小。默认情况下，渐变的中心是 center（表示在中心点），渐变的形状是 ellipse（表示椭圆形），渐变的大小是 farthest-corner（表示到最远的角落）。

###### 径向渐变 - 颜色结点均匀分布（默认情况下）

```
#grad {
  background: -webkit-radial-gradient(red, green, blue); /* Safari 5.1 - 6.0 */
  background: -o-radial-gradient(red, green, blue); /* Opera 11.6 - 12.0 */
  background: -moz-radial-gradient(red, green, blue); /* Firefox 3.6 - 15 */
  background: radial-gradient(red, green, blue); /* 标准的语法 */
}
```
###### 径向渐变 - 颜色结点不均匀分布

```
#grad {
  background: -webkit-radial-gradient(red 5%, green 15%, blue 60%); /* Safari 5.1 - 6.0 */
  background: -o-radial-gradient(red 5%, green 15%, blue 60%); /* Opera 11.6 - 12.0 */
  background: -moz-radial-gradient(red 5%, green 15%, blue 60%); /* Firefox 3.6 - 15 */
  background: radial-gradient(red 5%, green 15%, blue 60%); /* 标准的语法 */
}
```
###### 设置形状（circle 或 ellipse）

```
#grad {
  background: -webkit-radial-gradient(circle, red, yellow, green); /* Safari 5.1 - 6.0 */
  background: -o-radial-gradient(circle, red, yellow, green); /* Opera 11.6 - 12.0 */
  background: -moz-radial-gradient(circle, red, yellow, green); /* Firefox 3.6 - 15 */
  background: radial-gradient(circle, red, yellow, green); /* 标准的语法 */
}
```

**不同尺寸大小关键字的使用**
- closest-side：指定径向渐变的半径长度为从圆心到离圆心最近的边
- closest-corner：指定径向渐变的半径长度为从圆心到离圆心最近的角
- farthest-side：指定径向渐变的半径长度为从圆心到离圆心最远的边
- farthest-corner：指定径向渐变的半径长度为从圆心到离圆心最远的角
	

```
#grad1 {
  background: -webkit-radial-gradient(60% 55%, closest-side,blue,green,yellow,black); /* Safari 5.1 - 6.0 */
  background: -o-radial-gradient(60% 55%, closest-side,blue,green,yellow,black); /* Opera 11.6 - 12.0 */
  background: -moz-radial-gradient(60% 55%, closest-side,blue,green,yellow,black); /* Firefox 3.6 - 15 */
  background: radial-gradient(60% 55%, closest-side,blue,green,yellow,black); /* 标准的语法 */
}
```
###### 重复的径向渐变  

（yellow 10%, green 15%）第一个参数必须小于第二个参数


```
#grad {
  background: -webkit-repeating-radial-gradient(red, yellow 10%, green 15%);/* Safari 5.1 - 6.0 */
  background: -o-repeating-radial-gradient(red, yellow 10%, green 15%);/* Opera 11.6 - 12.0 */
  background: -moz-repeating-radial-gradient(red, yellow 10%, green 15%);/* Firefox 3.6 - 15 */
  background: repeating-radial-gradient(red, yellow 10%, green 15%);/* 标准的语法 */
}
```
#### 多列
通过 CSS3，您能够创建多个列来对文本进行布局 - 就像报纸那样！  

需要加上浏览器前缀，IE10以上支持
##### 属性

- column-count	指定元素应该被分割的列数。
- column-fill	指定如何填充列
- column-gap	指定列与列之间的间隙
- column-rule	所有 column-rule-* 属性的简写
- column-rule-color	指定两列间边框的颜色
- column-rule-style	指定两列间边框的样式
- column-rule-width	指定两列间边框的厚度
- column-span	指定元素要跨越多少列  （属性作用于子元素）
- column-width	指定列的宽度 （与column-count 不兼容）
- columns	设置 column-width 和 column-count 的简写

