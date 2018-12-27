结构、表现和行为分离（谨记）

# jQuery简单了解

## jQuery的简单介绍

+ jQuery是通过原生JS所封装的JS库，来提高开发人员的开发效率
+ 通过jQuery可以方便处理HTML、事件、动画等等。。。
+ 最大的好处：jQuery兼容很多浏览器，不用花太多时间考虑浏览器兼容问题

## jQuery的基本概念

+ 版本区别：
  + 1.x版本兼容性最好

  + 2.x版本不兼容IE6~IE8且文件比1.x版本小些

  + 3.x版本不兼容IE6~IE8，更新了些API，加入了些性能优化的东西

+ CDN(content delivery network)
  + 好处：节约服务器的带宽和资源，提高下载速度
  +  国内的CDN服务：BootCDN、360、百度静态资源库。。。

+ jQuery的写法和使用方式
  +  $.xxx：主要是调用jQuery自有的一些方法和属性
  + $()：主要是调用jQuery本身的一些选择

# jQuery选择器

## 基本选择器

可以多个选择器匹配到的元素合并一起

+ ID选择器          ：$("#id")

+ 类选择器          ：$(".class")

+  元素选择器        ：$("element")

+ 后代选择器        ：$("E F")

+ 子元素选择器      ：$("E>F")

+ 相邻兄弟选择器    ：$("E+F")：匹配紧接E元素后面的第一个F元素（必须是相邻）

+ 通用兄弟元素选择器：$("E~F")：匹配E元素后面所有的F元素（只匹配同级元素）

## 属性选择器

+ E[attr]           ：只匹配属性名

+ E[attr = "value"] ：匹配此属性名且属性值为value

+ E[attr *= "value"]：匹配此属性名且属性值为value（此value可以不完整属性值）

+ E[attr ^= "value"]：匹配此属性名且属性值以value开头的元素

+ E[attr $= "value"]：匹配此属性名且属性值以value结尾的元素

+ E[attr ~= "value"]，E[attr != "value"],E[attr |= "value"]：使用较少

​        

## 结构化伪类选择器(子元素筛选器）

+ nth-child和nth-of-type的区别：
  + nth-child(n)  ：选择n个元素(n的值与所对应元素所在的有效位置相对应才有效,受其他元素影响）
  +  nth-of-type(n)：选择n个元素(n的值会直接选择所对应元素的位置，不受其他元素影响)

+ :first-child      --->所匹配元素的位置必须是其元素的父元素下的第一个元素，否则匹配不到

+ :last-child       --->所匹配元素的位置必须是其元素的父元素下的最后一个元素，否则匹配不到

+ ## :first-of-type    --->匹配type的第一个元素（不受其元素所在位置的影响）

+ :last-of-type     --->匹配type的最后一个元素（不受其元素所在位置的影响）

+ :nth-child(n)     --->所匹配元素的位置必须是其元素的父元素下的第n个元素，否则匹配不到（n可为具体数字(n>0)，也可为表达式）

+ :nth-last-child(n)--->所匹配元素的位置必须是其元素的父元素下的第n个元素且从最后一个元素向前匹配，否则匹配不到（n可为具体数字(n>0)，也可为表达式）

+ :nth-of-type(n)   --->匹配type的第n个元素（n可为具体数字，也可为表达式）

+ :nth-last-of-type(n)--->匹配type的第n个元素，但从最后一个元素开始匹配（n可为具体数字，也可为表达式）

+ :only-child--->匹配某个元素（前提是此元素必须是父元素中唯一的子元素，如果包含其它元素，则无法匹配到）

+ :only-of-type--->匹配type某个元素（前提是此元素必须是父元素中唯一的子元素，不受其它元素影响，则无法匹配到）

## 筛选器/过滤器

##  位置筛选器：（注：这里匹配元素的索引值从0开始）

+ :first--->匹配第一个元素

+ :last--->匹配最后一个元素

+ :even--->匹配所有索引值为偶数的元素（这里的索引值从0开始计数）

+ :odd--->匹配所有索引值为奇数的元素（这里的索引值从0开始计数）

+ :eq(n)--->匹配第n元素（这里的n为具体数值且n>=0)

+ :gt(n)--->匹配大于n的所有元素（这里的n为具体数值且n>=0)

+ :lt(n)--->匹配小于n的所有元素（这里的n为具体数值且n>=0)

## 表单筛选器

+ 表单类型---> :input，:button，:checkbox，:file，:image，:radio，:password，submit，reset

+ 表单属性---> :checked，:disabled，:enabled，:focus，selected

## 内容筛选器：

+ :empty--->匹配所有不包含子元素或者文本的空元素

+ :contains(text)--->匹配包含指定文本的元素

