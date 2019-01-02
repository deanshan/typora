const path=require('path');
const fs=require('fs');

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
  let router = express.Router()

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM user_evaluation`, (error, evaluations) => {
      if(error) {
        console.error(error);
        req.status(500).send('database error').end();
      } else {
        console.log(new Date() + '0000')
        res.render('admin/evaluation.ejs', {evaluations});
      }
    })
  })

  router.post('/', (req, res) => {
    let title=req.body.title;
    let description=req.body.description;

    let extension = path.parse(req.files[0].originalname).ext

    let oldPath = req.files[0].path;
    let newPath = oldPath + extension;

    let newFileName=req.files[0].filename + extension;

    fs.rename(oldPath, newPath, (err)=>{
      if(err){
        console.error(err)
        res.status(500).send('file opration error').end();
      } else {
        // if(req.body.mod_id){  //修改
        // }else{                //添加
          db.query(`INSERT INTO user_evaluation (title, description, src) VALUES('${title}', '${description}', '${newFileName}')`, (err, data)=>{
            if(err){
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              console.log(new Date())
              res.redirect(301, '/admin/evaluation');
            }
          });
        // }
      }
    });
  });

 return router
}())