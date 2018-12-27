# Bootstrap

# Bootstrap的优点

+ 非常好的响应式布局支持

+ 丰富的组件

+ 对LESS和SASS的支持

+ jQuery插件的支持

+ 全新自定义选项

+ 改进工具提示

+ 支持HTML5、CSS3

------

# Bootstrap组织架构思想包含的8大类型

+ 基础：统一的字号、背景、内外边距。。。

+ 颜色：常用5种：active（鼠标悬停时颜色）、信息提示（info）、警告（warning）、成功（success）、危险（danger）。。。

+ 尺寸：常用4种：xs、sm、md、lg

+ 状态：active、disable、hover、link...

+ 特殊元素：（nav标签/按钮）

+ 并列：一个组件里放多个子元素（ul li）

+ 嵌套子元素：（下拉菜单、分页）

+ 动画：（如进度条）使用不多

# Bootstrap全局CSS样式

## 栅格系统

（注意：BootStrap内置响应式、移动设备优先的流式栅格系统）

### viewport的参数

<meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>

+ content：对使用的设备的约束

+ width=device-width：宽度等于设备的宽度，其单位是缩放100%的CSS像素

+ initial-scale=1：初始化比例，100%，即页面开始缩放的程度

+ maximum-scale=1，minimum-scale=1：最大缩放和最小缩放，即允许放大和缩小多少倍

+ user-scalable=no：是否允许用户调整页面（yes：用户可以改变，no：用户不可以改变（且initial-scale=1.0,minimum-scale=1.0是无效的）

------

### 栅格系统使用规则及栅格参数

（a1）、.container：用于*固定宽度*并支持响应式布局的容器，*这两种容器类不能互相嵌套*

（a2）、.container-fluid：用于*100%宽度*，占据全部视口（viewport）的容器

（b）、.row：行（默认一行12列col)，它的子元素必须是列，必须把行放在此类名为container/container-fluid中

（c）、.col-：列，将内容放在列中（每列可内嵌一个row（包含列））

（d）、.col-xs-数字：超小屏幕 手机 (<768px)

（e）、.col-sm-数字：小屏幕 平板 (≥768px)

（f）、.col-md-数字：中等屏幕 桌面显示器 (≥992px)

（g）、.col-lg-数字：大屏幕 大桌面显示器 (≥1200px)

（h）、自定义参数：min-width，max-width（具体写法见API）（eg：@media screen and(min-width:xxx){})

------

### 栅格固定样式

（a）、col-xx-push-数字：向右移动几个单元格

（b）、col-xx-pull-数字：向左移动几个单元格

（c）、col-xx-offset-数字：偏移几列（相当于margin-left）

## 其它CSS样式

#### 1、基础排版样式

（a）、浮动方式：.pull-left/right

（b）、文本对齐方式：.text-left/right/center，text-nowrap（不换行）

（c）、字母大小写：.text-uppercase（全大写)，.text-lowercase（全小写），.text-capitalize（首字母小写）

（d）、ul，ol样式：.list-unstyled（取消默认样式），.list-inline（横向排列）

（e）、字体大小：.h1~.h6，.small（百分比大小，相对于父元素，多用于副标题）

（f）、段落修饰：.lead

（g）、描述列表：.dl-horizontal（使列表内容水平排列）

------

#### 2、表格

（a）、.table：少量的内补（padding）和水平方向的分隔线

（b）、.talbe-striped：给每一行增加斑马条纹样式

（c）、.table-bordered：为表格和其中的每个单元格增加边框

（d）、.table-hover：每一行对鼠标悬停状态作出响应

（e）、.table-condensed：让表格更加紧凑，单元格中的内补（padding）均会减半

------

#### 3、表单

form-group和input-group区别：http://blog.csdn.net/qq_15267341/article/details/54016811

（a）、form-control：将label元素和input、textarea、select元素包裹在.form-group中可以获得最好的排列

（b）、form-horizontal：给表单添加form-horizontal类，配合栅格类，可以将label标签和控件组水平并排布局。这样将改变form-group	的行为，使其表现为栅格系统中的行row，因此就无需再额外添加row了

（c）、校验状态：has-success,has-warnign,has-error,has-feedback（配合图标使用）

（d）、校验状态图标：glyphicon,glyphicon-ok,glyphicon-warning-sign，glyphicon-remove

------

#### 4、按钮（为 a、button 或 input 元素添加按钮类）

（a）、虽然按钮类可以应用到 a 和 button 元素上，但是，导航和导航条组件只支持 button 元素

（b）、强烈建议尽可能使用 button 元素来获得在各个浏览器上获得相匹配的绘制效果

（c）、按钮样式：btn、btn-default/primary/success/info/warning/danger/link(链接)

（d）、按钮大小：btn-lg/xs/sm/md：

