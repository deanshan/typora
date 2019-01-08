# better-scroll

### 1、使用基本条件

+ 必须包含两个大的div，外层和内层div
+ 外层div设置可视的大小(宽或者高)-有限制宽或高
+ 内层div，包裹整个可以滚动的部分
+ 内层div高度一定大于外层div的宽或高，才能滚动
+ ==better-scroll只处理窗口的第一个子元素的滚动，其它的元素会被忽略==

### 2、基本使用

```js
new BScroll(dom)//dom为外层div
```

