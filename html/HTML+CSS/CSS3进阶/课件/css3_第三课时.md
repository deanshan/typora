# 媒体查询
### 屏幕设置

```
<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
```
**解释：**
- width=device-width   //应用程序的宽度和屏幕的宽度是一样的
- height=device-height  //应用程序的高度和屏幕的高是一样的
- initial-scale=1.0  		 //应用程序启动时候的缩放尺度（1.0表示不缩放）
- minimum-scale=1.0  	 //用户可以缩放到的最小尺度（1.0表示不缩放）
- maximum-scale=1.0   //用户可以放大到的最大尺度（1.0表示不缩放）
- user-scalable=no      //用户是否可以通过他的手势来缩放整个应用程序，使应用程序的尺度发生一个改变（yes/no）

### 关键字
only、not、and和or(用逗号表示)这四种逻辑中，==只有and比较常用==。

### 示例代码
**- 内部媒体查询样式（适应不同终端效果）**          
```
@media only screen and (max-width:1024px) {css样式代码}
```
**-引用媒体查询样式代码**
```
<link rel="stylesheet" media="screen and (max-width:1024px)" href="mediaM.css" />
```
### 优缺点
**优点：** 能够快速的适应多种终端不同的屏幕，用户视觉效果较好，体验效果好。

**缺点：** 代码冗余较多，加载速度较慢。


# 用户界面

**Resize**   是否调整元素的大小

**Box-sizing**  属性允许您以确切的方式定义适应某个区域的具体内容。

**Outline(-offset)**    轮廓

# flex 布局
### 容器属性

**flex-direction** ： 属性决定主轴的方向（即项目的排列方向）
- row（默认值）：主轴为水平方向，起点在左端。
- row-reverse：主轴为水平 |方向，起点在右端。
- column：主轴为垂直方向，起点在上沿。
- column-reverse：主轴为垂直方向，起点在下沿。  

**flex-wrap：** 属性定义，如果一条轴线排不下，如何换行
- nowrap（默认）：不换行。
- wrap：换行，第一行在上方。
- wrap-reverse：换行，第一行在下方。

**flex-flow：**
属性是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap。

- 参考上面两属性

**justify-content:**
属性定义了项目在主轴上的对齐方式。

- flex-start（默认值）：左对齐
- flex-end：右对齐
- center： 居中
- space-between：两端对齐，项目之间的间隔都相等。
- space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

**align-items:** 属性定义项目在交叉轴上如何对齐。
- flex-start：交叉轴的起点对齐。
- flex-end：交叉轴的终点对齐。
- center：交叉轴的中点对齐。
- baseline: 项目的第一行文字的基线对齐。
- stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。

**align-content:**
属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。
- flex-start：与交叉轴的起点对齐。
- flex-end：与交叉轴的终点对齐。
- center：与交叉轴的中点对齐。
- space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。
- space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- stretch（默认值）：轴线占满整个交叉轴。


### 项目属性
**Order**	属性定义项目的排列顺序。数值越小，排列越靠前。默认为0。

**flex-grow** 	属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。

**flex-shrink**	属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。

**flex-basis**	属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。

**flex**  	属性是flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto。后两个属性可
选。

**align-self** 	属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。
auto | flex-start | flex-end | center | baseline | stretch

### 参考地址
http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html?^%$


