const express = require('express');

module.exports = (function() {
  let router=express.Router();

  //检查登录状态
  router.use((req, res, next) => {
    console.log(req.session['admin_id'])
    // session['admin_id']是否存在，请求的地址是否是/login
    if(!req.session['admin_id'] && req.url!='/login'){
      res.redirect('/admin/login'); //  跳转登录页面
    }else{
      next();
    }
  });

  router.get('/', (req, res)=>{
    res.render('admin/index.ejs', {});
  });

  router.use('/login', require('./login.js'))
  router.use('/banners', require('./banners.js'))
  router.use('/evaluation', require('./evaluation.js'))

  return router;
}());
