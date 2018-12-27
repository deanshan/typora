/**
 * 小孩走路
 * @param {[type]} container [description]
 */
function BoyWalk() {

    var container = $("#content");
    // 页面可视区域
    var visualWidth = container.width();
    var visualHeight = container.height();

    // 获取数据
    var getValue = function(className) {
        var $elem = $('' + className + '');
            // 走路的路线坐标
        return {
            height: $elem.height(),
            top: $elem.position().top
        };
    };
    // 路的Y轴
    var pathY = function() {
        var data = getValue('.a_background_middle');
        return data.top + data.height / 2;
    }();
    var $boy = $("#boy");
    var boyWidth = $boy.width();
    var boyHeight = $boy.height();
    // 修正小男孩的正确位置
    $boy.css({
        top: pathY - boyHeight + 25
    });

    // 设置一下缩放比例与基点位置
        var proportion =  $(document).width() / 1440;
        // 设置元素缩放
        $boy.css({
            transform: 'scale(' + proportion + ')'
        });
        // 路的中间到顶部的距离
        var pathY = function() {
            var data = getValue('.a_background_middle');
            return data.top + data.height / 2;
        }();

        // 获取人物元素布局尺寸
        var boyHeight = $boy.height();
        var boyWidth = $boy.width();
        // 计算下缩放后的元素与实际尺寸的一个距离
        var boyInsideLeft = (boyWidth - (boyWidth*proportion))/2;
        var boyInsideTop = (boyHeight - (boyHeight*proportion))/2;

        // 修正小男孩的正确位置
        // 中间路的垂直距离 - 人物原始的垂直距离 - 人物缩放后的垂直距离
        $boy.css({
            top: pathY - (boyHeight * proportion) - boyInsideTop
        });


    // 暂停走路
    function pauseWalk() {
        $boy.addClass('pauseWalk');
    }

    // 恢复走路
    function restoreWalk() {
        $boy.removeClass('pauseWalk');
    }

    // css3的动作变化
    function slowWalk() {
        $boy.addClass('slowWalk');
    }

    // 用transition做运动
    function stratRun(options, runTime) {
        var dfdPlay = $.Deferred();
        // 恢复走路
        restoreWalk();
        // 运动的属性
        $boy.transition(
            options,
            runTime,
            'linear',
            function() {
                dfdPlay.resolve(); // 动画完成
            });
        return dfdPlay;
    }

    // 开始走路
    function walkRun(time, dist, disY) {
        time = time || 3000;
        // 脚动作
        slowWalk();
        // 开始走路
        var d1 = stratRun({
            'left': dist + 'px',
            'top': disY ? disY : undefined
        }, time);
        return d1;
    }

    // 计算移动距离
    function calculateDist(direction, proportion) {
        return (direction == "x" ?
            visualWidth : visualHeight) * proportion;
    }

    return {
        // 开始走路
        walkTo: function(time, proportionX, proportionY) {
            var distX = calculateDist('x', proportionX)
            var distY = calculateDist('y', proportionY)
            return walkRun(time, distX, distY);
        },
        // 停止走路
        stopWalk: function() {
            pauseWalk();
        },
        setColoer:function(value){
            $boy.css('background-color',value)
        }
    }
}