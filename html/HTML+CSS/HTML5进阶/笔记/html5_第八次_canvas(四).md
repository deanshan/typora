# canvas
## canvas 动画
canvas常用的动画方法
- setInterval();   
- setTimeout();
- requestAnimationFrame() 

#### setInterval()  帧动画
这个方法用来控制图形连续的运动。要停止动画需要用到clearInterval();
#### setTimeout()   定时动画
#### requestAnimationFrame(callback);
一个指定函数的参数，该函数在下次重新绘制动画时调用。这个回调函数只有一个传参

requestAnimationFrame()方法是浏览器的内置对象，IE9以下不兼容。可以做图形的匀速运动，而不是跳动。

可以使用cancelAnimationFrame(globalID)方法暂停动画。
优点：

1.  经过浏览器优化，动画更流畅
1.  窗口没激活时，动画将停止，省计算资源
1.  更省电，尤其是对移动终端

如果你要取消该次动画，需要用到
 window.cancelAnimationFrame(stop);
 
 
 ##### 案例一：动态时间
 ##### 案例二：旋转风车
 
 ### 作业一：写字板
 ### 作业二：动态时钟
 
 
 
 
 