const ejs = require('ejs');

const json = {
  arr: [
    {user: '123', pass: '123455'},
    {user: '456', pass: '123455'},
    {user: '789', pass: '123455'}
  ]
}
ejs.renderFile(
  './views/1.ejs',  // 渲染的ejs文件
  {   // 变量
    name: 'castiel',
    json,
    type:'admin'
  },
  (error, data) => {
  console.log(data);
})