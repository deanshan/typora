

==谷歌浏览器设置字体大小小于浏览器默认的最小字体（12px）==

```css
.small-font{ 
    font-size: 12px; 
    -webkit-transform-origin-x: 0;   //X方向上缩放的中心点
    -webkit-transform: scale(0.9); 
    transform: scale(0.9); 
}
```

==相邻的span元素之间默认间距(换行或空格都会产生间距)==

```css
span {
    float: left;
}
```

==关于同步请求，浏览器假死状态下，js进程阻塞GUI进程示例中的未解决问题，示例如下==

```html
<style>
	.move  {
        width: 50px;
        height: 50px;
        background: red ;
        position: absolute;
        left: 0px   ;
        top: 10px;
        animation: move 1s infinite;
    }
    @keyframes move1 {	//	元素不受影响，会一直转动
        0% { transform: rotate(0deg); }
        100% { transform: rotate(359deg); }
    }
    @keyframes move2 {	// 在数据请求的过程中，会停止移动，直至请求完成后，接着移动
        0% { left: 0px }
        100% { left: 1500px }
    }
</style>
<div class="move"></div>
<script>
    //其它dom事件进行的同步请求
    $.ajax({
        anync: false
    })
</script>


```

