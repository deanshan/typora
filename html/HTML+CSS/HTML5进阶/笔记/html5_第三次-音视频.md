# 音视频
音视频在HTML5中非常常见，主要体现在一些视频类网站上
## 参考地址
http://blog.csdn.net/jingguanliuye/article/details/53945469
## audio 音频
### 常见音频格式
**音频编码** ：ACC,MP3,VORBIS
**HTML5支持格式**
- Ogg 免费 支持的浏览器: C、F、O
- MP3 收费 支持的浏览器: I、C、S
- Wav 收费 支持的浏览器: F、O、S
###  audio属性
属性| 解释
---|---
autoplay |自动播放
controls| 向用户显示播放控件
loop| 循环
preload |是否等加载完再播放
src |要播放的音频的 URL

###  案例
**单个资源的设置**
```
<audio src="resource/song.mp3" controls="control" id ="audio">不支持该标签</audio>
```
**多个资源格式**
```
	<audio controls loop="loop" autoplay="autoplay">
		<source src="resource/song.mp3" />
		<source src="resource/song.ogg" />
		<source src="resource/song.acc" />
		不支持该标签
	</audio>	
```	
**js 控制是否播放**
```
<audio src="resource/song.mp3" controls="control" id ="audio">不支持该标签</audio>
<button id="play">播放</button>
<script>
	play.onclick = function(e){
    	audio.play();
	}
</script>
```
## 视频
### video支持视频格式
#### 常见的视频组成
**视频的组成部分：** 画面、音频、编码格式

**视频编码：** H.264、Theora、VP8(google开源)
#### HTML5支持的视频格式
**Ogg** 	

带有Theora视频编码+Vorbis音频编码的Ogg文件

支持的浏览器:F、C、O

**MEPG4**

带有H.264视频编码+AAC音频编码的MPEG4文件

支持的浏览器: S、C

**WebM**	

带有VP8视频编码+Vorbis音频编码的WebM格式

支持的浏览器: I、F、C、O

劣势：视频少、转码器几乎没有，不好转码

#### video标签
指定一种视频格式，不能播就提示不支持该标签
```
<video id="media" src="examp.mp4" width="500" poster="examp1.jpg" >
    您的浏览器不支持video
</video>
```
给定多种视频格式，浏览器根据自身支持程度选择播放哪一种
```
<video controls = “controls”>
    //src属性写到source标签中，要指定视频的type类型，例如MP4的即为type=“video/mp4”
   	<source src=”1.mp4” type=”video/mp4” /> 
   	<source src = “2.ogg” type=”video/ogg” />  //ogg格式
  	<source src=”3.webm” type=”video/webm” />   //webm格式
</video>	
```
> 注意：多个source标签，浏览器会从第一个开始识别，如果第一个不被识别，则会继续识别第二个；如果第一个识别成功，则会直接播放第一种格式视频


>想要video能自动填充慢父div的大小，只要给video标签加上style="width= 100%; height=100%; object-fit: fill"即可

#### video 属性


属性(常用)值|	功能描述
---|---
controls	|	是否显示播放控件
autoplay|		设置是否打开浏览器后自动播放
width	|		设置播放器的宽度
height	|		设置播放器的高度
loop	|		设置视频是否循环播放（即播放完后继续重新播放）
preload	|	    设置是否等加载完再播放
src		|		设置要播放视频的url地址
poster	|		设置播放器初始默认显示图片
autobuffer	|	设置为浏览器缓冲方式，不设置autoply才有效

####  video 方法
参考地址：
http://blog.csdn.net/jingguanliuye/article/details/53945469



















