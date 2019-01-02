const express = require('express');

const mysql = require('mysql');

const _dirname = '../../'
const md5 = require(_dirname + 'utils/md5');

// 数据库连接池
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'learn'
})

module.exports = (function() {
  let router=express.Router();

  // 显示登录页面 (GET http://localhost:8080/admin/login)
  router.get('/', (req, res) => {
    res.render('admin/login.ejs', {});
  });
 // 处理登录页面 (GET http://localhost:8080/admin/login)
  router.post('/', (req, res) => {
    let username = req.body.username;
    let password = md5.MD5(req.body.password + md5.MD5_SUFFIX);

    // 查询数据库中用户名
    db.query(`SELECT * FROM admin WHERE username='${username}'`, (error, data) => {
      if(error) {
        res.status(500).send('database error').end();
      } else {
        if(data.length === 0) {
          res.status(400).send('Administrators do not exist').end();
        } else {
          if(data[0].password === password) {
            req.session['admin_id'] = data[0].ID;
            res.redirect('/admin/');
          } else {
            res.status(400).send('Password error').end();
          }
        }
      }
    })
  });

  return router;
}());
