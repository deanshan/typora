
var ctx ,w ,h;
var lasttime , detaltime;

// document.body.onload = start;
$(window).load(start);

var bgPic = new Image();
var star;

function start() {
    init();
    // 获取第一次执行时的时间差
    lasttime = (new Date()).getTime();
    detaltime = 0;
    gameLoop();
}

function init() {
     //浏览器当前窗口可视区域宽度/高度 
     w = $(window).width() - 20;
     h = $(window).height() - 20;

     // 设置画布的属性值
    $('#canvas').attr({ width: w ,height: h});
    ctx = $('#canvas')[0].getContext("2d");

    bgPic.src = "./src/bg2.jpg";

    // 调用starObj()类的init()方法
    star = new starObj();
    star.init();
}
function gameLoop() {
    //通过requestAnimationFrame方法获取实时的时间差
    now = (new Date()).getTime();
    // 获取每次更新后和上次更新的差值
    detaltime = now - lasttime  ;
    console.log(detaltime)
    // 存储每次更新的时间差值
    lasttime = now;
    // 将图片添加到画布1上
    ctx.drawImage(bgPic, 0, 0, w, h);
    // 执行starObj()类的draw()方法
    star.draw();
    drawBg(800,360);
    // 间隔一定时间回调指定函数
    requestAnimationFrame(gameLoop);

    console.log("star", star);
    console.log("loop",detaltime );
}
function drawBg(x,y){
    // 旗面
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.fillStyle="red";
    ctx.bezierCurveTo(x+20, y-26, x+120, y+80, x+120, y+37);
    ctx.lineTo(x+120,y+150);
    ctx.bezierCurveTo(x+120, y+170, x+34, y+90, x, y+100);
    ctx.lineTo(x,y);
    ctx.fill();
    ctx.closePath();
    ctx.restore();

    // 旗杆
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x,y+200);
    ctx.lineWidth=6;
    ctx.lineCap="round";
    ctx.stroke();
    ctx.closePath();
    ctx.restore();

    // 星星
    drawStar(5 , 10, 820 ,405 , 0 , 1, 'red', 'yellow');
    drawStar(3 , 6 , 835 ,385 , 20, 1, 'red', 'yellow');
    drawStar(3 , 6 , 845 ,395 , 40, 1, 'red', 'yellow');
    drawStar(3 , 6 , 845 ,410 , 60, 1, 'red', 'yellow');
    drawStar(3 , 6 , 835 ,425 , 80, 1, 'red', 'yellow');
}
function drawStar( r , R , x , y , rot , borderWidth , borderStyle , fillStyle){
    ctx.save();
    ctx.beginPath();
    for( var i = 0 ; i < 5 ; i ++){
        ctx.lineTo(Math.cos((18+72*i - rot)/180*Math.PI) * R + x ,- Math.sin((18+72*i - rot )/180*Math.PI) * R + y);
        ctx.lineTo(Math.cos((54+72*i - rot)/180*Math.PI) * r + x ,- Math.sin((54+72*i - rot )/180*Math.PI) * r + y);
    }
    ctx.closePath();

    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = borderStyle;
    ctx.fillStyle = fillStyle;

    ctx.fill();
    ctx.stroke();
    ctx.restore();
}
