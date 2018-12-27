# Geolocation 地理位置
通过本次课程，理解地图是如何在页面中渲染出来的，能让学生能够独立的做出地图效果，这里的讲解以《百度》地图所提供的API进行讲解。

本次课程所需要的API 是使用的《百度地图》，详情可以参考：http://developer.baidu.com/map/reference/

### 简介
地理位置（Geolocation）是 HTML5 的重要特性之一，提供了确定用户位置的功能，借助这个特性能够开发基于位置信息的应用，使得开发人员不用借助其他软件就 能轻松实现位置查找，地图应用，导航等功能，具有划时代的意义！

在访问位置信息前，浏览器都会询问用户是否共享其位置信息，以 Chrome 浏览器为例，如果您允许 Chrome 浏览器与网站共享您的位置，Chrome 浏览器会向 Google 位置服务发送本地网络信息，估计您所在的位置。然后，浏览器会与请求使用您位置的网站共享您的位置。

### 创建密钥
创建的地址：http://lbsyun.baidu.com/apiconsole/key

创建应用: 填写应用名称>选择浏览器端->服务默认->输入正确的网址->提交申请

查看应用：可以看到生成的密钥。

### 核心对象
Geolocation是window.navigator下面的一个对象， 该对象提供了实现地理位置定位的接口

#####  Geolocation对象详解

getCurrentPosition(success,error,options)该方法是 实现地理定位的核心方法，该方法能够对获取到的 信息作出处理以及设置。
-    **success(position)** 获取信息成功的回调函数 
-    **error(errorcode)** 获取信息失败的回调函数 
-    **options** 获取信息前可以按照你的需求来设置一些参数

==navigator.geolocation.getCurrentPosition(success,error,options)==

##### success(position) 获取信息成功的回调函数
当成功获得信息的时候，会自动调用success函数，而 这个函数会自动生成一个包含返回地理信息的position 对象，如下：

1. 	coords.latitude（纬度） 
1. 	coords.longitude（经度） 
1. 	coords.altitude（海拔） 
1. 	coords.accuracy（位置精确度） 
1. 	coords.altitudeAccuracy(海拔精确度) 
1. 	coords.heading（朝向） 
1. 	coords.speed (速度) 
1. 	timestamp(响应的日期/时间)

##### error(errorcode)获取信息失败的回调函数

A. 地理信息会因为各种因素，例如信号不好等等而出错。因此当获取信息失败的时候会自动调用getCurrentPosition的第二个参数，即error函数，这个函数会自动生成一个包含错 误代码和错误信息的对象作为其参数，code是错误代码，message是错误信息。

```
switch(errorcode.code){
		 case 1 : alert(errorcode.message);//用户选了不允许 break;
        //连不上GPS卫星，或者网络断了
		case 2: alert(errorcode.message); break;
	    case 3: alert(errorcode.message);//超时了 break;
	    default: alert(errorcode.message);
        //未知错误，其实是err.code==0的时候 break;
}
```
**  options 设置一些参数**

options是一个对象，可以设置超时时间、缓存时间等，如下：

A.enableHighAccuracy 表示是否允许使用高精度，但这个 参数在很多设备上设置了都没用，设备综合考虑电量、地理情况等，很多时候都是默认的由设备自身来调

B.timeout指定超时时间

C.maximumAge 是指缓存的时间

geolocation 还有两个方法：

1.watchPosition(success,error,options) 表示重复获取地 理位置，相当于将getCurrentPosition这个方法利用 setinterval不断执行，其他用法和参数使用一样。

2.clearWatch()用来清除前一次获取的位置信息。 这个两个方法配合使用，能够实现一些很棒的功能，比 如说：导航等！

### 作业
根据API 实现地图的使用














