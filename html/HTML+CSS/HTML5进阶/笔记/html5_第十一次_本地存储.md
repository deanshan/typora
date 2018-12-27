# 本地存储
h5之前，存储主要是用cookies。
cookies缺点有数量和长度的限制：每个域的cookie总数有限，一般不超过50个。潜在的安全风险：Cookie可能被拦截、篡改。如果cookie被拦截，就有可能取得所有的session信息。用户配置为禁用、有些状态是不可能保存在客户端的。

Web Storage是HTML5引入的一个非常重要的功能，在前端开发中经常用到，可以在客户端本地存储数据，类似cookie，但可实现功能要比cookie强大的多

**sessionStorage与localStorage区别**
1.	localStorage和sessionStorage一样都是用来存储客户端临时信息的对象。
2.	他们均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。
3.	localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。
4.	sessionStorage生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过sessionStorage存储的数据也就被清空了。
5.	不同浏览器无法共享localStorage或sessionStorage中的信息。
6.	
### sessionStorage
将数据保存在session对象中，所谓session是存储特定用户会话所需的属性及配置信息，它的周期是用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间，也就是用户浏览这个网站所花费的时间

#### localStorage
将数据保存在客户端本地的硬件设备（通常指盘，当然可以是其他的硬件设备）中，即是浏览器被关闭了，该数据仍然存在，下次打开浏览器访问网站时，仍然可以继续使用。

sessionStorage 和 localStorage  的方法

- setItem(key,value): 往对象里增加一个key/value数据。
- getItem(key): 根据key获取值。
- clear(): 清空对象。
- removeItem(key): 从对象里删除一个数据。
- key(n): 获取第n个key的值(不是value)。

## indexDB
IndexedDB是一个事务型数据库系统，类似于基于SQL的RDBMS。

然而不同的是它使用固定列表，IndexedDB是一个基于JavaScript的面向对象的数据库。

IndexedDB允许您存储和检索用键索引的对象; 

### 异步API
异步 API 方法调用完后会立即返回，而不会阻塞调用线程。

要异步访问数据库，要调用 window 对象 indexedDB 属性的 open() 方法。该方法返回一个 IDBRequest 对象 

具体API操作请参考：
https://www.jianshu.com/p/fa52b73e44c2

https://developer.mozilla.org/zh-CN/docs/Web/API/IndexedDB_API