const express = require('express');

const mysql = require('mysql');

// 数据库连接池
let db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'learn'
})

module.exports = (function() {
  let router=express.Router();

  //  显示对应页面
  router.get('/', (req, res)=>{

    switch(req.query.act) {
      case 'mod':
        db.query(`SELECT * FROM banners WHERE id=${req.query.id}`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else if(data.length==0){
            res.status(404).send('data not found').end();
          }else{
            db.query('SELECT * FROM banners', (err, banners)=>{
              if(err){
                console.error(err);
                res.status(500).send('database error').end();
              }else{
                res.render('admin/banners.ejs', {banners, mod_data: data[0]});
              }
            });
          }
        });
        break;
      case 'del':
        db.query(`DELETE FROM banners WHERE ID=${req.query.id}`, (err, data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else{
            res.redirect('/admin/banners');
          }
        });
        break;
      default:
        db.query("SELECT * FROM banners", (error, data) => {
          if(error) {
            res.status(500).send('database error').end();
          } else {
            res.render('admin/banners.ejs', { banners: data })
          }
        })
        break;
    }
  });

  // 处理数据
  router.post('/', (req, res) => {
    let title = req.body.title;
    let description = req.body.description;
    let link = req.body.link;

    if(!title || !description || !link) {
      res.status(400).send('arg error').end();
    } else {
      // 修改数据
      if(req.body.mod_id) {
        db.query(`UPDATE banners SET \
        title='${req.body.title}', \
        description = '${req.body.description}', \
        link = '${req.body.link}' \
        WHERE ID='${req.body.mod_id}'`,
        (error, data) => {
            if(error){
              console.log(error);
              res.status(500).send('database error').end();
            } else {
              res.redirect('/admin/banners');
            }
          }
        )
      } else {
        // 添加数据
        db.query(`INSERT INTO banners (title, description, link) VALUE('${title}', '${description}', '${link}')`, (err, data) => {
          if(err) {
            res.status(500).send('database error').end();
          } else {
            res.redirect('/admin/banners')
          }
        })
      }
    }
  })

  return router;
}());
