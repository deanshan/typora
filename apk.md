# apk打包过程

# Koa创建服务器

## 目录结构

```js
一级目录--二级目录--三级目录
server
	--data
    	--data.json
		--list.json
    --routes
    	--index.js	//对应入口文件
		--classify.js
    --static//静态资源
    	--jd.png
	--server.js
	--package.json
```

## 步骤

1. 创建服务器server文件夹并初始化项目（`npm init -y`）

2. 安装koa及中间件

   `npm i koa koa-router koa-static koa-bodyparser koa2-cors`







# 项目

## 开发环境

## 生产环境



# 打包工具

## JDK

[下载地址](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)  安装时jdk和jre安装在同一目录 

| 变量名    | 值                                                  |      |
| --------- | --------------------------------------------------- | ---- |
| JAVA_HOME | D:\dev\Java\jdk1.8.0_172                            |      |
| CLASSPATH | .;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar; |      |
| Path      | %JAVA_HOME%\bin;%JAVA_HOME%\jre\bin;                |      |

检查:`javac -version 或 java -version`

## Android Studio

安装时studio和SDK安装在同一目录 

[下载地址](http://www.android-studio.org/index.php/download) 	 [安装步骤](https://blog.csdn.net/janny_flower/article/details/78880026) 

| 环境变量名   | 值                                                           |      |
| ------------ | ------------------------------------------------------------ | ---- |
| ANDROID_HOME | D:\dev\Android\Sdk                                           |      |
| GRADLE_HOME  | D:\dev\Android\studio\gradle\gradle-4.1\bin                  |      |
| Path         | %ANDROID_HOME%\platform-tools; %ANDROID_HOME%\tools; %GRADLE_HOME%; |      |

如果下载没sdk，可以跳过，在欢迎界面安装

在欢迎界面点击Configure -》 SDK Manage

​	SDK Platforms 下载 5.0以上的安卓SDK版本

在欢迎界面点击Configure -》 Check for Updates

​	更新studio到最新版

检查：`adb` 

# 打包步骤

1. `npm i -g cordova` 全局安装

2. `cordova -v` 测试是否安装成功

3. `cd XXXX` 进入文件夹（此文件夹为存放打包项目的）（eg:web)

4. `cordova create app` (在web文件下）创建项目 名称为app(名称自定义，以下均以app代替)

5. `cd app` 进入app项目目录 

   + www目录：为项目打包目录，直接把项目复制进去即可（一定要有index.html并且直接放在www目录下）
   + config.xml文件修改：
     1. widget id 值是 apk安装目录（可以自定义）
     2. name apk名称（自定义）
   + platforms 为项目打包输出目录

6. `cordova platform add [android|ios]` ：进入app项目目录，添加平台支持

7. `cordova requirements` 检查构建条件

8. 执行打包命令

   ```js
   cordova build [android|ios] --release      //生成没有签名的apk
   ```

# 生成签名

1. 进入APK生成后所在的目录(eg:E:\web\web\project\app\platforms\android\app\build\outputs\apk\release)

2. 在apk目录下，生成签名文件

   ```
   keytool -genkey -v -keystore my-key.keystore -alias XXX -keyalg RSA -keysize 2048 -validity 10000
   ```

   keytool是工具名称；

   -genkey意味着执行的是生成数字证书操作；

   -v表示将生成证书的详细信息打印出来；

   -keystore **my-key.keystore** 表示证书的文件名；

   -alias **XXX** 表示证书的别名；（SDA）

   -keyalg RSA 生成密钥文件所采用的算法；

   -validity **10000** 该数字证书的有效期，单位是**天**；

   输入后会让你输入密码，并回答一些关于你公司和地区的问题，回答完后截屏记录，防止忘记。

   **(目前所有问题答案：SDA，密码：123456)**

   > 创建个人证书：

   1. 移动设备系统要求所有程序必须有签名，否则就不安装；
   2. 输入指令时可将 XXX 改成自己设定的名字
   3. 签发中密码不必复杂，设为 123456 即可！
      1. 证书只签发一次就行，以后可重复使用的

3. 在apk目录下，签名apk 验证

   ```
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-key.keystore app-release-unsigned.apk XXX
   ```

   jarsigner是工具名称，

   -verbose表示将签名过程中的详细信息打印出来；

   -keystore **my-key.keystore** 刚刚生成的签名文件；

   -signedjar **app.apk**  **XXX**：签名后的apk名称（与证书别名一致）

# 重复打包

打包步骤执行一次，当再次打包无需执行所有步骤，只需执行如下步骤即可：

1. 打包步骤5：把www目录下的所有文件替换为项目文件

2. 打包步骤8：生成apk

   ```js
   cd E:\web\web\project\app
   cordova build android --release
   ```

3. 生成签名3：签名apk验证

   ```js
   cd E:\web\web\project\app\platforms\android\app\build\outputs\apk\release
   jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-key.keystore app-release-unsigned.apk SDA
   密码：123456
   ```