+ :has(selector)--->匹配含有选择器所匹配元素的元素

+ :parent--->匹配含有子元素或者文本的元素

## 其它筛选器：

+ :lang(language)--->选择指定语言的所有元素

+ :not(selector)--->匹配所有不包含选择器所匹配元素的元素

+ :root--->选择该文档的根元素，在HMTL中，根元素永远是&lt;html>

+ :target--->选择由文档URI的格式化识别码表示的目标元素

  如果文档的URI包含一个格式化的标识符，或hash（哈希）， 然后:target选择器将匹配ID和标识符相匹配的元素。

  例如，给定的URI http://example.com/#foo， $( "p:target" )，将选择&lt;p id="foo">元素。

+ :hidden--->匹配所有不可见元素(如display:none)，或者type为hidden的元素

+ :visiable--->匹配所有的可见元素(包括)

+ :header--->匹配如 h1, h2, h3之类的标题元素

+ :animated--->匹配所有正在执行动画效果的元素

# jQuery的操作

## DOM对象<->jQuery对象

+ 检测DOM Object：obj.nodeType

+ 检测jQuery Object：obj.jquery（注此jquery为小写字母）

+ DOM对象转为jQuery对象：$(DOMObject)

+ jQuery对象转为DOM对象：$(xxx).get(0)或者$(xxx)[0]

## 创建元素

只是创建在内存中，并没有添加到html里，选择器是无法匹配到的，创建方式如下两种

+ var a = $('&lt;a>',{属性名：属性值,属性名：属性值,属性名：属性值...});

+ var a = $('&lt;a>百度&lt;/a>').attr({属性名：属性值,属性名：属性值,属性名：属性值...});

## 检查元素数量

$("xxx").length

## 获取元素

+ [index]：例$()[index]

+ get(index)：不传参，则返回一个DOM元素组成的数组，传负数，则从后往前获取，如果越界，则返回undefined

+ eq(index)：返回jQuery对象，不传参，则什么都不返回，传参同get(index)一样

+ 通过方法获取元素（优先选择）：eg：eq(index),first(不传参),last(不传参)...

+ 通过选择器获取元素（没有使用方法好）

## 查找jQuery对象的方法

+ children([selector])：只查找并过滤子元素

+ closest(selector)：closest会首先检查当前元素是否匹配，如果匹配则直接返回元素本身。如果不匹配则向上查找父元素，一层一层往上，直到找到匹配选择器的元素。

  如果什么都没找到则返回一个空的jQuery对象。closest对于处理事件委托非常有用。

  closest和parents的主要区别是：
  + 前者从当前元素开始匹配寻找，后者从父元素开始匹配寻找；
  + 前者逐级向上查找，直到发现匹配的元素后就停止了，后者一直向上查找直到根元素，然后把这些元素放进一个临时集       合中，再用给定的选择器表达式去过滤；
  + 前者返回0或1个元素，后者可能包含0个，1个，或者多个元素。

+ parent([selector])：查找并过滤唯一的父元素

+ parents([selector])：查找并过滤所有的祖先元素

+ parentsUtil([selector])：查找并过滤此元素的所有祖先元素，直到遇到匹配的元素（不包含）为止

+ contents()：查找此元素的所有子元素（包括文本节点和注释节点）

+ find(selector)：查找并过滤此元素下的所有符合的后代元素（相当于div p）

+ next([selector])：查找此元素紧邻的后面的同辈元素

+ nextAll([selector])：查找此元素后面所有的同辈元素

+ nextUtil([selector])：查找此元素之后所有的同辈元素，直到遇到匹配的那个元素为止。

+ prev([selector])：查找此元素紧邻的前面的同辈元素

+ prevAll([selector])：查找此元素前面所有的同辈元素

+ prevUtil([selector])：查找此元素之前所有的同辈元素，直到遇到匹配的那个元素为止。

+ siblings([selector])：查找此元素的所有同辈元素

## 添加元素

add(selector)：eg：('div').add('#p1').add('#p2') === $('div','#p1','#p2')

## 过滤元素

+ not(selector|fn)：从匹配的元素集合中移除指定的元素

+ filter(selector|fn)：筛选出与指定表达式匹配的元素集合

+ has(selector)：筛选包含特定后代的元素，去掉那些不含有指定后代的元素。

## 获取子集

slice(start[,end])：选取一个匹配的子集,如果end被省略，这个元素之后的所有元素将包含在结果中

## 转换元素

map(callback)：通过一个函数匹配当前集合中的每个元素,产生一个包含新的jQuery对象。 

## 遍历元素

each(callback)：遍历一个jQuery对象，为每个匹配元素执行一个函数。 

## 其它方法

