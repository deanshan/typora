# HTML5新增表单
## 教学目标
在HTML4的基础之上新增了一些表单的属性和类型，这些属性和类型，让我们的表单更加完善和合理，那么我们这节课就来探讨一下表单的魅力吧！
## 测试地址
以下表单案例action地址均使用：

http://www.w3school.com.cn/example/html5/demo_form.asp

http://coolaf.com/tool/params

## input 新增类型
实例代码
```
<form action="">
	<!-- url类型 定义用于 URL 的文本字段。 -->
	url:<input type="url" name=url ><br/><br/>
	<!-- email类型  定义用于 e-mail 地址的文本字段-->
	email:<input type="email" name=email ><br/><br/>
	<!-- number类型 -->
	number:<input type="number" name=num min=-5 max=5 step=2><br/><br/>
	<!-- range类型 定义带有 slider 控件的数字字段。 -->
	range:<input type="range" name=range min=-5 max=5 step=2><br/><br/>
	<!-- search搜索框，关键字 定义用于搜索的文本字段。 -->
	search:<input type="search" name=sea><br/><br/>
	<!-- color类型 定义拾色器 -->
	color:<input type="color" name=color onchange="document.body.style.backgroundColor = this.value"><br/><br/>
	<!-- date/time类型 -->
    date:<input type="date" name=date><input type="time" name=time><br/><br/>
	<!-- datetime类型 浏览器不支持 -->
    datetime:<input type="datetime" name=dt><br/><br/>
	<!-- datetime-local类型 -->
    datetime-local:<input type="datetime-local" name=dl><br/><br/>
	<!-- month类型 -->
    month:<input type="month" name=month><br/><br/>
	<!-- week类型 -->
	week:<input type="week" name=month><br/><br/>
	<input type="submit">
</form>

```
## From属性
1. **autocomplete：** 规定表单是否应该启用自动完成功能, 应该显示出在字段中填写的选项

    autocomplete:    off(默认，打开)|on 关闭
```
<form action="" method="get" autocomplete="on"> 
    账号: <input type="text" name="user" required /><br /> 
    密码: <input type="password" name="pwd"/><br /> 
    <input type="submit" />
</from>

```
2. **novalidate：** 表单提交时不进行验证
    出现该属性表示对表单不进行验证
```
<form action="" method=get novalidate>
	…
	Email:<input type="email" name="user_email" required /><br />
    <input type="submit" />
</form>
```
## Input 属性
1. **atofocus:** 加载时是否获得焦点
```
<from…
    账号: <input type="text" name="user" autofocus/><br /> 
	…
</from>
```
2. **required:** 必输项 
```
<from…
    账号: <input type="text" name="user" required/><br /> 
	…
</from>
```
3. **placeholder：** 提示用户
```
<from…
    账号: <input type="text" name="user" required placeholder="请输入用户名"/><br /> 
	…
</from>
```
4. **pattern：**  规定用户输入规则

    需要用正则表达式，验证输入的信息
```
//表示只能输入  A-Z,a-z,0-9  中的任意6位数
<input type="text" name="" pattern="[A-z|0-9]{6}" title="请输入六个个字符" />
```
5.  **multiple：** 可选一个或多个值
    
    适用于类型：file或email(逗号分隔)
```
<input type="file" name="" multiple />
```
6. **form：** input所属表单，表单必须有ID （没效果网页多刷新几次）
```
<form action="" method="get" id="form1">
	账号: <input type="text" name="user" /><br />
	<input type="submit" value="提交" />
</form><br />
密码: <input type="password" name="pwd"  form="form1"/>
```

7. **list：** 结合datalist使用

    list这是HTML5新属性，datalist  是新标签
```
<input type="url" list="url_list" name="link" />
<datalist id="url_list">
	<option label="百度" value="http://www.baidu.com " />
	<option label="谷歌" value="http://www.google.com" />
	<option label="淘宝" value="http://www.taobao.com" />
</datalist>
```
## 表单重定向
**formaction/frommethod/formenctype:** 覆盖from表单的action/method/enctype属性
```
<from method="get">
    …
	<input type="submit" value="提交" 
        frommethod=post 
        formenctype="text/plain" //将空格转为+号，共有三个值
 		formaction="action地址"
 		formtarget ="_self"
 		/>
</from>

```
**fromentype的三个参数**
- application/x-www-form-urlencoded	在发送前对所有字符进行编码（默认）。
- multipart/form-data	不对字符编码。当使用有文件上传控件的表单时，该值是必需的。
- text/plain	将空格转换为 "+" 符号，但不编码特殊字符。

**formtarget:提交后展现方式，覆盖target属性**

submit或image,_blank、_self、_parent…