（e）、.btn-block：可使按钮充满整个父元素并变为块级元素

------

#### 5、图片

（）、.img-responsive：可以让图片支持响应式布局，让图片居中使用.center-block，不要用.text-center

（a）、.img-rounded：圆角

（b）、.img-circle：圆形

（c）、.img-thumbnail：图片边框

------

#### 6、辅助类

（a）、关闭按钮样式：.close，可以让模态框和警告框消失

（b）、三角符号：.caret

（c）、情景文本颜色：.text-muted/primary/success/info/danger/warning

（d）、情景背景色：bg-primary/success/info/danger/warning

（e）、浮动：pull-left/right，不能用于导航条组件中（需用.navbar-left/right）

（f）、让内容块居中：.center-block

（g）、清除浮动：.clearfix

（h）、显示或隐藏内容：.show/.hidden/.sr-only

（i）、屏幕阅读器：.sr-only 类可以对屏幕阅读器以外的设备隐藏内容

------

# 组件

### 通用组件属性和类

1、role：role属性值是字符串，主要是告诉辅助设备（如屏幕阅读器）这个元素是作用

2、aria-label：属性值为字符串，主要是说明其元素的作用

3、aria-hidden="true"：用于屏幕识读设备（如glyphicon图标）

4、sr-only：sr-only类有隐藏样式效果，通过添加.sr-only类所写的文本可以让辅助设备知道这条提示所要表达的意思

5、.disblay：禁用类，对任何导航组件（标签页、胶囊式标签页），都可添加.disabled类，从而实现链接为灰色且没有鼠标悬停效果 （注：这个类只改变 a标签 的外观，不改变功能。需要自己写 JavaScript 禁用这里的链接）

------

### 一、Glyphicons 字体图标

（a）、需要一个基类：.glyphicon

（b）、为了设置正确的内补（padding），必须在图标和文本之间添加一个空格

（c）、不要和其他组件混合使用

（d）、只对内容为空的元素起作用

（e）、图标的可访问性：为避免屏幕识读设备抓取非故意的和可能产生混淆的输出内容（尤其当图标作为装饰用途时），需要为这些图标	设置aria-hidden="true" 属性。

（f）、如果所创建的组件（如：button标签内只包含一个图标），需要用内容来说明其意义，方便用户了解其作用，所以可以为控件添加	aria-label="" 属性。

------

### 二、下拉菜单

（a）、必须用.dropdown或.dropup容器类把整个下拉菜单内容包裹起来

（b）、显示在导航的菜单：.dropdown-toggle和data-toggle="dropdown"属性（值必需和包裹的容器类一样）

（c）、隐藏的下拉菜单：.dropdown-menu

（d）、隐藏的下拉菜单的标题：.dropdown-header

（e）、下拉菜单对齐：.dropdown-menu-left/right

（f）、下拉菜单分割线：.divider（role="separator")

------

### 三、按钮组（button和a)

（a）、.btn-group：可把一组按钮放在同一行，同时添加role="group"和aria-label两个属性

（b）、.btn-toolbar：role="toolbar"，按钮工具栏，将多个按钮组组合在一起

（c）、.btn-group-lg/md/sm/xs：按钮大小，添加在.btn-group可作用于一组按钮

（d）、.btn-group-justified：两端对齐排列的按钮组，此类使按钮组的长度撑满父元素的宽度

------

### 四、输入框组

（a）、在.input-group里的元素赋予.input-group-addon或.input-group-btn类，可以给.form-control的前面或后面添加额外的元素

（b）、赋有.input-group-addon的元素的子节点可以是文本，也可以是元素（如单/多选框等），如果子元素是按钮，则需要使用 .input-group-btn来包裹按钮元素

（c）、只支持文本输入框input元素，不兼容select元素和textarea元素

（d）、工具提示（tooltip）和弹出框（popover）需要设置container: 'body' 参数

（e）、不要将表单组或栅格列（column）类直接和输入框组混合使用。而是将输入框组嵌套到表单组或栅格相关元素的内部

（f）、不支持在输入框的单独一侧添加多个额外元素（.input-group-addon 或 .input-group-btn）

（g）、.input-group-lg/md/sm/xs：按钮大小，添加在.input-group可作用于一组按钮

------

### 五、导航

（a）、BS所有导航组件都依赖一个基类.nav类，状态类也是共用的

（b）、标签页：.nav-tabs

（c）、胶囊式标签页：.nav-pills，.nav-stacked（添加此类可使导航垂直排列）

（d）、两端对齐的标签页：.nav-justified

（e）、路径导航：.breadcrumb，路径间的分隔符已经自动通过 CSS 的 :before 和 content 属性添加了

------

### 六、导航条

（a）、考虑到导航条的可访问性，必须使用nav元素，如果使用div元素的话，必须为导航条设置 role="navigation" 属性