+ is(selector)：根据选择器,DOM元素,jQuery对象和函数来检测匹配元素集合，若至少有一个元素符合表达式就返回true。

+ end()：回到最近的一个"破坏性"操作之前。即，将匹配的元素列表变为前一次的状态。

+ addBack([selector])：新的元素集合推入到堆栈中。 如果还需要包含先前的元素集合.addBack() 可以

# jQuery对象的特性和属性区别及数据的操作

特性：attributes,属性：properties

## 特性和属性区别

+ 值不相同，特性值永远是字符串，属性值可以是字符串、布尔值、Number、对象。。。

+ 同步的情况：如果attributes是本来在DOM对象中就存在的，attributes和properties的值会同步

+ 不同步的情况1：如果attributes是本来在DOM对象中就存在的，但是类型为Boolean，那么attributes和properties的值不会          同步（如checkde)

+ 不同步的情况2：如果attributes不是DOM对象內建的属性，attributes和properties的值不会同步

+ 特殊情况1：值不同，但是发生同步的变化（如src、url、href...）

+ 特殊情况2：属性和特性的名称不一样（如属性为className,特性为class）

​        总结：

+ 特性作用于HTML中改变，属性作用于js中改变。

+ 绝大部分时候都使用特性来操作，只有特殊的情况下使用属性，比如checked

+ 特性和属性之分是相对于HTML标签来的，由于以前的浏览器是没有属性和特性区分的，两者取出的值也就是一样的。

  但是随着发展，出现了一些特殊的值，例如一些布尔值属性，只要写上这个属性名就可以起作用，不论值是多少。这也就是jquery中封装了attr，和prop两个方法的原因

## 特性的操作方法

+ 获取特性的值：attr(name)（这里获取的是第一个元素，特性的名称不区分大小写）

+ 设置特性的值：attr(name,value) attr(attributes)：设置特性值会对所有元素设置，最好通过函数来判断（如：div.attr('title',function(index,previousValue){return 新值;})

+ 删除特性：removeAttr(name)，一次可删除多个，中间加空格即可。

## 属性的操作方法

+ 获取属性的值：prop(name)（属性的名称区分大小写）

+ 设置属性的值：prop(name,value) prop(properties)

+ 删除特性：removeProp(name)因为使用的是js原生的方法，所以一次只能删除一个属性

## 在元素中存取数据

+ 获取数据的值：data([name])

+ 设置数据的值：data(name,value) data(object)

+ 删除数据：removeData([name])

+ 判断是否有数据：jQuery.hasData(element)

# jQuery操作元素的方法

## 添加或者修改class

+ addClass(names|fn(index,class))：添加类，对所有匹配的元素可以一次添加多个用空格隔开的样式类名

+ removeClass(names|fn(index.class))：删除类，移除集合中每个匹配元素一个，多个或全部样式。 用空格隔开

+ hasClass(names)：确定所匹配元素是否有给定的（样式）类（返回值：Boolean ）

+ toggleClass([names ][ , state])：为匹配的元素添加或删除一个或多个类,有则删除，无则添加，

  state返回一个布尔值（不止是真值/假值），用于判断是否应该被添加或移除。eg:$('div').toggleClass(class,x%3==0)当取余为0时添加删除类toggleClass(function(index,previousClass,state)[,state])

## 元素的样式和尺寸获取和设置

+ css(names,value|fn)：获取匹配元素集合中的第一个元素的样式属性值，也可设置多个样式或通过函数设置

+ width(不传参|value|fn(index,previousWidth))：
  + width()：不传参返回一个没有单位的数值，且是匹配的元素集合中获取第一个元素的当前计算宽度值。
  + width(value|fn)：设置宽度值或者通过函数设置

+ height(同上)：同上

