用户注册、登录

接口：
注册
/user?act=reg&user=aaa&pwd=123456
  {'ok':false, 'msg':'原因'}

登录
/user?act=login&user=aaa&pwd=123456
  {'ok':false, 'msg':'原因'}

对文件的访问
http://localhost:8080/1.html
http://localhost:8080/ajax.js
http://localhost:8080/1.jpg

对接口的访问
http://localhost:8080/user?act=xx...
http://localhost:8080/news?act=xxx...