（b）、由nav标签包裹（需添加.navbar类，.navbar-default/...)

（c）、.navbar-header：导航条里的主菜单

（d）、响应式导航折叠样式：.navbar-toggle(隐藏菜单样式)、data-toggle="collapse"（触发事件：折叠）、data-target="#id"(触发事件的目标)、icon-bar(隐藏菜单条样式)、navbar-brand（主菜单样式）

（e）、表单样式：导航条内的表单在.navbar-form、.navbar-left包裹下，有很好的样式

（f）、按钮样式：.navbar-btn

（g）、文本样式：把文本包裹在 .navbar-text中时，为了有正确的行距和颜色，通常使用 p 标签

（h）、链接样式：.navbar-link

（i）、固定在顶部/底部：添加.navbar-fixed-top/bottom类可以让导航条固定在顶部或底部，可以包含一个.containe/.container-fluid容器，让导航条居中，并在两侧添加内补（需要给body{padding-top/bottom:xx}）

（j）、静止在顶部：通过添加 .navbar-static-top 类即可创建一个与页面等宽度的导航条，它会随着页面向下滚动而消失	（与 .navbar-fixed-* 类不同的是，你不用给 body 添加任何内补（padding））

（k）、反色的导航条：通过添加 .navbar-inverse 类可以改变导航条的外观

------

### 七、分页、标签、徽章、缩略图、列表组、面版

（1）、分页默认样式：.pagination

（1）、分页的翻页效果：.pager（默认居中），若两端对齐需添加（.previous:左对齐，.next:右对齐）

（2）、标签的样式：基类 .label label-default/primary/success/info/danger/warning

（3）、徽章：.badge，可以很醒目的展示新的或未读的信息条目50

（4）、缩略图：.thumbnail，Boostrap缩略图的默认设计仅需最少的标签就能展示带链接的图片（可以添加标题、段落。。。）

（5）、列表组：.list-group，用此类包裹所有列表项

（5）、列表组：.list-group-item，添加给每一个列表项（样式：.list-group-item-default/...）

（6）、面版：.panel，用此类包裹内容（样式：.panel-default/...）

（6）、面版：内容可添加到.panel-header、.panel-title、.panel-body、.panel-footer容器中

------

### 八、警告框

（1）、警告框：基类 .alert alert-default/primary/success/info/danger/warning

（2）、警告框中的链接：用 .alert-link 工具类，可以为链接设置与当前警告框相符的颜色

（3）、可关闭的警告框：.alert-dismissible，为警告框添加一个.alert-dismissible类和一个关闭按钮，确保在所有设备上的正确	行为必需给关闭按钮（如下button 元素）添加 data-dismiss="alert" 属性。

------

### 九、进度条

（a）、.progress：用类.progress包裹要添加进度条的元素

（b）、.progress-bar：进度条

（c）、进度条样式：progress-bar-default/primary/success/info/danger/warning

（d）、条纹效果：.progress-bar-striped，在有样式的前提下添加此类，条纹的色彩会基于此样式变化（IE9以下不兼容）

（e）、动画效果：.active，添加此类即可（最好有.progress-bar-striped类有明显效果）

------

# JavaScript插件

### 概览

1、引入方式：bootstrap.js/bootstrap.min.js（建议使用min版本）

2、注：jQuery必须在所有插件之前引入页面

3、data属性：可以仅仅通过 data 属性 API 就能使用所有的 Bootstrap 插件，无需写一行 JavaScript 代码。 关闭 data 属性 API 的方法，即解除以 data-api 为命名空间并绑定在文档上的事件. 如果是针对某个特定的插件，只需在 data-api 前面添加那个插件的名称作为命名空间

4、编程方式的 API

------

### 一、模态框（modal.js）

（1）、不支持同时打开多个模态框，不能在一个模态框上重叠另一个模态框。要想同时支持多个模态框，需自己写额外的代码来实现

（2）、模态框的 HTML 代码放置的位置(尽量作为 body 标签的直接子元素，以避免其他组件影响模态框的展现和/或功能)

（3）、增强模态框的可访问性：.modal 添加 role="dialog" 和 aria-labelledby="" 属性，用于指向模态框的标题栏；为	.modal-dialog 添加 aria-hidden="true" 属性

（4）、data-toggle="modal"：使此元素打开的对象是模态框，data-target="#id"：指向所要打开的模态框

（5）、.modal：把此元素识别为模态框，.fade：打开模态框时，有淡入淡出样式

（6）、.modal-dialog：对话框

（7）、.modal-content：整个模态框内所有元素（包括标题、文本、按钮等）

（8）、.modal-header、.modal-body、.modal-footer

（9）、data-dismiss="modal"：关闭模态框

（10）、.modal-lg/sm：可改变模态框大小

------