+ innerWidth(同上）、innerHeight(同上)：包括padding，不包括border

+ outerWidth(布尔值)、outerHeight(布尔值)：包括padding,border,margin，返回真，包括margin值，反之，不包括

## 位置和滚动

+ offset(不传参|coordinates|fn(index,coords))：获取或设置元素的坐标，坐标相对于document。
  + offset()：不传参则获取的第一个元素的当前坐标，坐标相对于document。
  +  offset(coordinates|fn(索引值，当前坐标))：设置匹配的元素集合中每一个元素的坐标， 坐标相对于document。

+ position()：获取匹配元素中第一个元素的当前坐标，相对于offset parent的坐标

+ scrollLeft(value)、scrollTop(value)：获取或设置匹配的元素集合中第一个元素的当前滚动条的位置。 

## 元素内容或值的获取和设置

+ html(不传参|string|fn(index,oldhtml))：
  + html()：不传参则获取集合中第一个匹配元素的HTML内容 
  +  html(str|fn)：设置每个匹配元素的HTML，元素中的任何内容会完全被新的内容取代

+ text(不传参|text|fn(index,text))：
  + text()：得到匹配元素集合中每个元素的合并文本，包括他们的后代的文本 
  +  text(text|fn)：设置匹配元素集合中每个元素的文本内容为指定的文本内容。

+ val(不传参|value|fn):(注：表单获取值需要结合表单属性，且值为数组对象)
  + val()：获取匹配的元素集合中第一个元素的当前值
  +  val(value|fn)：设置匹配的元素集合中每个元素的值。

## 移动或插入元素

+ append(content|fn(index,html))：在每个匹配元素里面的末尾处插入参数内容（内部插入）

+ prepend(content|fn(index,html))：在每个匹配元素里面的前面插入参数内容（内部插入）

+ before(content|fn(index,html))：在匹配元素的前面插入内容（外部插入）

+ after(content|fn(index,html))：在匹配元素的后面插入内容（外部插入）

+ appendTo(target)：将新的元素插入到目标元素的后面（内部插入）

+ prependTo(target)：将新的元素插入到目标元素的前面（内部插入）。 

+ insertBefor(target)：在目标元素前面插入集合中每个匹配的元素(插入的元素作为目标元素的兄弟元素)。

+ insertAfter(target) ：在目标元素后面插入集合中每个匹配的元素(插入的元素作为目标元素的兄弟元素)。 

## 包裹元素

+ wrap(wrapElement|fn(index))：在集合中匹配的每个元素周围包裹一个HTML结构

+ wrapAll(wrapElement|fn(index))：：在集合中所有匹配元素的外面包裹一个HTML结构

+ wrapInner(wrapElement|fn(index))：在匹配元素里的内容外包一层结构

+ unwrap()：将匹配元素集合的父级元素删除，保留自身（和兄弟元素，如果存在）在原来的位置

## 移除、复制、替换

+ remove([selector])：将匹配元素集合从DOM中删除（同时删除移除元素上的事件及 jQuery 数据）

+ detach([selector])：从DOM中去掉所有匹配的元素（保存移除元素上的事件及 jQuery 数据）

+ empty()：从DOM中移除集合中匹配元素的所有子节点

+ clone()：

+ replaceWidth(content|fn)：会删除与节点相关联的所有数据和事件处理程序

+ replaceAll(target)：用集合的匹配元素替换每个目标元素,会删除与节点相关联的所有数据和事件处理程序

# 事件

## jQuery事件模型

+ 提供了统一的事件处理方法

+ 允许添加多个事件处理函数

+ 使用标准的事件名称（不带on）

+ 事件实例作为事件处理函数的第一个参数

+ 标准化事件实例最常用的属性

+ 提供了统一的事件取消和阻止默认行为的方法

## 事件处理

+ on(eve,[sel],[data],fn)：添加事件处理（详见API）

+ one(eve,[sel],[data],fn)：一次性事件处理

+ off(eve,[sel],[data],fn)：移除事件处理

## 统一方法和属性

+ 阻止冒泡：stopPropagation()

+ 阻止默认行为：preventDefault()

+ 阻止冒泡和默认行为：return false

## jQuery支持的事件类型（详见API）

+ blur：失去光标change：值改变clickdblclickerror
+  focus：获取光标focusinfocusout

+ keydownkeypresskeyuploadunload

# jquery获取窗口宽高

+ $(document).height()：整个网页的文档高度

+ $(window).height()：浏览器可视窗口的高度

+ $(window).scrollTop()：浏览器可视窗口顶端距离网页顶端的高度（垂直偏移）

+ $(document.body).height();//浏览器当前窗口文档body的高度

+ $(document.body).outerHeight(true);//浏览器当前窗口文档body的总高度 包括border padding margin

+ $(window).width(); //浏览器当前窗口可视区域宽度

+ $(document).width();//浏览器当前窗口文档对象宽度

+ $(document.body).width();//浏览器当前窗口文档body的高度

+ $(document.body).outerWidth(true);//浏览器当前窗口文档body的总宽度 包括border padding margin

  用一句话理解就是：当网页滚动条拉到最低端时，`$ (document).height() == $(window).height() + $(window).scrollTop()`
  当网页高度不足浏览器窗口时`$(document).height()`返回的是`$(window).height()`。
  不建议使用`$("html").height()`、`$("body").height()`这样的高度。
  原因：
  `$("body").height()`：body可能会有边框，获取的高度会比`$(document).height()`小；
  `$("html").height()`：在不同的浏览器上获取的高度的意义会有差异，说白了就是浏览器不兼容。
  $(window).height()值有问题，返回的不是浏览器窗口的高度？原因：网页没有加上<!DOCTYPE>声明。