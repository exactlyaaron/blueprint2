'use strict';

exports.showLogin = (req, res)=>{
  res.render('users/login', {title: 'Login Page'});
};
