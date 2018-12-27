/*
**使用方法:
**  导航壳必须引入类.floorNav,css样式display设为none,固定定位,例:<ul class='floorNav'><li></li></ul>
**  导航栏对应的楼层必须引入类.floor  例：<div><div class='floor'></div><div class='floor'></div></div>
**  @param  showH 可以是具体数值,也可是某个元素的高度
**  @param  className 类名，默认为null
*/
function FloorNav (options) {
  this.floorNav = document.querySelector('.floorNav') //导航壳
  this.navBar = this.floorNav.children  //导航栏

  this.floor = document.querySelectorAll('.floor')  //对应的楼层

  this.screenHeight = document.documentElement.clientHeight //获取可视区高度

  this.options = {
    showH: 500,
    className: null
  }

  Object.assign(this.options, options)
}
FloorNav.prototype = {
  constructor: FloorNav,

  // 获取和设置dom元素的样式
  css (element, objStyle, value) {

    if (typeof objStyle === 'string') {
      console.log(111)
      if (arguments.length === 2) {
        return window.getComputedStyle
            ? window.getComputedStyle(element,false)[objStyle]
            : element.currentStyle[objStyle]
      } else {
        element.style[objStyle] = value
      }
    }
    if (typeof objStyle === 'object') {
      for (var k in objStyle) {

        if (!objStyle[k]) {

          objStyle[k] = window.getComputedStyle
              ? window.getComputedStyle(element,false)[k]
              : element.currentStyle[k]

        } else {
          element.style[k] = objStyle[k]
        }
      }
      return objStyle
    }
  },
  // 初始化
  init () {
    //  在触发事件前，初始化楼层导航
    this.navBar[0].classList.add(this.options.className)  //  给一楼添加默认类名
  },
  // 监听楼层点击事件
  floorEvent () {
    let _this = this
    Array.prototype.slice.call(this.navBar).forEach(function (element,key) {

      element.addEventListener('click', function (e) {

        clearInterval(_this.time) // 解决：连续点击造成的页面来回滚动问题

        _this.time = setInterval(function () {

          _this.distance = (_this.floor[key].offsetTop - _this.scrollTop) / 10

          if (_this.distance < 1 && _this.distance > 0) {
            _this.distance = 1
          }
          if (_this.distance > -1 && _this.distance < 0) {
            _this.distance = -1
          }

          window.scrollTo(0, _this.scrollTop + _this.distance)

          if ((_this.distance >= 0 && _this.floor[key].offsetTop <= _this.scrollTop) || (_this.distance <= 0 && _this.floor[key].offsetTop >= _this.scrollTop)) {
            clearInterval(_this.time)
          }
        },1)
      })
    })
  },
  // 监听滚动条事件（此处滚动对象为window)
  scrollEvent () {
    let _this = this
    window.onscroll = function () {

      _this.scrollTop = document.documentElement.scrollTop
                      || window.pageYOffset
                      || document.body.scrollTop  //  获取鼠标滚动的距离

      if (_this.scrollTop >= _this.options.showH) {

        _this.css(_this.floorNav,{'display': 'block'})  //  显示楼层导航

        _this.floor.forEach(function (element,key) {  //  遍历楼层，改变楼层导航的样式,此处添加或删除类最好

          if (_this.scrollTop + _this.screenHeight / 3 > element.offsetTop) {
            //  添加移除类名
            for (let i = 0; i < _this.navBar.length; i++) {

              _this.navBar[i].classList.remove(_this.options.className)

            }
            _this.navBar[key].classList.add(_this.options.className)
          }
        })
      } else {

        _this.css(_this.floorNav,{'display':'none'})

      }
    }
  },
  floorScroll () {
    this.init()
    this.floorEvent()
    this.scrollEvent()
  }
}
new FloorNav({
  showH: header.offsetHeight,
  className: 'floorActive'
}).floorScroll()

// var oNav = $('#LoutiNav'); //导航壳
// var aNav = oNav.find('li'); //导航
// var aDiv = $('#main .louceng'); //楼层
// var oTop = $('#goTop'); //回到顶部
// $(window).scroll(function() {
//         //可视窗口高度
//         var winH = $(window).height();
//         //鼠标滚动的距离
//         var iTop = $(window).scrollTop();

//         if(iTop >= $("#header").height()) {
//             oNav.fadeIn();
//             oTop.fadeIn();
//             //鼠标滑动样式改变
//             aDiv.each(function() {
//                 if(winH + iTop - $(this).offset().top > winH / 2) {
//                     aNav.removeClass('active');
//                     aNav.eq($(this).index()).addClass('active');
//                 }
//             })
//         } else {
//             oNav.fadeOut();
//             oTop.fadeOut();
//         }
//     })
// //点击回到当前楼层
// aNav.click(function() {
//     var t = aDiv.eq($(this).index()).offset().top;
//     $('body,html').animate({
//         "scrollTop": t
//     }, 500);
//     $(this).addClass('active').siblings().removeClass('active');
// });
// //回到顶部
// oTop.click(function() {
//     $('body,html').animate({
//         "scrollTop": 0
//     }, 500)
// })