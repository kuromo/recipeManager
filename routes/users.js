var express = require('express');
var mongoose = require('mongoose')
var AC = require('../controllers/account.js');
//var userM = require('../models/index');

module.exports.controller = function(app) {

	app.get('/register', function(req, res, next) {
		res.render('user/register');
	});

	app.post('/register', function(req, res, next) {
	/*	check('mail')
    .isEmail().withMessage('must be an email')
    .trim()
    .normalizeEmail()

    	check('usrName').exists()
*/



		AC.register({
			usrName: req.body.usrName,
			email: req.body.mail,
			firstName: req.body.firstName,
			lastName: req.body.lastName,
			passwordHash: req.body.pwd
		}, function(err, msg){
			if(!err){
				if(msg.success){
					req.session.usr = msg.extras.userProfileModel
					res.send({ redirect: '/profile' })
				}else{
					//TODO tell user
					console.log(msg)
				}
			}else{
				console.log(err)
			}
		})	
	});

	app.get('/login', function(req, res, next) {
		res.render('user/login');
	});

	app.post('/login', function(req, res, next) {
		var sess = req.session
		
		AC.logon(req.body.usrName, req.body.pwd, function(err, msg){
			if(err){return console.log(err)}
			
			if(msg.success){
				req.session.usr = msg.extras.userProfileModel
				req.flash('success', 'Successfully logged in.');
				res.send({ redirect: '/profile' })
			}else{
				//TODO tell user
				console.log(msg)
			}
		})
	});

	app.get('/logout', function(req, res, next) {

		req.session.destroy(function(err) {
			if(err) {
				console.log(err);
			} 
			req.flash('success', 'Successfully logged out.');
			res.send({ redirect: '/' })
			
		});
	});

	app.get('/profile', function(req, res, next) {
		var sess = req.session

		if(sess.usr){
			AC.checkSess(req.session.usr,function(err, msg){
				if(err){return console.log(err)}
				
				if(msg.success){
					var user= msg.extras.user

					res.render('user/profile', { 
						name: user.usrName +"  aka. " +user.firstName + " " + user.lastName
					});
				}else{
					//TODO tell user
					console.log(msg)
				}
			})
		}else{
			res.render('user/login');
		}		
	});

	app.get('/forgot', function(req, res, next) {
		res.render('user/forgot');
	});

	app.post('/forgot', function(req, res, next) {
		AC.forgot(req.body.mail, req.headers.host, function(err, msg){
			if(err){return console.log(err)}

			if(msg.success){
				res.send({ redirect: '/' })
			}else{
				//TODO tell user
				console.log(msg)
			}
		})
	});

	app.get('/reset/:token', function(req, res) {
		AC.showReset(req.params.token, function(err, msg){
			if(err){return console.log(err)}

			if(msg.success){
				res.render('user/reset');
			}else{
				//TODO tell user
				console.log(msg)
			}
		})
	});

	app.post('/reset/:token', function(req, res) {
		AC.reset(req.params.token, req.body.pwd, function(err, msg){
			if(err){return console.log(err)}

			if(msg.success){
				res.send({ redirect: '/profile' })
			}else{
				//TODO tell user
				console.log(msg)
			}
		})
	})

}





