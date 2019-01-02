// 客户端 ：  收发消息  连接web站点 连接socket服务器
// web服务器：  连接客户端  发送客户端页面
// socket实例： 建立连接  接收客户端消息  广播

const path = require('path');

// 通过http创建，可以在express基础上使用更多http功能
// 通过http创建，更便于扩展至https服务器

const app = require('express')()
const http = require('http').Server(app)

//  创建一个socketIO的实例并挂载到当前的web服务器下，产生socket实例
const io = require('socket.io')(http)

//  app.configure, app.use etc
app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'client.html'));  //  拼接字符串，等同于__dirname + '/client.html'
  // res.sendFile(__dirname + '/client.html');
});

// 监听连接事件
io.on('connection', socket => {
  // 建立连接后 do something...

  // 接受客户端发送过来的消息
  socket.on('message', msg => {
    console.log(msg);
    io.emit('news', msg)  //  向所有客户端广播
    // socket.emit('news', msg) //  向建立该连接的客户端广播
    // socket.broadcast.emit('news', msg) //  向其它所有客户端广播（不包括自己）
  })

  // 监听客户端断开连接事件
  socket.on('disconnect', () => {
    // do something...
    console.log('user disconnected');
  });
});

const os = require('os');
function getIPv4(){
  var interfaces = os.networkInterfaces();//获取网络接口列表
  var ipv4s = [];//同一接口可能有不止一个IP4v地址，所以用数组存
  Object.keys(interfaces).forEach(function (key){
    interfaces[key].forEach(function (item){

        //跳过IPv6 和 '127.0.0.1'
        if ( 'IPv4' !== item.family || item.internal !== false )return;

        ipv4s.push(item.address);//可用的ipv4s加入数组
        console.log(key+'--'+item.address);
    })
  })

  return ipv4s[0];//返回一个可用的即可
}

app.set('port', process.env.PORT || 3000);

var server = http.listen(app.get('port'), function() {
  console.log('start at port:' + getIPv4() +':'+ server.address().port);
  return getIPv4()
});